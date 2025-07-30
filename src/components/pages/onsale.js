import React from "react";
import { Link } from "react-router-dom";
import PropertyImage1 from "../../assets/6.png";
import PropertyImage2 from "../../assets/7.png";
import PropertyImage3 from "../../assets/8.png";

const SaleProperties = () => {
  const saleProperties = [
    {
      id: 4,
      name: "Gulmohar Villa",
      specs: "3 BHK | 2 Bath | 1,500 sqft",
      originalPrice: 4150000,
      salePrice: 2070000,
      image: PropertyImage1,
      type: "Villa",
      description: "Spacious villa on sale with modern facilities"
    },
    {
      id: 5,
      name: "Amara Bliss Residency",
      specs: "4 BHK | 3 Bath | 2,000 sqft",
      originalPrice: 6220000,
      salePrice: 4150000,
      image: PropertyImage2,
      type: "Residency",
      description: "Premium residency at discounted price"
    },
    {
      id: 6,
      name: "Sundaram Heights",
      specs: "2 BHK | 1 Bath | 1,000 sqft",
      originalPrice: 2490000,
      salePrice: 1660000,
      image: PropertyImage3,
      type: "Apartment",
      description: "Affordable apartment in prime location"
    }
  ];

  return (
    <div id="sale" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          On Sale <span className="text-amber-800">Properties</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We offer a wide selection of on-sale properties that cater to different preferences and budgets. Here are some of our featured properties:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {saleProperties.map((property) => (
            <div key={property.id} className="hover:shadow-md hover:shadow-[#040c16] transition duration-300">
              <div className="bg-white rounded-lg shadow-lg">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" 
                />
                <div className="py-6 px-4">
                  <h3 className="text-lg font-medium text-gray-900">{property.name}</h3>
                  <p className="text-sm text-gray-500">{property.specs}</p>
                  <div className="mt-4">
                    <p className="text-lg font-bold text-gray-700">
                      <del className="text-gray-400">₹{(property.originalPrice / 100000).toFixed(2)} Cr</del>
                      <span className="text-amber-800 ml-2">
                        On Sale Now: ₹{(property.salePrice / 100000).toFixed(2)} Cr
                      </span>
                    </p>
                  </div>
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
                      className="block w-full text-center px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition duration-200"
                    >
                      Buy on Sale 🔥
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

export default SaleProperties;
