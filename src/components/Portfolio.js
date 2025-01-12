import React from "react";
import { motion } from "framer-motion";
import cover from "../images/cover.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A modern and fully responsive e-commerce platform.",
      image: cover,
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase skills and projects.",
      image: cover,
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 3,
      title: "Blog Platform",
      description:
        "A user-friendly platform for publishing and managing blogs.",
      image: cover,
      technologies: ["Next.js", "Contentful", "Sass"],
      link: "#",
    },
    {
      id: 4,
      title: "Landing Page",
      description: "An engaging and visually appealing landing page.",
      image: cover,
      technologies: ["Vue.js", "Bootstrap"],
      link: "#",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-20 blur-2xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 opacity-20 blur-2xl rounded-full z-0"></div>

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Portfolio
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {project.technologies.join(", ")}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* View Project Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
