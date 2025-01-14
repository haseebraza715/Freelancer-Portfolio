import React from "react";
import { motion } from "framer-motion";
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
      className="relative bg-neutral-900 py-20 overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-blue-900 to-purple-900 opacity-80 z-0"></div>

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
        <p className="text-gray-400 text-lg md:text-xl text-center mt-4">
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
      className="relative h-[400px] w-full overflow-hidden rounded-xl bg-indigo-500 p-8 flex flex-col justify-between"
    >
      <div className="relative z-10 text-white">
        <div className="flex justify-center items-center w-24 h-24 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
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
        >
          {service.title}
        </motion.span>

        {/* Description */}
        <p className="text-gray-200 mt-2 text-center">{service.description}</p>
      </div>

      {/* Learn More Button */}
      <button className="relative z-20 w-full rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Learn More
      </button>

      {/* Background Animation */}
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default Services;
