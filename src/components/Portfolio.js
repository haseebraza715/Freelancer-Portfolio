import React, { useState } from "react";
import { motion } from "framer-motion";
import cover from "../images/cover.jpg"; // Replace with your actual image path

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Finance", "Data Analytics", "Web Development"];
  const allProjects = [
    {
      id: 1,
      category: "Finance",
      title: "Budget Tracker",
      description: "Track your expenses and savings efficiently.",
      image: cover,
      link: "#",
      problem:
        "Managing personal finances can be overwhelming without a clear overview of income and expenses.",
      solution:
        "A user-friendly budget tracker that categorizes expenses, sets savings goals, and provides real-time insights.",
      technologies: ["React", "Node.js", "MongoDB"],
      client: "Personal Finance App",
      duration: "3 months",
    },
    {
      id: 2,
      category: "Finance",
      title: "Investment Dashboard",
      description: "Visualize and manage your investments in real-time.",
      image: cover,
      link: "#",
      problem:
        "Investors struggle to track multiple portfolios and analyze performance effectively.",
      solution:
        "An interactive dashboard that consolidates all investments, provides analytics, and offers actionable insights.",
      technologies: ["React", "D3.js", "Firebase"],
      client: "Investment Firm",
      duration: "6 months",
    },
    {
      id: 3,
      category: "Data Analytics",
      title: "Data Visualization Tool",
      description: "Interactive dashboards for insightful data analysis.",
      image: cover,
      link: "#",
      problem:
        "Businesses need better tools to visualize and interpret complex data sets.",
      solution:
        "A customizable data visualization platform that transforms raw data into interactive charts and graphs.",
      technologies: ["Python", "Tableau", "SQL"],
      client: "Tech Startup",
      duration: "4 months",
    },
    {
      id: 4,
      category: "Data Analytics",
      title: "Predictive Analytics Platform",
      description: "AI-driven predictions based on historical data.",
      image: cover,
      link: "#",
      problem:
        "Companies lack tools to predict future trends and make data-driven decisions.",
      solution:
        "A predictive analytics platform that uses machine learning to forecast trends and outcomes.",
      technologies: ["Python", "TensorFlow", "AWS"],
      client: "E-Commerce Company",
      duration: "5 months",
    },
    {
      id: 5,
      category: "Web Development",
      title: "E-Commerce Website",
      description: "A modern and fully responsive e-commerce platform.",
      image: cover,
      link: "#",
      problem:
        "Businesses need a scalable and user-friendly platform to sell products online.",
      solution:
        "A fully responsive e-commerce website with seamless navigation, secure payments, and admin dashboard.",
      technologies: ["React", "Node.js", "Stripe"],
      client: "Retail Brand",
      duration: "6 months",
    },
    {
      id: 6,
      category: "Web Development",
      title: "Portfolio Website",
      description: "A personal portfolio to showcase skills and projects.",
      image: cover,
      link: "#",
      problem:
        "Professionals need a platform to showcase their work and attract opportunities.",
      solution:
        "A sleek and modern portfolio website with project highlights, skills, and contact information.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      client: "Freelance Developer",
      duration: "2 months",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="relative bg-[#1E293B] py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1/3 h-1/3 bg-[#3B82F6] rounded-full blur-3xl opacity-20 top-16 left-20"></div>
        <div className="absolute w-1/4 h-1/4 bg-[#3B82F6] rounded-full blur-3xl opacity-20 bottom-10 right-20"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#FBBF24] bg-clip-text text-transparent">
            Our
          </span>{" "}
          <span className="text-white">Portfolio</span>
        </h2>
        <p className="text-base md:text-xl text-[#94A3B8] mb-12">
          Showcasing our{" "}
          <span className="font-semibold text-white">
            most innovative work
          </span>
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-transform transform ${
                activeCategory === category
                  ? "bg-[#3B82F6] text-white scale-105 shadow-md"
                  : "bg-[#F9FAFB] text-[#374151] hover:bg-[#3B82F6] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative bg-[#F9FAFB] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 md:h-48 object-cover rounded-t-xl"
              />

              {/* Project Details */}
              <div className="p-4 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-[#374151] mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-[#94A3B8] mb-2">
                  {project.description}
                </p>
                <span className="text-[#3B82F6] font-medium hover:underline cursor-pointer">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Project Details */}
        {showModal && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-[#F9FAFB] rounded-lg shadow-lg max-w-sm md:max-w-lg w-full mx-4 p-6 relative">
          <button
            className="absolute top-2 right-2 text-[#374151] hover:text-[#3B82F6] bg-[#F9FAFB] rounded-full p-2 transition-colors duration-300"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
          <h3 className="text-xl font-bold mb-2 text-[#374151]">
            {selectedProject.title}
          </h3>
          <p className="text-[#94A3B8] mb-4">{selectedProject.description}</p>

          {/* Problem and Solution Section */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-[#374151]">
                Problem
              </h4>
              <p className="text-[#94A3B8]">{selectedProject.problem}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-[#374151]">
                Solution
              </h4>
              <p className="text-[#94A3B8]">{selectedProject.solution}</p>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#374151]">
                  Technologies
                </h4>
                <ul className="text-[#94A3B8]">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#374151]">
                  Client
                </h4>
                <p className="text-[#94A3B8]">{selectedProject.client}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#374151]">
                  Duration
                </h4>
                <p className="text-[#94A3B8]">{selectedProject.duration}</p>
              </div>
            </div>

            {/* View Full Project Link */}
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] font-medium hover:underline"
            >
              View Full Project
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;