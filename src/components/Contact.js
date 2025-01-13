import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-white py-20 overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-80 z-0"></div>

      {/* Parallax Elements */}
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Contact</span> Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Contact Details */}
          <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-purple-800 rounded-lg shadow-lg p-8 flex flex-col justify-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Let’s Connect!
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Have a project in mind? Questions to ask? Reach out to us—we’re
                just a message away!
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center text-blue-400">
                  <FaPhoneAlt className="mr-2" />
                  +123 456 789
                </div>
                <div className="flex items-center justify-center text-blue-400">
                  <FaEnvelope className="mr-2" />
                  info@example.com
                </div>
                <div className="flex items-center justify-center text-blue-400">
                  <FaMapMarkerAlt className="mr-2" />
                  123 Street, City, Country
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Section: Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <form action="#" method="POST" className="flex flex-col h-full">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-4 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6 flex-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-4 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md shadow-md transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
