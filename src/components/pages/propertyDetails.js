import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../navbar';
import Footer from '../footer';
import toast from 'react-hot-toast';

const PropertyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, addTransaction } = useAuth();
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const property = location.state?.property;
  const action = location.state?.action;

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    if (action === 'buy') {
      if (!user) {
        toast.error('Please login to purchase properties', {
          id: 'login-required', 
        });
        navigate('/login', { replace: true });
        return;
      }
      setShowBuyModal(true);
    }
  }, [action, user, navigate]);

  
  const handleBuyClick = () => {
    if (!user) {
      toast.error('Please login to purchase properties', {
        id: 'login-required', 
      });
      navigate('/login', { replace: true });
      return;
    }
    setShowBuyModal(true);
  };


  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
            <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700"
            >
              Go Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBuyProperty = async () => {
    if (!user) {
      toast.error('Please login to purchase properties', {
        id: 'login-required',
      });
      navigate('/login', { replace: true });
      return;
    }

    setIsProcessing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const transaction = {
        propertyId: property.id,
        propertyName: property.name,
        propertyType: property.type,
        propertySize: property.specs,
        amount: property.salePrice || property.price,
        status: 'completed'
      };

      addTransaction(transaction);
      setShowBuyModal(false);
      navigate('/profile?tab=transactions');
    } catch (error) {
      toast.error('Purchase failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCloseModal = () => {
    setShowBuyModal(false);
  };

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Property Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img 
              src={property.image} 
              alt={property.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">{property.specs}</p>
                  <div className="mb-4">
                    {property.originalPrice ? (
                      <>
                        <span className="text-2xl font-bold text-gray-400 line-through">
                          {formatPrice(property.originalPrice)}
                        </span>
                        <span className="text-3xl font-bold text-amber-800 ml-4">
                          {formatPrice(property.salePrice)}
                        </span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded ml-3">
                          Save {formatPrice(property.originalPrice - property.salePrice)}
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-amber-800">
                        {formatPrice(property.price)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleBuyClick}
                    className="px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition duration-200"
                  >
                    {user ? 'Buy Now' : 'Login to Buy'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                    <span>Modern Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                    <span>Prime Location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>24/7 Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    <span>Parking Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Property Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">{property.specs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-600">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Confirm Purchase
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600">Are you sure you want to buy:</p>
                <p className="font-bold text-lg">{property.name}</p>
                <p className="text-2xl font-bold text-amber-800 mt-2">
                  {formatPrice(property.salePrice || property.price)}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleBuyProperty}
                  disabled={isProcessing}
                  className="flex-1 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 disabled:opacity-50 transition duration-200"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Confirm Purchase'
                  )}
                </button>
                <button
                  onClick={handleCloseModal}
                  disabled={isProcessing}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetails;
