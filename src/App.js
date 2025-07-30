import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Demo from "./components/pages/demo";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Profile from "./components/pages/profile";
import PropertyDetails from "./components/pages/propertyDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import './index.css'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Sales />      
      <Service />
      <Demo />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
};


function App() {
  return (
    <AuthProvider>
      <Router basename="/Horizon-Homes">
        <div className="App">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: '#4aed88',
                },
              },
            }}
          />
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
          
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            
            <Route path="/property/:id" element={<PropertyDetails />} />
            
           
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
