import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-white py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-80 z-0"></div>
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-3xl rounded-full"
        animate={{ x: [0, 20, -20], y: [0, 20, -20] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-r from-pink-300 to-purple-300 opacity-30 blur-3xl rounded-full"
        animate={{ x: [0, -20, 20], y: [0, -20, 20] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        {/* Heading */}
        <motion.h4
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to bring{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            your vision
          </span>{" "}
          to life?
        </motion.h4>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <motion.a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full font-bold shadow-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#portfolio"
            className="inline-block px-10 py-4 rounded-full font-bold shadow-md text-gray-800 bg-gray-200 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 transition-all"
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
