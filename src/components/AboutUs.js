import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaPalette,
  FaCoins,
  FaLightbulb,
  FaCode,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBuilding,
  FaGlobe,
  FaHandHoldingUsd,
  FaIndustry,
  FaRocket,
  FaLandmark,
  FaHandsHelping,
} from "react-icons/fa";

const AboutUs = () => {
  const industries = [
    {
      name: "Leading Conglomerates & Corporations",
      icon: <FaBuilding className="w-5 h-5 mr-2" />,
      gradient: "from-blue-100 to-purple-100",
    },
    {
      name: "Multinational Corporations",
      icon: <FaGlobe className="w-5 h-5 mr-2" />,
      gradient: "from-green-100 to-blue-100",
    },
    {
      name: "Private Equity Firms",
      icon: <FaHandHoldingUsd className="w-5 h-5 mr-2" />,
      gradient: "from-yellow-100 to-orange-100",
    },
    {
      name: "Mid-size Industrial Companies",
      icon: <FaIndustry className="w-5 h-5 mr-2" />,
      gradient: "from-purple-100 to-pink-100",
    },
    {
      name: "Start-ups & Corporate Venture Capital Clients",
      icon: <FaRocket className="w-5 h-5 mr-2" />,
      gradient: "from-indigo-100 to-blue-100",
    },
    {
      name: "Government Institutions",
      icon: <FaLandmark className="w-5 h-5 mr-2" />,
      gradient: "from-red-100 to-orange-100",
    },
    {
      name: "Non-profit Organizations",
      icon: <FaHandsHelping className="w-5 h-5 mr-2" />,
      gradient: "from-green-100 to-teal-100",
    },
  ];

  const services = [
    {
      name: "Strategy Development",
      icon: <FaChartLine className="w-12 h-12 mb-4 text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      name: "Branding & Positioning",
      icon: <FaPalette className="w-12 h-12 mb-4 text-purple-500" />,
      color: "bg-purple-100",
    },
    {
      name: "Financial Transformation",
      icon: <FaCoins className="w-12 h-12 mb-4 text-yellow-500" />,
      color: "bg-yellow-100",
    },
    {
      name: "Value Creation",
      icon: <FaLightbulb className="w-12 h-12 mb-4 text-green-500" />,
      color: "bg-green-100",
    },
    {
      name: "Full Stack Development",
      icon: <FaCode className="w-12 h-12 mb-4 text-indigo-500" />,
      color: "bg-indigo-100",
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="w-8 h-8 mb-2 text-orange-500" />,
      color: "bg-orange-100",
    },
    {
      name: "CSS",
      icon: <FaCss3 className="w-8 h-8 mb-2 text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="w-8 h-8 mb-2 text-yellow-500" />,
      color: "bg-yellow-100",
    },
    {
      name: "React",
      icon: <FaReact className="w-8 h-8 mb-2 text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-8 h-8 mb-2 text-green-500" />,
      color: "bg-green-100",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="w-8 h-8 mb-2 text-red-500" />,
      color: "bg-red-100",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-blue-200 to-purple-200 blur-3xl rounded-full top-16 left-10"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-r from-yellow-200 to-green-200 blur-3xl rounded-full bottom-20 right-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About BEEHOOP
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          BEEHOOP is a strategy, financial, and branding advisory firm
          delivering exceptional outcomes in strategy development, branding, and
          transformation.
        </motion.p>

        {/* Industries Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`flex items-center px-6 py-3 bg-gradient-to-r ${industry.gradient} shadow-md rounded-full text-sm font-medium text-gray-800 hover:shadow-lg transform hover:scale-105 transition`}
              whileHover={{ scale: 1.05 }}
            >
              {industry.icon}
              {industry.name}
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">What We Do</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shadow-lg ${service.color} hover:shadow-2xl transform hover:scale-105 transition`}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h4 className="text-lg font-semibold">{service.name}</h4>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">Our Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-4 rounded-full shadow-md ${skill.color} hover:shadow-lg transform hover:scale-105 transition`}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
