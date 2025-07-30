import React from "react";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-amber-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
      
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <div className="text-xl text-white font-bold hover:text-gray-300 cursor-pointer">
              Horizon Homes
            </div>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="home" className="text-white hover:text-gray-300">
              Home
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="feature" className="text-white hover:text-gray-300">
              Properties
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="client" className="text-white hover:text-gray-300">
              Clients
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="about" className="text-white hover:text-gray-300">
              About Us
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        </nav>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          
       
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">About Horizon Homes</h3>
            <p className="text-white mb-4">
              Horizon Homes is a trusted name in the Indian real estate market, dedicated to helping families and investors find their perfect property. 
              Our experienced team combines market expertise with innovative solutions to deliver exceptional value and a seamless experience.
            </p>
          </div>

          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Our Services</h3>
            <ul className="text-white">
              <li className="mb-2">Residential Property Sales</li>
              <li className="mb-2">Luxury Villas & Apartments</li>
              <li className="mb-2">Property Management Solutions</li>
              <li className="mb-2">Real Estate Investment Guidance</li>
            </ul>
          </div>

         
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Follow Us</h3>
            <ul className="text-white">
              <li className="mb-2 cursor-pointer hover:text-gray-300">Facebook</li>
              <li className="mb-2 cursor-pointer hover:text-gray-300">Instagram</li>
              <li className="mb-2 cursor-pointer hover:text-gray-300">LinkedIn</li>
            </ul>
          </div>

        </div>

       
        <div className="mt-8 flex justify-center">
          <p className="text-base text-white">
            &copy; {new Date().getFullYear()} Horizon Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
