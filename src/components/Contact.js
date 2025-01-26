import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaQuestionCircle } from "react-icons/fa";

// Shared Color Scheme
const colors = {
  primary: "#1E293B",
  secondary: "#F59E0B",
  background: "#F8FAFC",
  cardBg: "#FFFFFF",
  textPrimary: "#1E293B",
  textSecondary: "#64748B",
  border: "#E2E8F0",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    Contact Us
                  </motion.h2>
        
                  {/* Decorative Line */}
                  <motion.div
                    className="w-16 h-1.5 bg-gradient-to-r from-[#1E293B] to-[#F59E0B] mx-auto mt-4 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Support Card */}
          <motion.div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              boxShadow: "0 8px 32px rgba(30, 41, 59, 0.05)",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SupportCard />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              boxShadow: "0 8px 32px rgba(30, 41, 59, 0.05)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  Your Name
                </label>
                <div className="relative">
                  <FaUser
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{ color: colors.textSecondary }}
                  />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:outline-none"
                    style={{
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                      color: colors.textPrimary,
                      focusRingColor: colors.secondary,
                    }}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{ color: colors.textSecondary }}
                  />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:outline-none"
                    style={{
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                      color: colors.textPrimary,
                      focusRingColor: colors.secondary,
                    }}
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    color: colors.textPrimary,
                    focusRingColor: colors.secondary,
                  }}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg font-medium transition-colors"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.cardBg,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SupportCard = () => {
  const examples = [
    "How quickly can we get started?",
    "What's your typical response time?",
    "Do you offer ongoing support?",
    "What industries do you specialize in?",
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FaQuestionCircle style={{ color: colors.secondary }} />
          <span
            className="text-sm font-medium uppercase tracking-wide"
            style={{ color: colors.textSecondary }}
          >
            Support
          </span>
        </div>
        <hr style={{ borderColor: colors.border }} />
      </div>

      <p
        className="text-lg leading-relaxed"
        style={{ color: colors.textPrimary }}
      >
        <strong style={{ color: colors.secondary }}>Need help?</strong> Our team
        is here to answer your questions.
      </p>

      <div className="space-y-4">
        <Typewrite examples={examples} />
        <hr style={{ borderColor: colors.border }} />
      </div>

      <motion.button
        className="w-full py-2.5 rounded-lg border text-sm font-medium transition-colors"
        style={{
          borderColor: colors.border,
          color: colors.textPrimary,
        }}
        whileHover={{
          backgroundColor: colors.secondary,
          color: colors.cardBg,
          borderColor: colors.secondary,
        }}
      >
        Contact Support
      </motion.button>
    </div>
  );
};

const Typewrite = ({ examples }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % examples.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start gap-2">
      <div
        className="w-2 h-2 rounded-full mt-1.5"
        style={{ backgroundColor: colors.secondary }}
      />
      <div className="flex-1">
        <p
          className="text-sm uppercase tracking-wide"
          style={{ color: colors.textSecondary }}
        >
          Common questions:
        </p>
        <motion.p
          key={index}
          className="text-base"
          style={{ color: colors.textPrimary }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {examples[index]}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;