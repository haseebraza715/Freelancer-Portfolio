import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-slate-800 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 opacity-80 z-0"></div>
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-slate-600 to-slate-700 opacity-30 blur-3xl rounded-full"
        animate={{ x: [0, 20, -20], y: [0, 20, -20] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-r from-slate-600 to-slate-700 opacity-30 blur-3xl rounded-full"
        animate={{ x: [0, -20, 20], y: [0, -20, 20] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        {/* Heading */}
        <motion.h4
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-white"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to bring{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
            your vision
          </span>{" "}
          to life?
        </motion.h4>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <SpotlightButton />
        </div>
      </div>
    </motion.section>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const btn = btnRef.current;
    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-8 py-4 text-lg font-medium text-white shadow-md hover:bg-slate-900 transition-all"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Get In Touch
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100 opacity-20"
      />
    </motion.button>
  );
};

export default CallToAction;
