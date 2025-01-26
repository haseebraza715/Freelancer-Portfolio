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

const colors = {
  primary: "#1E293B",
  secondary: "#F59E0B",
  background: "#F8FAFC",
  cardBg: "#FFFFFF",
  textPrimary: "#1E293B",
  textSecondary: "#64748B",
  border: "#E2E8F0",
};

const AboutUs = () => {
  const industries = [
    {
      name: "Leading Conglomerates & Corporations",
      icon: <FaBuilding className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
    {
      name: "Multinational Corporations",
      icon: <FaGlobe className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
    {
      name: "Private Equity Firms",
      icon: <FaHandHoldingUsd className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
    {
      name: "Mid-size Industrial Companies",
      icon: <FaIndustry className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
    {
      name: "Start-ups & Corporate Venture Capital Clients",
      icon: <FaRocket className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
    {
      name: "Government Institutions",
      icon: <FaLandmark className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
    {
      name: "Non-profit Organizations",
      icon: <FaHandsHelping className="w-5 h-5 mr-2" aria-hidden="true" />,
      gradient: `from-${colors.background} to-${colors.border}`,
    },
  ];

  const services = [
    {
      name: "Strategy Development",
      icon: (
        <FaChartLine
          className="w-12 h-12 mb-4"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "Branding & Positioning",
      icon: (
        <FaPalette
          className="w-12 h-12 mb-4"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "Financial Transformation",
      icon: (
        <FaCoins
          className="w-12 h-12 mb-4"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "Value Creation",
      icon: (
        <FaLightbulb
          className="w-12 h-12 mb-4"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "Full Stack Development",
      icon: (
        <FaCode
          className="w-12 h-12 mb-4"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: (
        <FaHtml5
          className="w-8 h-8 mb-2"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "CSS",
      icon: (
        <FaCss3
          className="w-8 h-8 mb-2"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "JavaScript",
      icon: (
        <FaJs
          className="w-8 h-8 mb-2"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "React",
      icon: (
        <FaReact
          className="w-8 h-8 mb-2"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "Node.js",
      icon: (
        <FaNodeJs
          className="w-8 h-8 mb-2"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
    {
      name: "Git",
      icon: (
        <FaGitAlt
          className="w-8 h-8 mb-2"
          style={{ color: colors.secondary }}
          aria-hidden="true"
        />
      ),
      color: `bg-${colors.background}`,
    },
  ];

  return (
    <section className="relative py-20" style={{ backgroundColor: colors.background }}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-1/2 h-1/2 blur-3xl rounded-full top-16 left-10"
          style={{
            background: `linear-gradient(to right, ${colors.border}, ${colors.background})`,
          }}
        ></div>
        <div
          className="absolute w-1/3 h-1/3 blur-3xl rounded-full bottom-20 right-10"
          style={{
            background: `linear-gradient(to right, ${colors.secondary}, ${colors.background})`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          className="relative mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Gradient Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold"
            style={{
              background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About BEEHOOP
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            className="w-16 h-1.5 mx-auto mt-4 rounded-full"
            style={{
              background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            }}
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
            className="text-lg sm:text-xl leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            BEEHOOP is a strategy, financial, and branding advisory firm that
            combines advanced planning, rigorous analysis, and proven execution
            expertise to help businesses achieve meaningful outcomes across
            strategic, financial, operational, and brand-building fronts. We
            specialize in strategy development, transformation, branding, and
            value creation, ensuring our clients consistently make better
            decisions, enhance performance, and boost shareholder returns.
          </motion.p>
        </motion.div>

        {/* Industries Section */}
        <h3
          className="text-2xl sm:text-3xl font-bold mb-8"
          style={{ color: colors.textPrimary }}
        >
          Industries We Serve
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`flex items-center px-6 py-3 shadow-md rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition`}
              style={{
                background: `linear-gradient(to right, ${colors.background}, ${colors.border})`,
                color: colors.textPrimary,
              }}
              whileHover={{ scale: 1.05 }}
            >
              {industry.icon}
              {industry.name}
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <h3
          className="text-2xl sm:text-3xl font-bold mb-8"
          style={{ color: colors.textPrimary }}
        >
          What We Do
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition`}
              style={{ backgroundColor: colors.cardBg }}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h4 className="text-lg font-semibold" style={{ color: colors.textPrimary }}>
                {service.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <h3
          className="text-2xl sm:text-3xl font-bold mb-8"
          style={{ color: colors.textPrimary }}
        >
          Our Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition`}
              style={{ backgroundColor: colors.cardBg }}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;