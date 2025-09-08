import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        
        <div className="flex items-center">
          <a><span className="text-white text-2xl font-bold">stripe</span></a>
        </div>

        {/*  Nav Links */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <div className="relative group">
            <button className="hover:text-gray-300">Products</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-gray-900 rounded-lg shadow-xl w-64 p-4">
              <p className="font-semibold">Payments</p>
              <p className="text-sm text-gray-600">Online / in-person payments</p>
              <hr className="my-2" />
              <p className="font-semibold">Financial Services</p>
              <p className="text-sm text-gray-600">Banking as a Service</p>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-gray-300">Solutions</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-gray-900 rounded-lg shadow-xl w-64 p-4">
              <p className="font-semibold">E-commerce</p>
              <p className="text-sm text-gray-600">Boost revenue globally</p>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-gray-300">Developers</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-gray-900 rounded-lg shadow-xl w-64 p-4">
              <p className="font-bold">Documentation</p>
              <p className="text-sm text-gray-600"> 
Start integrating Stripe’s products and tools
             
            <br></br> <p className="font-semibold">Get started</p>
Pre-built checkout 
Libraries and SDKs 
App integrations 
Code samples 

           <br></br>  <p className="font-semibold">Guides</p>
Accept online payments 
Manage subscriptions 
Send payments 
Set up in-person payments 
Full API reference 
API status 
API changelog 
Build on Stripe Apps </p>
            </div>
          </div>

          <a href="#" className="hover:text-gray-300">Resources</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://dashboard.stripe.com/login" className="text-white hover:text-gray-300">Sign in &rarr;</a>
          <button className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-gray-100 transition">
           <a href="https://stripe.com/in/contact/sales">Contact sales &rarr;</a> 
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
