import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import cover from "../images/cover.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Devin R.",
      role: "Growth Marketing Lead",
      feedback:
        "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
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
      className="relative bg-neutral-900 py-20 overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-blue-900 to-purple-900 opacity-80 z-0"></div>

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
            <TiltCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ testimonial }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-6"
      >
        {/* Client Image */}
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500"
          style={{
            transform: "translateZ(75px)",
          }}
        />
        {/* Client Feedback */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-gray-600 text-sm sm:text-base mb-4 italic leading-relaxed"
        >
          "{testimonial.feedback}"
        </p>
        {/* Client Name */}
        <h4
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-lg sm:text-xl font-semibold text-gray-800"
        >
          {testimonial.name}
        </h4>
        {/* Client Role */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-sm sm:text-base text-gray-500"
        >
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
};

export default Testimonials;
