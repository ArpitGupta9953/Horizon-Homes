import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, updateProfile, logout, deleteAccount } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    address: user?.address || '',
    city: user?.city || '',
    state: user?.state || '',
    zipCode: user?.zipCode || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      deleteAccount();
      navigate('/');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-amber-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user?.firstName} {user?.lastName}
                </h1>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-500">Member since {formatDate(user?.joinedDate)}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'profile'
                      ? 'border-amber-800 text-amber-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'transactions'
                      ? 'border-amber-800 text-amber-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Transaction History
                  {user?.transactions?.length > 0 && (
                    <span className="ml-2 bg-amber-800 text-white text-xs px-2 py-1 rounded-full">
                      {user.transactions.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'settings'
                      ? 'border-amber-800 text-amber-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Account Settings
                </button>
              </nav>
            </div>

           
            <div className="p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.firstName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.lastName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.phone}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      {isEditing ? (
                        <textarea
                          name="bio"
                          rows={3}
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                          placeholder="Tell us about yourself..."
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md min-h-[80px]">
                          {user?.bio || 'No bio provided'}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                          placeholder="Street address"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.address || 'No address provided'}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.city || 'Not specified'}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                          {user?.state || 'Not specified'}
                        </p>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-3 pt-4">
                      <button
                        onClick={handleSaveProfile}
                        className="px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Transactions Tab */}
              {activeTab === 'transactions' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Transaction History
                  </h3>
                  {user?.transactions?.length > 0 ? (
                    <div className="space-y-4">
                      {user.transactions.map((transaction) => (
                        <div key={transaction.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="text-lg font-medium text-gray-900">
                                {transaction.propertyName}
                              </h4>
                              <p className="text-gray-600 mt-1">
                                {transaction.propertyType} • {transaction.propertySize}
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                Purchased on {formatDate(transaction.date)}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-amber-800">
                                {formatPrice(transaction.amount)}
                              </p>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                transaction.status === 'completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : transaction.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                              Transaction ID: {transaction.id}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-lg">No transactions yet</p>
                      <p className="text-gray-400 text-sm">Your property purchases will appear here</p>
                    </div>
                  )}
                </div>
              )}

              
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Account Settings
                    </h3>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="text-red-900 font-medium mb-2">Danger Zone</h4>
                      <p className="text-red-700 text-sm mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button
                        onClick={handleDeleteAccount}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
