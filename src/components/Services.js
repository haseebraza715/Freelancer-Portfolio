import React from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import { FaLaptopCode, FaMobileAlt, FaServer, FaPalette } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-5xl text-indigo-400 mb-4" />,
      title: "Web Development",
      description: "Custom websites tailored to your business needs.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-teal-300 mb-4" />,
      title: "Responsive Design",
      description: "Mobile-first, fully responsive designs for all devices.",
    },
    {
      icon: <FaServer className="text-5xl text-yellow-400 mb-4" />,
      title: "Backend Solutions",
      description: "Robust and scalable backend services using Node.js.",
    },
    {
      icon: <FaPalette className="text-5xl text-purple-400 mb-4" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging designs to enhance user experience.",
    },
  ];

  return (
    <section id="services" className="relative bg-white py-20 overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 opacity-80 z-0"></div>
      {/* Parallax Background Elements */}
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

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What We Offer
        </motion.h2>
        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl text-center mt-4">
          High-quality, tailored services to meet your needs.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all hover:shadow-lg group"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="flex justify-center items-center w-24 h-24 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                Learn More
              </button>

              {/* Decorative Gradient Border for Hover */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-gradient-to-r from-blue-400 to-purple-400 pointer-events-none transition-all"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
