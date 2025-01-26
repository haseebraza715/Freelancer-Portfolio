import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const colors = {
  primary: "#1E293B",
  secondary: "#F59E0B",
  background: "#F8FAFC",
  cardBg: "#FFFFFF",
  textPrimary: "#1E293B",
  textSecondary: "#64748B",
  border: "#E2E8F0",
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-[${colors.secondary}] to-[${colors.primary}] text-white p-3 rounded-full shadow-lg hover:from-[${colors.secondary}] hover:to-[${colors.primary}] transition-all duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Scroll to top"
      style={{
        transition: "opacity 0.3s ease, transform 0.3s ease",
        zIndex: 1000, // Ensure the button is above other content
      }}
    >
      <FaArrowUp className="text-lg md:text-2xl" />
    </button>
  );
};

export default ScrollToTop;