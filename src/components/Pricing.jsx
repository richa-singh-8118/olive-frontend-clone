import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-off-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark-green mb-4"
          >
            Healthy Choices Honest Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            Unlock the full power of Olive to keep your family safe.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 relative z-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-extrabold text-gray-900">$9.99</span>
              <span className="text-gray-500 font-medium">/month</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-dark-green" />
                </div>
                <span className="text-gray-700">Unlimited Scans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-dark-green" />
                </div>
                <span className="text-gray-700">Unlimited Database Searches</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-dark-green" />
                </div>
                <span className="text-gray-700">Comprehensive Lab-Testing Data</span>
              </div>
            </div>
            
            <button className="w-full py-4 rounded-xl font-bold text-dark-green border-2 border-dark-green hover:bg-dark-green hover:text-white transition-colors duration-300">
              Subscribe Monthly
            </button>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 bg-dark-green rounded-[32px] p-8 md:p-12 shadow-2xl relative md:scale-105 z-20"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-olive text-dark-green font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-extrabold text-white">$39.99</span>
              <span className="text-gray-300 font-medium">/year</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200">Everything in monthly plan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">Get 7 months free</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">60% Savings</span>
              </div>
            </div>
            
            <button className="w-full py-4 rounded-xl font-bold text-dark-green bg-white hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-lg">
              Subscribe Yearly
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
