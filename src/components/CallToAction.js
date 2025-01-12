import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      className="bg-hero-gradient text-white py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
 
      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <motion.h4
          className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to bring <span className="font-extrabold">your vision</span> to
          life?
        </motion.h4>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 hover:scale-105 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#portfolio"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-gray-700 hover:scale-105 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
