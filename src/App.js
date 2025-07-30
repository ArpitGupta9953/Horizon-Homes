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

// Main Home Page Component with all sections
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

// Main App Component with Routing
function App() {
  return (
    <AuthProvider>
      <Router>
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
            {/* Home page route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Authentication routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* Property details route */}
            <Route path="/property/:id" element={<PropertyDetails />} />
            
            {/* Fallback route for any unmatched paths */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
