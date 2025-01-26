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

const Services = () => {
  // Color scheme
  const colors = {
    primary: "#1E293B", // Navy Blue
    secondary: "#F59E0B", // Amber
    background: "#F8FAFC", // Off-white
    cardBg: "#FFFFFF",
    textPrimary: "#1E293B",
    textSecondary: "#64748B",
    border: "#E2E8F0",
  };

  const services = [
    {
      icon: <FaChess className="text-4xl" />,
      title: "Strategy Development",
      description:
        "Crafting clear strategic roadmaps to guide your business towards long-term success.",
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Financial Advisory",
      description:
        "Rigorous analysis to enhance financial performance and shareholder returns.",
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Branding & Positioning",
      description:
        "Elevating brand identity to resonate with your target audience.",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Transformation Projects",
      description:
        "Executing transformative initiatives to drive operational excellence.",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Business Development",
      description:
        "Accelerating growth through strategic partnerships and market expansion.",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Organizational Strengthening",
      description:
        "Building resilient foundations for sustainable future growth.",
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Value Creation",
      description:
        "Enhancing performance and creating value across all business fronts.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
      aria-labelledby="services-heading"
    >
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          className="relative mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Gradient Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#1E293B] to-[#F59E0B] bg-clip-text text-transparent"
          >
            Core Services
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            className="w-16 h-1.5 bg-gradient-to-r from-[#1E293B] to-[#F59E0B] mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.p
            className="text-lg sm:text-xl text-[#64748B] leading-relaxed"
          >
            Combining advanced planning, rigorous analysis, and proven execution expertise to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Service Icon */}
              <motion.div
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {React.cloneElement(service.icon, {
                  style: { color: colors.secondary },
                })}
              </motion.div>

              {/* Service Title */}
              <h3
                className="text-xl font-semibold mb-4 text-center"
                style={{ color: colors.primary }}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p
                className="text-sm md:text-base text-center flex-grow"
                style={{ color: colors.textSecondary }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ backgroundColor: colors.secondary }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;