import React from "react";
import { motion } from "framer-motion";

const colors = {
  primary: "#1E293B",       // Navy Blue
  secondary: "#F59E0B",     // Amber
  background: "#F8FAFC",    // Off-white
  cardBg: "#FFFFFF",
  textPrimary: "#1E293B",
  textSecondary: "#64748B",
  border: "#E2E8F0",
};

const CallToAction = () => {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: colors.background }}
      aria-labelledby="cta-heading"
    >
      {/* Decorative Gradient Background */}
      <div
        className="absolute inset-0 opacity-20 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.secondary}20, transparent 70%)`,
        }}
      ></div>

      {/* Animated Floating Circles */}
      <motion.div
        className="absolute w-24 h-24 rounded-full opacity-30"
        style={{ backgroundColor: colors.secondary, top: "10%", left: "5%" }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute w-16 h-16 rounded-full opacity-30"
        style={{ backgroundColor: colors.secondary, top: "30%", right: "10%" }}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute w-20 h-20 rounded-full opacity-30"
        style={{ backgroundColor: colors.secondary, bottom: "20%", left: "15%" }}
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <motion.h2
          id="cta-heading"
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: colors.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to bring{" "}
          <span style={{ color: colors.secondary }}>Your Vision</span>{" "}
          to life?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Let’s collaborate to create something extraordinary. Our team is ready to help you achieve your goals.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            style={{
              backgroundColor: colors.secondary,
              color: colors.primary,
              boxShadow: `0 4px 24px ${colors.secondary}40`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;