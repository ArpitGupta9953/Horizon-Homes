import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Image from "../../assets/main.jpeg";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div id="home" className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 md:pr-8 my-11">
          <img
            src={Image}
            alt="Home"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Find Your <span className="text-amber-800">Dream Home</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to Horizon Homes, where finding your dream home is our mission. Our team of experienced agents is dedicated to offering exceptional service and guiding you effortlessly through every step of buying or selling your property.
            </p>
           
            <div className="text-center md:text-left">
           
              
            
              {!user && (
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link 
                    to="/login"
                    className="px-6 py-3 border-2 border-amber-800 text-amber-800 rounded-full shadow-lg hover:bg-amber-800 hover:text-white transition duration-300 text-center"
                  >
                    Login to Account
                  </Link>
                  <Link 
                    to="/signup"
                    className="px-6 py-3 bg-amber-800 text-white rounded-full shadow-lg hover:bg-amber-900 transition duration-300 text-center"
                  >
                    Create Account
                  </Link>
                </div>
              )}

             
              {user && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <h3 className="text-amber-800 font-semibold mb-2">
                    Welcome back, {user.firstName}! 🏡
                  </h3>
                  <p className="text-amber-700 text-sm">
                    Start exploring our featured properties or visit your profile to manage your account.
                  </p>
                  <div className="flex gap-3 mt-3">
                    <Link 
                      to="/profile"
                      className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 text-sm"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
