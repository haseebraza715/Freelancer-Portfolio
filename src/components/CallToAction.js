import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-[#1E293B] py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-labelledby="cta-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-[#1E293B] to-[#3B82F6]/10 opacity-50 z-0"></div>

      {/* Content Section */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Title */}
        <motion.h4
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#F9FAFB]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to bring{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#FBBF24]">
            your vision
          </span>{" "}
          to life?
        </motion.h4>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative w-full max-w-xs rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#FBBF24] px-8 py-4 text-lg font-medium text-white shadow-lg hover:from-[#3B82F6]/90 hover:to-[#FBBF24]/90 transition-all focus:outline-none focus:ring-4 focus:ring-[#3B82F6]/50"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;