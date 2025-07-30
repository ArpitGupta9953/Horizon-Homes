import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
  };

  return (
    <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 text-black ${isScrolled || !isHomePage ? "bg-white shadow-md" : "bg-transparent"}`} >
      
      <div className="text-4xl cursor-pointer inline-flex items-center text-amber-800">
        <RouterLink to="/">
          Horizon Homes
        </RouterLink>
      </div>
      
      
      <div className="md:hidden" onClick={handleMenuClick}>
        {showMenu ? (
          <svg className="h-6 w-6 text-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z" clipRule="evenodd"/>
          </svg>
        ) : (
          <svg className="h-6 w-6 text-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
        )}
      </div>
      
      
      {isHomePage && (
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              About Us
            </Link>
          </li>
          <li>
            <Link to="feature" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              Our Features
            </Link>
          </li>
          <li>
            <Link to="sale" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              On Sale
            </Link>
          </li>
          <li>
            <Link to="service" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="demo" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              Demo
            </Link>
          </li>
          <li>
            <Link to="client" smooth={true} duration={500} className="cursor-pointer hover:text-amber-800 transition duration-200">
              Our Clients
            </Link>
          </li>
        </ul>
      )}
      
      
      <div className="hidden md:flex items-center space-x-3">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200"
            >
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </div>
              <span className="text-gray-700">{user.firstName}</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border">
                <RouterLink
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  View Profile
                </RouterLink>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {isHomePage ? (
              <button className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 hover:text-white mx-2 transition duration-200">
                <Link to="contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </button>
            ) : (
              <>
                <RouterLink 
                  to="/login" 
                  className="px-4 py-2 border border-amber-800 text-amber-800 rounded-md hover:bg-amber-800 hover:text-white transition duration-200"
                >
                  Login
                </RouterLink>
                <RouterLink 
                  to="/signup" 
                  className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-200"
                >
                  Sign Up
                </RouterLink>
              </>
            )}
          </>
        )}
      </div>
      
      
      {isHomePage && showMenu && (
        <div className="md:hidden flex flex-col bg-amber-800 text-white w-full absolute top-16 left-0 z-10 shadow-lg">
          <Link to="home" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            About Us
          </Link>
          <Link to="feature" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            Our Features
          </Link>
          <Link to="sale" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            On Sale
          </Link>
          <Link to="service" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            Our Services
          </Link>
          <Link to="demo" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            Demo
          </Link>
          <Link to="client" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            Our Clients
          </Link>
          <Link to="contact" smooth={true} duration={500} className="p-4 hover:bg-amber-700 cursor-pointer transition duration-200" onClick={handleMenuClick}>
            Contact Us
          </Link>
          
          
          <div className="p-4 space-y-2">
            {user ? (
              <>
                <RouterLink 
                  to="/profile" 
                  className="block w-full text-center px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-amber-800 transition duration-200"
                  onClick={handleMenuClick}
                >
                  Profile
                </RouterLink>
                <button
                  onClick={() => {
                    handleLogout();
                    handleMenuClick();
                  }}
                  className="block w-full text-center px-4 py-2 bg-white text-amber-800 rounded-md hover:bg-gray-100 transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <RouterLink 
                  to="/login" 
                  className="block w-full text-center px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-amber-800 transition duration-200"
                  onClick={handleMenuClick}
                >
                  Login
                </RouterLink>
                <RouterLink 
                  to="/signup" 
                  className="block w-full text-center px-4 py-2 bg-white text-amber-800 rounded-md hover:bg-gray-100 transition duration-200"
                  onClick={handleMenuClick}
                >
                  Sign Up
                </RouterLink>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
