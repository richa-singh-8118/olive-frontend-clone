import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaShare } from 'react-icons/fa';

const PRODUCTS = [
  {
    id: 1,
    title: 'Organic Apple Juice, Cold Pressed',
    brand: 'Nature Farms',
    score: 85,
    status: 'Good',
    statusColor: 'text-green-500',
    dotColor: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1622597467836-f38240662c8b?auto=format&fit=crop&w=200&q=80',
    thumb: 'https://images.unsplash.com/photo-1622597467836-f38240662c8b?auto=format&fit=crop&w=100&q=80',
    insight: `"This juice is a great choice! It's made from 100% organic apples with no added sugars or artificial preservatives. A healthy option for the whole family."`
  },
  {
    id: 2,
    title: 'Fig and Olive Crackers, Fig and Olive',
    brand: 'Lesley Stowe',
    score: 46,
    status: 'Avoid',
    statusColor: 'text-red-500',
    dotColor: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=200&q=80',
    thumb: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=100&q=80',
    insight: `"This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."`
  },
  {
    id: 3,
    title: 'Whole Wheat Bread, Honey Oats',
    brand: 'Bakery Fresh',
    score: 62,
    status: 'Moderate',
    statusColor: 'text-yellow-500',
    dotColor: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80',
    thumb: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=100&q=80',
    insight: `"While this bread contains whole grains, it also has added sugars and a few preservatives. It's an okay choice in moderation, but you might want to look for options with zero added sugar."`
  }
];

const PhoneMockup = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [liked, setLiked] = useState(false);

  const activeProduct = PRODUCTS[activeIndex];
  const prevProduct = PRODUCTS[(activeIndex - 1 + PRODUCTS.length) % PRODUCTS.length];
  const nextProduct = PRODUCTS[(activeIndex + 1) % PRODUCTS.length];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    setLiked(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
    setLiked(false);
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto flex justify-center pb-20 mt-16 md:mt-24 px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-white/60 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Floating Elements (Blurred background cards) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="absolute left-[5%] md:left-[15%] top-1/4 hidden sm:block opacity-60 blur-sm hover:blur-none transition-all duration-300 cursor-pointer z-10"
        onClick={handlePrev}
      >
        <div className="w-36 h-48 bg-white/50 backdrop-blur-md rounded-[24px] shadow-sm border border-white/40 p-3 flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-xl shadow-sm mb-3 overflow-hidden">
            <img src={prevProduct.image} alt="" className="w-full h-full object-cover opacity-70" />
          </div>
          <div className="w-20 h-2 bg-gray-200 rounded-full mb-2"></div>
          <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        className="absolute right-[5%] md:right-[15%] top-1/3 hidden sm:block opacity-60 blur-sm hover:blur-none transition-all duration-300 cursor-pointer z-10"
        onClick={handleNext}
      >
        <div className="w-36 h-48 bg-white/50 backdrop-blur-md rounded-[24px] shadow-sm border border-white/40 p-3 flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-xl shadow-sm mb-3 overflow-hidden">
            <img src={nextProduct.image} alt="" className="w-full h-full object-cover opacity-70" />
          </div>
          <div className="w-20 h-2 bg-gray-200 rounded-full mb-2"></div>
          <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </motion.div>

      {/* Main Phone with Float Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[300px] sm:w-[340px] h-[680px] bg-white rounded-[40px] shadow-2xl border-[8px] border-white ring-1 ring-gray-200 overflow-hidden flex flex-col items-center"
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 w-28 h-7 bg-black rounded-full z-20"></div>

          {/* Screen Content */}
          <div className="w-full h-full bg-[#f8f9fa] flex flex-col pt-16 relative">
            
            {/* Top Images Carousel */}
            <div className="w-full flex items-center justify-center gap-4 mb-4 px-4 relative h-32">
              {/* Left partially hidden image */}
              <motion.div 
                className="absolute -left-12 w-28 h-28 bg-white rounded-2xl shadow-sm opacity-50 p-2 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
                onClick={handlePrev}
                layoutId={`carousel-item-${prevProduct.id}`}
              >
                 <div className="w-full h-full bg-blue-50 rounded-xl overflow-hidden">
                   <img src={prevProduct.image} alt="prev" className="w-full h-full object-cover" />
                 </div>
              </motion.div>
              
              {/* Center Main Image */}
              <motion.div 
                key={activeProduct.id}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="w-32 h-32 bg-white rounded-[24px] shadow-md z-10 p-3 flex items-center justify-center border border-gray-50"
                layoutId={`carousel-item-${activeProduct.id}`}
              >
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.title} 
                  className="w-full h-full object-cover rounded-xl" 
                />
              </motion.div>

              {/* Right partially hidden image */}
              <motion.div 
                className="absolute -right-12 w-28 h-28 bg-white rounded-2xl shadow-sm opacity-50 p-2 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
                onClick={handleNext}
                layoutId={`carousel-item-${nextProduct.id}`}
              >
                <div className="w-full h-full bg-green-50 rounded-xl overflow-hidden">
                  <img src={nextProduct.image} alt="next" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Product Info Card */}
            <div className="bg-white flex-1 rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] p-6 flex flex-col overflow-y-auto hide-scrollbar relative z-10">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full"
                >
                  {/* Title & Small Thumbnail */}
                  <div className="flex gap-4 items-start mb-1">
                    <div className="w-12 h-10 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-100 mt-1">
                       <img src={activeProduct.thumb} alt="Box" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="text-[17px] font-bold text-gray-900 leading-tight">{activeProduct.title}</h2>
                      <p className="text-[13px] text-gray-500 mt-1">{activeProduct.brand}</p>
                    </div>
                  </div>
                  
                  {/* Score and Actions */}
                  <div className="flex justify-between items-center mt-5 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${activeProduct.dotColor}`}></div>
                      <div className="flex flex-col">
                        <div className="font-bold text-lg text-gray-900 leading-none tracking-tight">{activeProduct.score}<span className="text-[11px] text-gray-400 font-medium">/100</span></div>
                        <div className={`text-[11px] font-medium mt-0.5 ${activeProduct.statusColor}`}>{activeProduct.status}</div>
                      </div>
                    </div>
                    <div className="flex gap-4 pr-1">
                      <button 
                        onClick={() => setLiked(!liked)}
                        className={`transition-colors ${liked ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
                      >
                        <FaHeart className="w-[18px] h-[18px]" />
                      </button>
                      <button className="text-gray-300 hover:text-gray-500 transition-colors">
                        <FaShare className="w-[18px] h-[18px]" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-100 mb-5"></div>

                  {/* AI Insight Card */}
                  <div className="border border-[#f0ecd8] rounded-2xl p-4 bg-white relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg leading-none">🍏</span>
                      <span className="font-bold text-gray-900 text-sm">Oliver Says:</span>
                    </div>
                    <p className="text-[12px] text-gray-600 leading-[1.6]">
                      {activeProduct.insight}
                    </p>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-sm mt-5">Breakdown</h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhoneMockup;
