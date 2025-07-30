import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const savedUser = localStorage.getItem('horizonCurrentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);


  const getRegisteredUsers = () => {
    const users = localStorage.getItem('horizonRegisteredUsers');
    return users ? JSON.parse(users) : [];
  };

  
  const saveRegisteredUser = (userData) => {
    const existingUsers = getRegisteredUsers();
    const updatedUsers = [...existingUsers, userData];
    localStorage.setItem('horizonRegisteredUsers', JSON.stringify(updatedUsers));
  };

  // Update user in registered users list
  const updateRegisteredUser = (updatedUserData) => {
    const existingUsers = getRegisteredUsers();
    const userIndex = existingUsers.findIndex(u => u.id === updatedUserData.id);
    if (userIndex !== -1) {
      existingUsers[userIndex] = updatedUserData;
      localStorage.setItem('horizonRegisteredUsers', JSON.stringify(existingUsers));
    }
  };

  const login = async (loginData) => {
    const registeredUsers = getRegisteredUsers();
    
    // Check if user exists with this email
    const existingUser = registeredUsers.find(user => user.email === loginData.email);
    
    if (!existingUser) {
      toast.error('No account found with this email. Please sign up first.');
      return false;
    }

    // Check password 
    if (existingUser.password !== loginData.password) {
      toast.error('Invalid password. Please try again.');
      return false;
    }

    // Remove password before setting user (security)
    const { password, ...userWithoutPassword } = existingUser;
    
    setUser(userWithoutPassword);
    localStorage.setItem('horizonCurrentUser', JSON.stringify(userWithoutPassword));
    toast.success(`Welcome back, ${userWithoutPassword.firstName}!`);
    return true;
  };

  const signup = async (userData) => {
    const registeredUsers = getRegisteredUsers();
    
  
    const existingUser = registeredUsers.find(user => user.email === userData.email);
    if (existingUser) {
      toast.error('Account with this email already exists. Please login instead.');
      return false;
    }

    const userWithDefaults = {
      ...userData,
      id: Date.now(),
      profilePicture: null,
      bio: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      transactions: [],
      joinedDate: new Date().toISOString()
    };
    
    
    saveRegisteredUser(userWithDefaults);
    
   
    const { password, ...userWithoutPassword } = userWithDefaults;
    setUser(userWithoutPassword);
    localStorage.setItem('horizonCurrentUser', JSON.stringify(userWithoutPassword));
    
    toast.success('Account created successfully! Welcome to Horizon Homes!');
    return true;
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('horizonCurrentUser', JSON.stringify(updatedUser));
    
    
    updateRegisteredUser(updatedUser);
    toast.success('Profile updated successfully!');
  };

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...transaction
    };
    
    const updatedUser = {
      ...user,
      transactions: [newTransaction, ...user.transactions]
    };
    
    setUser(updatedUser);
    localStorage.setItem('horizonCurrentUser', JSON.stringify(updatedUser));
    
    
    updateRegisteredUser(updatedUser);
    toast.success('Property purchased successfully!');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('horizonCurrentUser');
    toast.success('Logged out successfully!');
  };

  const deleteAccount = () => {
    if (user) {
    
      const registeredUsers = getRegisteredUsers();
      const filteredUsers = registeredUsers.filter(u => u.id !== user.id);
      localStorage.setItem('horizonRegisteredUsers', JSON.stringify(filteredUsers));
      
      
      setUser(null);
      localStorage.removeItem('horizonCurrentUser');
      toast.success('Account deleted successfully!');
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    addTransaction,
    deleteAccount
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
