import React from "react";
import { motion } from "framer-motion"; // For animations
import cover from "../images/cover.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Solutions",
      feedback:
        "Working with this team was an absolute pleasure. Their professionalism and attention to detail are unmatched.",
      image: cover,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager, Creative Inc.",
      feedback:
        "The website they delivered exceeded our expectations. It's modern, fast, and easy to use. Highly recommend!",
      image: cover,
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Freelancer",
      feedback:
        "Their ability to understand and execute our vision was impressive. I’m thrilled with the final product!",
      image: cover,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 opacity-80 z-0"></div>

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

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonial Cards in Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all hover:shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Client Image */}
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500"
                whileHover={{ scale: 1.1 }}
              />
              {/* Client Feedback */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 italic leading-relaxed group-hover:text-gray-800 transition-colors">
                "{testimonial.feedback}"
              </p>
              {/* Client Name */}
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              {/* Client Role */}
              <p className="text-sm sm:text-base text-gray-500">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
