import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header
      id="home"
      className="relative bg-black text-white h-screen flex items-center justify-center text-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Hero Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Tagline */}
        <motion.p
          className="text-sm uppercase tracking-wider text-gray-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Redefining Digital Excellence
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          id="hero-heading"
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Creating Timeless <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 font-semibold">
            <Typewriter
              words={["Ideas", "Dreams", "Visions"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          with creativity, precision, and innovation.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="px-8 py-4 text-sm rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-teal-500 hover:from-teal-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="px-8 py-4 text-sm rounded-full font-bold text-white border-2 border-purple-600 hover:border-teal-500 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8A2BE2",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-20 w-20 h-20 bg-gradient-to-r from-purple-800 to-teal-800 rounded-full opacity-30 blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1.5 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-16 h-16 bg-gradient-to-r from-teal-800 to-purple-800 rounded-full opacity-30 blur-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1.3 }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-12"
          aria-hidden="true"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,165.3C672,128,768,64,864,53.3C960,43,1056,85,1152,112C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#1E293B", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0F172A", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
