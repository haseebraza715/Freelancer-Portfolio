import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#F9FAFB] py-20 overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-[#F9FAFB] to-[#FBBF24]/10 opacity-80 z-0"></div>

      {/* Parallax Elements */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#3B82F6]/30 to-[#FBBF24]/30 opacity-30 blur-3xl rounded-full"
        animate={{ x: [0, 20, -20], y: [0, 20, -20] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-r from-[#FBBF24]/30 to-[#3B82F6]/30 opacity-30 blur-3xl rounded-full"
        animate={{ x: [0, -20, 20], y: [0, -20, 20] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#3B82F6] to-[#FBBF24] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Contact</span> Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Support Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <SupportCard />
          </motion.div>

          {/* Right Section: Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <form action="#" method="POST" className="flex flex-col h-full">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#374151] mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full pl-10 p-3 rounded-lg bg-[#F9FAFB] text-[#374151] border border-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#374151] mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 p-3 rounded-lg bg-[#F9FAFB] text-[#374151] border border-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#374151] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 rounded-lg bg-[#F9FAFB] text-[#374151] border border-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6 flex-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#374151] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-[#F9FAFB] text-[#374151] border border-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FBBF24] to-[#FBBF24]/90 hover:from-[#FBBF24]/90 hover:to-[#FBBF24] text-[#374151] font-medium py-3 rounded-lg shadow-md transition-all"
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

const SupportCard = () => {
  const examples = [
    "Does your product work for SMBs?",
    "Can I pause my membership without losing my data?",
    "How does seat based pricing work?",
    "What's the meaning of life?",
  ];

  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-[#94A3B8]">
          <FaQuestionCircle className="inline-block mr-2" />/ Support
        </p>
        <hr className="border-[#94A3B8]" />
      </div>
      <p className="max-w-lg text-lg leading-relaxed text-[#374151]">
        <strong>Have questions?</strong> We'd love to help! Contact support for
        any issue you may face.
      </p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-[#94A3B8]" />
      </div>
      <button className="w-full rounded-full border border-[#94A3B8] py-2 text-sm font-medium text-[#374151] transition-colors hover:bg-[#94A3B8] hover:text-white">
        Contact Support
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-[#94A3B8]">
      <span className="inline-block size-2 bg-[#94A3B8]" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-[#94A3B8]"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

export default Contact;