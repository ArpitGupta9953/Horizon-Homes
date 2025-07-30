import React from "react";
import Client1 from "../../assets/client1.jpeg";
import Client4 from "../../assets/client4.jpeg";
import Client5 from "../../assets/client5.jpeg";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-lg text-gray-700 mb-8">
            Hear from our happy clients and discover why Horizon Homes is their trusted choice for buying, selling, and managing properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          
          <div className="justify-center">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={Client1}
              alt="Client 1"
            />
            <div className="z-10 bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                "Working with Horizon Homes was an amazing experience. Their expert team guided us at every step and helped us find our dream home quickly and effortlessly."
              </p>
              <p className="text-gray-500">Rohit Aggarwal, Homebuyer</p>
            </div>
          </div>

          
          <div className="justify-center">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={Client4}
              alt="Client 2"
            />
            <div className="z-10 bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                "Horizon Homes exceeded my expectations with their marketing strategy while selling my house. They showcased my property perfectly and attracted genuine buyers."
              </p>
              <p className="text-gray-500">Kumud Saini, Home Seller</p>
            </div>
          </div>

         
          <div className="justify-center">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={Client5}
              alt="Client 3"
            />
            <div className="z-10 bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                "I have been relying on Horizon Homes for property management for years, and they never disappoint. Their professionalism and attention to detail make everything hassle-free."
              </p>
              <p className="text-gray-500">Sanjay Pathak, Property Owner</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurClients;
