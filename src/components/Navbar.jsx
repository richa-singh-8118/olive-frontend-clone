import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: 'Solutions', hasDropdown: true, items: ['For Families', 'For Schools', 'Enterprise'] },
    { label: 'Features', hasDropdown: false },
    { label: 'Pricing', hasDropdown: false },
    { label: 'Blog', hasDropdown: true, items: ['Nutrition Tips', 'App Updates', 'Success Stories'] },
    { label: 'Restaurants', hasDropdown: false },
    { label: 'Food', hasDropdown: true, items: ['Scanner', 'Database', 'Recalls'] },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-off-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <FaLeaf className="text-olive text-2xl mb-1" />
            <span className="font-bold text-2xl tracking-tight text-olive">Olive</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative flex items-center gap-1 cursor-pointer group h-20"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="text-sm font-medium text-text-secondary group-hover:text-dark-green transition-colors">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-dark-green transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === index && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[70px] left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 py-2 z-50"
                  >
                    {item.items.map((subItem, i) => (
                      <div key={i} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-dark-green transition-colors">
                        {subItem}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-sm font-medium text-text-secondary hover:text-dark-green transition-colors">
              Sign in
            </button>
            <button className="bg-dark-green text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              Get Olive <span>&rarr;</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-dark-green transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <div className="px-3 py-3 text-base font-medium text-gray-900 flex justify-between items-center cursor-pointer hover:bg-gray-50 rounded-lg">
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
                <button className="w-full text-center text-base font-medium text-gray-600 py-2">
                  Sign in
                </button>
                <button className="w-full bg-dark-green text-white px-5 py-3 rounded-xl text-base font-medium shadow-sm">
                  Get Olive
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
