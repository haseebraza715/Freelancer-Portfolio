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
      icon: <FaChess className="text-4xl text-indigo-600" />,
      title: "Strategy Development",
      description:
        "Crafting clear strategic roadmaps to guide your business towards long-term success.",
    },
    {
      icon: <FaChartLine className="text-4xl text-teal-600" />,
      title: "Financial Advisory",
      description:
        "Rigorous analysis to enhance financial performance and shareholder returns.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-yellow-600" />,
      title: "Branding & Positioning",
      description:
        "Elevating brand identity to resonate with your target audience.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-purple-600" />,
      title: "Transformation Projects",
      description:
        "Executing transformative initiatives to drive operational excellence.",
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-600" />,
      title: "Business Development",
      description:
        "Accelerating growth through strategic partnerships and market expansion.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Organizational Strengthening",
      description:
        "Building resilient foundations for sustainable future growth.",
    },
    {
      icon: <FaBuilding className="text-4xl text-red-600" />,
      title: "Value Creation",
      description:
        "Enhancing performance and creating value across all business fronts.",
    },
  ];

  const testimonials = [
    {
      quote:
        "BEEHOOP helped us transform our business strategy and achieve remarkable growth.",
      author: "John Doe, CEO of Example Corp",
    },
    {
      quote:
        "Their branding expertise has significantly elevated our market presence.",
      author: "Jane Smith, CMO of Sample Inc",
    },
  ];

  return (
    <section id="services" className="bg-white py-16">
      <Helmet>
        <title>Our Services - BEEHOOP</title>
        <meta
          name="description"
          content="Discover our comprehensive services including strategy development, financial advisory, branding, and more."
        />
      </Helmet>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Combining advanced planning, rigorous analysis, and proven execution
          expertise to help businesses achieve meaningful outcomes.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
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
            className="bg-indigo-600 text-white px-10 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-bold text-lg"
          >
            View all Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
