import React from 'react';
import { motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        {/* Social Proof */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-10 hover:z-20 transition-all hover:-translate-y-1"
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="User avatar"
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 shadow-sm relative z-0">
              5k+
            </div>
          </div>
          <span className="text-sm font-medium text-text-secondary">
            Trusted by thousands of healthy families
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-dark-green mb-6 leading-[1.1]"
        >
          The Safest Way to <br className="hidden md:block" />
          Shop for Groceries
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          Use the Olive Food Scanner App to Instantly Eliminate <br className="hidden md:block" />
          Harmful Ingredients from Your Family's Diet and Get <br className="hidden md:block" />
          Expert-Backed Food Insights
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-dark-green text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium flex items-center gap-2 text-base w-full sm:w-auto justify-center">
            <FaApple className="text-xl mb-1" />
            Download for iOS
          </button>
          <button className="text-dark-green px-6 py-3 rounded-full font-medium hover:bg-black/5 transition-all flex items-center gap-2 text-base w-full sm:w-auto justify-center group">
            Join the Olive Community <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
