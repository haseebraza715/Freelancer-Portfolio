import React from "react";
import "devicon/devicon.min.css"; // Ensure Devicon CSS is loaded
import { motion } from "framer-motion"; // Framer Motion for animations

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Who We Are
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Description */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed">
              <span className="font-bold text-blue-400">
                We are a team of passionate student freelancers
              </span>{" "}
              who bring your ideas to life with precision and creativity. From
              crafting beautiful landing pages to developing robust full-stack
              applications, we specialize in delivering modern, responsive, and
              functional websites tailored to your needs.
            </p>
            <p className="text-xl leading-relaxed">
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
            className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Skill Icon 1 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="devicon-html5-plain text-6xl text-orange-500"></i>
              <p className="mt-4 text-lg font-semibold">HTML</p>
            </motion.div>

            {/* Skill Icon 2 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="devicon-css3-plain text-6xl text-blue-500"></i>
              <p className="mt-4 text-lg font-semibold">CSS</p>
            </motion.div>

            {/* Skill Icon 3 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="devicon-javascript-plain text-6xl text-yellow-400"></i>
              <p className="mt-4 text-lg font-semibold">JavaScript</p>
            </motion.div>

            {/* Skill Icon 4 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="devicon-react-original text-6xl text-blue-400"></i>
              <p className="mt-4 text-lg font-semibold">React</p>
            </motion.div>

            {/* Skill Icon 5 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="devicon-nodejs-plain text-6xl text-green-500"></i>
              <p className="mt-4 text-lg font-semibold">Node.js</p>
            </motion.div>

            {/* Skill Icon 6 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="devicon-git-plain text-6xl text-red-500"></i>
              <p className="mt-4 text-lg font-semibold">Git</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
