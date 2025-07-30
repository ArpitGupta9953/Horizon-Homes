import React from "react";
import { Link } from "react-router-dom";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";

const Features = () => {
  const properties = [
    {
      id: 1,
      name: "Lotus Villa",
      specs: "3 bd | 2 ba | 1,500 sqft",
      price: 5000000,
      image: Imagee,
      type: "Villa",
      description: "Beautiful villa with modern amenities and spacious rooms"
    },
    {
      id: 2,
      name: "Silver Palm Estate",
      specs: "4 bd | 3 ba | 2,000 sqft",
      price: 8500000,
      image: Imageee,
      type: "Estate",
      description: "Luxury estate with premium facilities and garden"
    },
    {
      id: 3,
      name: "Peepal Grove Apartments",
      specs: "2 bd | 1 ba | 1,000 sqft",
      price: 3500000,
      image: Imageeee,
      type: "Apartment",
      description: "Modern apartment in prime location with all amenities"
    }
  ];

  return (
    <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Feature <span className="text-amber-800">Properties</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of our featured properties:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <div className="bg-white rounded-lg shadow-lg">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" 
                />
                <div className="py-6 px-4">
                  <h3 className="text-lg font-medium text-gray-900">{property.name}</h3>
                  <p className="text-sm text-gray-500">{property.specs}</p>
                  <p className="text-lg font-bold text-gray-700 mt-4">
                    ₹{(property.price / 100000).toFixed(1)}L
                  </p>
                  <div className="mt-4 space-y-2">
                    <Link
                      to={`/property/${property.id}`}
                      state={{ property }}
                      className="block w-full text-center px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition duration-200"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/property/${property.id}?action=buy`}
                      state={{ property, action: 'buy' }}
                      className="block w-full text-center px-4 py-2 border border-amber-800 text-amber-800 rounded-md hover:bg-amber-800 hover:text-white transition duration-200"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
