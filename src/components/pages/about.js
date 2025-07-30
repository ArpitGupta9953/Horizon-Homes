import React from "react";
import Image from "../../assets/4.jpg";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-amber-800">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
         <p className="text-lg md:text-xl text-gray-700 mb-8">
  Welcome to <strong>Horizon Homes</strong>, where our mission is to turn your dream of owning the perfect home into reality. We pride ourselves on delivering exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has earned a reputation for excellence, trust, and integrity.
  <br />
  <br />
  At Horizon Homes, we stay ahead of the curve by embracing the latest trends and technologies in the real estate market. Our knowledge and innovative approach allow us to guide you through every step of the buying or selling process with confidence and ease.
</p>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































