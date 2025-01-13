import React from "react";
import "devicon/devicon.min.css"; // Ensure Devicon CSS is loaded
import { motion } from "framer-motion"; // Framer Motion for animations

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-20 overflow-hidden text-gray-800"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 opacity-90 z-0"></div>
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
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Who We Are
        </motion.h2>
        {/* Decorative underline */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Description */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-bold text-blue-400">
                We are a team of passionate student freelancers
              </span>{" "}
              who bring your ideas to life with precision and creativity. From
              crafting beautiful landing pages to developing robust full-stack
              applications, we specialize in delivering modern, responsive, and
              functional websites tailored to your needs.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              With expertise in cutting-edge front-end and back-end
              technologies, we{" "}
              <span className="text-purple-400 font-bold">
                transform your vision into reality
              </span>
              . Let us help you take your digital presence to the next level.
            </p>
          </motion.div>

          {/* Skills/Icons */}
          <motion.div
            className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Skill Icons */}
            {[
              {
                name: "HTML",
                icon: "devicon-html5-plain",
                color: "text-orange-500",
              },
              {
                name: "CSS",
                icon: "devicon-css3-plain",
                color: "text-blue-500",
              },
              {
                name: "JavaScript",
                icon: "devicon-javascript-plain",
                color: "text-yellow-400",
              },
              {
                name: "React",
                icon: "devicon-react-original",
                color: "text-blue-400",
              },
              {
                name: "Node.js",
                icon: "devicon-nodejs-plain",
                color: "text-green-500",
              },
              { name: "Git", icon: "devicon-git-plain", color: "text-red-500" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {/* Circle background */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
                  <i className={`${skill.icon} text-4xl ${skill.color}`}></i>
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
