import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-light-400 dark:via-light-300 dark:to-light-200 animate-gradient-shift"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1.5 }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-20 h-20 bg-purple-500 rounded-full opacity-30 blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1.2 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="container mx-auto px-6 text-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Elevate Your Business with{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Cutting-Edge Design
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300 dark:text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Delivering{" "}
          <span className="text-blue-400 font-bold">
            <Typewriter
              words={["Precision", "Creativity", "Innovation"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>{" "}
          for your next project.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <motion.button
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-blue-500/50 hover:bg-blue-600 hover:scale-105 transition-all"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-500 hover:text-white hover:scale-105 transition-all"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#3b82f6",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-20"
        >
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,165.3C672,128,768,64,864,53.3C960,43,1056,85,1152,112C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
