import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { allProjects } from "../data/projects";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const categories = ["All", "Strategy", "M&A", "Technology", "Advisory"];

  const getProjectCategory = (project) => {
    if (project.category.includes("Strategic")) return "Strategy";
    if (project.projectType.includes("M&A")) return "M&A";
    if (project.industryFocus.includes("Technology")) return "Technology";
    return "Advisory";
  };

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter(
          (project) => getProjectCategory(project) === activeCategory
        );

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setVisibleProjects(6);
  }, [activeCategory]);

  return (
    <section
      className="relative min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl relative z-10">
        {/* Header Section */}
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
            Our Portfolio
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
            Transforming visions into measurable business outcomes
          </motion.p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 md:mb-16"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#F59E0B] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-[#F59E0B] hover:text-white border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div
                className="p-6 cursor-pointer h-full flex flex-col"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${colors.secondary}20`,
                      color: colors.secondary,
                    }}
                  >
                    {getProjectCategory(project)}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    {project.duration}
                  </span>
                </div>

                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: colors.primary }}
                >
                  {project.title}
                </h3>

                <ul className="space-y-2 mb-4 flex-grow">
                  {project.summary.slice(0, 2).map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      <span
                        className="inline-block mr-2 mt-1 text-[10px]"
                        style={{ color: colors.secondary }}
                      >
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-center justify-between text-xs"
                  style={{ color: colors.textSecondary }}
                >
                  <span className="truncate">{project.region}</span>
                  <span className="truncate ml-2">{project.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={
                visibleProjects < filteredProjects.length
                  ? showMoreProjects
                  : showLessProjects
              }
              className="px-6 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ backgroundColor: colors.secondary }}
            >
              {visibleProjects < filteredProjects.length
                ? "Show More Projects"
                : "Show Less Projects"}
            </button>
          </div>
        )}

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full mx-4 overflow-hidden shadow-2xl"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <div className="p-6 md:p-8">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: colors.primary }}
                    >
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: `${colors.secondary}20`,
                          color: colors.secondary,
                        }}
                      >
                        {selectedProject.category}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: colors.background,
                          color: colors.textSecondary,
                        }}
                      >
                        {selectedProject.duration}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                    style={{ color: colors.textSecondary }}
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Content */}
                <div className="grid gap-6 md:grid-cols-2 overflow-y-auto">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h4
                        className="text-lg font-semibold mb-3"
                        style={{ color: colors.secondary }}
                      >
                        Project Overview
                      </h4>
                      <div
                        className="space-y-4 text-sm"
                        style={{ color: colors.textPrimary }}
                      >
                        {selectedProject.summary.map((point, index) => (
                          <p key={index} className="leading-relaxed">
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div
                      className="p-6 rounded-xl"
                      style={{ backgroundColor: colors.background }}
                    >
                      <h4
                        className="text-lg font-semibold mb-4"
                        style={{ color: colors.secondary }}
                      >
                        Key Details
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p
                            className="text-sm font-bold"
                            style={{ color: colors.textSecondary }}
                          >
                            Client
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: colors.textPrimary }}
                          >
                            {selectedProject.client}
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-sm font-bold"
                            style={{ color: colors.textSecondary }}
                          >
                            Region
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: colors.textPrimary }}
                          >
                            {selectedProject.region}
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-sm font-bold"
                            style={{ color: colors.textSecondary }}
                          >
                            Industry Focus
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: colors.textPrimary }}
                          >
                            {selectedProject.industryFocus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;