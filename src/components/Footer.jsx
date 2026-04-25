import React from 'react';
import { FaLeaf, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - 100% Independent */}
        <div className="grid lg:grid-cols-2 gap-12 border-b border-white/10 pb-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              100% Independent.<br />
              <span className="text-olive">Always.</span>
            </h2>
            <p className="text-gray-300 max-w-md text-lg leading-relaxed">
              We never monetize through brand deals, affiliate links, or ads — so you can trust our recommendations are always aligned with our users.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-6">Keep your family safe with Olive</h3>
            <button className="bg-white text-dark-green px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
              <FaApple className="text-xl mb-1" />
              Download for iOS
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <FaLeaf className="text-olive text-3xl mb-1" />
              <span className="font-bold text-3xl tracking-tight">Olive</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Get the latest lab testing data sent directly to your inbox.
            </p>
            <form className="flex gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex-1 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-olive"
              />
              <button 
                type="submit" 
                className="bg-white text-dark-green px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Explore More</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-olive transition-colors">Explore Foods</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Allergy Scanner App</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Gluten Free Scanner</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Dairy Free App</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Ingredient Checker</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">About</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-olive transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Email us</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-olive transition-colors">Sign in</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Medical Consent</a>
          </div>
          <div>
            &copy; 2026 Olive Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
