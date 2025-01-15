import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-white dark:bg-slate-800 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-labelledby="cta-heading"
    >
      {/* Content Section */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        {/* Title */}
        <motion.h4
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to bring{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            your vision
          </span>{" "}
          to life?
        </motion.h4>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative w-full max-w-xs rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
