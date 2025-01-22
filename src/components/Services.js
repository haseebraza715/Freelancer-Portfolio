import React from "react";
import { motion } from "framer-motion";
import {
  FaChess,
  FaChartLine,
  FaPaintBrush,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const Services = () => {
  const services = [
    {
      icon: <FaChess className="text-4xl text-[#3B82F6]" />,
      title: "Strategy Development",
      description:
        "Crafting clear strategic roadmaps to guide your business towards long-term success.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#FBBF24]" />,
      title: "Financial Advisory",
      description:
        "Rigorous analysis to enhance financial performance and shareholder returns.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-[#3B82F6]" />,
      title: "Branding & Positioning",
      description:
        "Elevating brand identity to resonate with your target audience.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#FBBF24]" />,
      title: "Transformation Projects",
      description:
        "Executing transformative initiatives to drive operational excellence.",
    },
    {
      icon: <FaHandshake className="text-4xl text-[#3B82F6]" />,
      title: "Business Development",
      description:
        "Accelerating growth through strategic partnerships and market expansion.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#FBBF24]" />,
      title: "Organizational Strengthening",
      description:
        "Building resilient foundations for sustainable future growth.",
    },
    {
      icon: <FaBuilding className="text-4xl text-[#3B82F6]" />,
      title: "Value Creation",
      description:
        "Enhancing performance and creating value across all business fronts.",
    },
  ];

  return (
    <section id="services" className="bg-[#F9FAFB] py-16">
      <Helmet>
        <title>Our Services - BEEHOOP</title>
        <meta
          name="description"
          content="Discover our comprehensive services including strategy development, financial advisory, branding, and more."
        />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#374151]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Combining advanced planning, rigorous analysis, and proven execution
          expertise to help businesses achieve meaningful outcomes.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mb-6"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#374151]">
                {service.title}
              </h3>
              <p className="text-[#94A3B8] text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3B82F6] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg hover:bg-[#2563EB] transition-colors duration-300 font-bold text-lg"
          >
            View all Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;