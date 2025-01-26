import React from "react";
import { motion } from "framer-motion";
import cover from "../images/cover.jpg";

const Testimonials = () => {
  // Color scheme
  const colors = {
    primary: "#1E293B",
    secondary: "#F59E0B",
    background: "#F8FAFC",
    cardBg: "#FFFFFF",
    textPrimary: "#1E293B",
    textSecondary: "#64748B",
    border: "#E2E8F0",
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Solutions",
      feedback:
        "Collaborating with this team has been a transformative experience. Their unparalleled professionalism, meticulous attention to detail, and innovative approach have significantly elevated our projects. I wholeheartedly recommend them.",
      image: cover,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager, Creative Inc.",
      feedback:
        "The website they delivered was beyond exceptional. It seamlessly combines modern aesthetics with outstanding performance, ensuring an intuitive and fast user experience. Their expertise is truly unmatched!",
      image: cover,
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Freelancer",
      feedback:
        "I was thoroughly impressed by their ability to capture and execute my vision with such precision and creativity. The final product far exceeded my expectations. Working with this team was an absolute delight!",
      image: cover,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
            Testimonials
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
            Discover why industry leaders choose to collaborate with us.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Client Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4" style={{ borderColor: colors.secondary }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Feedback */}
              <p
                className="text-lg text-center italic mb-6"
                style={{ color: colors.textPrimary }}
              >
                "{testimonial.feedback}"
              </p>

              {/* Client Name and Role */}
              <div className="text-center">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: colors.primary }}
                >
                  {testimonial.name}
                </h3>
                <p
                  className="text-sm uppercase tracking-wide"
                  style={{ color: colors.textSecondary }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ backgroundColor: colors.secondary }}
          >
            View More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;