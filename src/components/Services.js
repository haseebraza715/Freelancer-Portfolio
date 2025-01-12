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
    <section
      id="services"
      className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-30 blur-2xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 opacity-30 blur-2xl rounded-full z-0"></div>

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What We Offer
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all hover:shadow-xl group"
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {/* Icon with Hover Effect */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  className="hover:animate-pulse"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mt-2 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative Border for Hover */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-gradient-to-r from-blue-400 to-purple-400 pointer-events-none transition-all"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
