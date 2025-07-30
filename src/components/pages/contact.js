import React, { useState } from "react";
import toast from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
    
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    
      toast.success('Message sent successfully! We will get back to you soon.', {
        duration: 4000,
        icon: '✉️',
      });
      
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-gray-100 w-full min-h-screen p-2 flex items-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions or would like to schedule a consultation with one of our Horizon Homes experts, please don't hesitate to contact us
            </p>
            <ul className="text-lg text-gray-700">
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Rz-34 Nangloi, New Delhi, India
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 99999 99999
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
                HorizonHomes@gmail.com
              </li>
            </ul>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-0">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md transition duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md transition duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md transition duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md transition duration-200"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg 
                        className="w-5 h-5 mr-2 transform rotate-12" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ transform: 'rotate(30deg)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
