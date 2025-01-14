import React, { useState } from "react";
import { motion } from "framer-motion";
import cover from "../images/cover.jpg";

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
    },
    {
      id: 2,
      category: "Finance",
      title: "Investment Dashboard",
      description: "Visualize and manage your investments in real-time.",
      image: cover,
      link: "#",
    },
    {
      id: 3,
      category: "Data Analytics",
      title: "Data Visualization Tool",
      description: "Interactive dashboards for insightful data analysis.",
      image: cover,
      link: "#",
    },
    {
      id: 4,
      category: "Data Analytics",
      title: "Predictive Analytics Platform",
      description: "AI-driven predictions based on historical data.",
      image: cover,
      link: "#",
    },
    {
      id: 5,
      category: "Web Development",
      title: "E-Commerce Website",
      description: "A modern and fully responsive e-commerce platform.",
      image: cover,
      link: "#",
    },
    {
      id: 6,
      category: "Web Development",
      title: "Portfolio Website",
      description: "A personal portfolio to showcase skills and projects.",
      image: cover,
      link: "#",
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
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-50 top-16 left-20"></div>
        <div className="absolute w-1/4 h-1/4 bg-purple-100 rounded-full blur-3xl opacity-50 bottom-10 right-20"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our
          </span>{" "}
          <span className="text-gray-900">Portfolio</span>
        </h2>
        <p className="text-base md:text-xl text-gray-600 mb-12">
          Showcasing our{" "}
          <span className="font-semibold text-gray-800">
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
                  ? "bg-blue-500 text-white scale-105 shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all"
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
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {project.description}
                </p>
                <span className="text-blue-500 font-medium hover:underline cursor-pointer">
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
          <div className="bg-white rounded-lg shadow-lg max-w-sm md:max-w-lg w-full mx-4 p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
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
