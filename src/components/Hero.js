import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header
      id="home"
      className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] text-white h-screen flex items-center justify-center text-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Hero Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col items-center lg:flex-row lg:justify-between"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo (Top on Mobile, Left on Desktop) */}
        <motion.div
          className="w-48 h-48 lg:w-64 lg:h-64 mb-8 lg:mb-0 lg:order-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Curvy "B" Shape */}
            <path
              d="M50,100 C50,50 100,50 100,100 C100,150 50,150 50,100 Z M100,100 C100,50 150,50 150,100 C150,150 100,150 100,100 Z"
              fill="#fde047" // Updated to yellow-300
              stroke="#1E293B"
              strokeWidth="5"
            />
            {/* Bee Wings (Optional) */}
            <path
              d="M70,80 Q90,60 110,80 T150,80"
              fill="none"
              stroke="#1E293B"
              strokeWidth="5"
            />
            <path
              d="M70,120 Q90,140 110,120 T150,120"
              fill="none"
              stroke="#1E293B"
              strokeWidth="5"
            />
            {/* Creative Dots */}
            <circle cx="100" cy="50" r="5" fill="#fde047" /> {/* Updated to yellow-300 */}
            <circle cx="150" cy="100" r="5" fill="#fde047" /> {/* Updated to yellow-300 */}
            <circle cx="100" cy="150" r="5" fill="#fde047" /> {/* Updated to yellow-300 */}
          </svg>
        </motion.div>

        {/* Text Content (Below Logo on Mobile, Right on Desktop) */}
        <div className="lg:w-1/2 text-center lg:text-left lg:order-2">
          {/* Tagline */}
          <motion.p
            className="text-sm uppercase tracking-wide text-[#94A3B8] mb-4 font-medium mr-4 lg:mr-0 lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Redefining Digital Excellence
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tighter"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Creating Timeless<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#fde047]">
              Digital Experiences
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg max-w-lg mx-auto mb-8 text-[#94A3B8] leading-relaxed ml-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#fde047] font-semibold">
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
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="px-8 py-4 text-base rounded-full font-bold text-[#1E293B] bg-gradient-to-r from-[#3B82F6] to-[#fde047] hover:from-[#fde047] hover:to-[#3B82F6] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fde047] focus:ring-offset-2 focus:ring-offset-[#1E293B]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-4 text-base rounded-full font-bold text-white border-2 border-[#3B82F6] hover:border-[#fde047] transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fde047] focus:ring-offset-2 focus:ring-offset-[#1E293B]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Blobs */}
        <motion.div
          className="absolute top-10 left-20 w-20 h-20 bg-gradient-to-r from-[#1E293B] to-[#3B82F6] rounded-full opacity-30 blur-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1.3 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#1E293B] rounded-full opacity-30 blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particle Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#fde047] rounded-full" // Updated to yellow-300
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, window.innerHeight],
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
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
                style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
};

export default Hero;