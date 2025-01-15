import React from "react";
import { motion } from "framer-motion";
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
      className="bg-white py-20 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Section Title */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Client Image */}
              <motion.img
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
                className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500 shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
              {/* Client Feedback */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 italic leading-relaxed">
                "{testimonial.feedback}"
              </p>
              {/* Client Name */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              {/* Client Role */}
              <p className="text-sm sm:text-base text-gray-500">
                {testimonial.role}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
