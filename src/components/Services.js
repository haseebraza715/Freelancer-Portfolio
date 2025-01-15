import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPalette } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: (
        <FaLaptopCode
          className="text-5xl text-indigo-600 mb-4"
          aria-hidden="true"
        />
      ),
      title: "Web Development",
      description: "Custom websites tailored to your business needs.",
    },
    {
      icon: (
        <FaMobileAlt
          className="text-5xl text-teal-600 mb-4"
          aria-hidden="true"
        />
      ),
      title: "Responsive Design",
      description: "Mobile-first, fully responsive designs for all devices.",
    },
    {
      icon: (
        <FaServer
          className="text-5xl text-yellow-600 mb-4"
          aria-hidden="true"
        />
      ),
      title: "Backend Solutions",
      description: "Robust and scalable backend services using Node.js.",
    },
    {
      icon: (
        <FaPalette
          className="text-5xl text-purple-600 mb-4"
          aria-hidden="true"
        />
      ),
      title: "UI/UX Design",
      description: "Intuitive and engaging designs to enhance user experience.",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-white py-20 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-[400px] w-full overflow-hidden rounded-xl bg-white shadow-lg p-8 flex flex-col justify-between border border-gray-200"
      aria-labelledby={`service-${service.title
        .toLowerCase()
        .replace(/\s+/g, "-")}-title`}
    >
      <div className="relative z-10 text-gray-800">
        <div className="flex justify-center items-center w-24 h-24 mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
          {service.icon}
        </div>

        {/* Title */}
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-4 block origin-top-left font-mono text-3xl font-black leading-[1.2] text-center"
          id={`service-${service.title
            .toLowerCase()
            .replace(/\s+/g, "-")}-title`}
        >
          {service.title}
        </motion.span>

        {/* Description */}
        <p className="text-gray-600 mt-2 text-center">{service.description}</p>
      </div>

      {/* Learn More Button */}
      <button className="relative z-20 w-full rounded border-2 border-indigo-600 bg-indigo-600 py-2 text-center font-mono font-black uppercase text-white backdrop-blur transition-colors hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white">
        Learn More
      </button>
    </motion.div>
  );
};

export default Services;
