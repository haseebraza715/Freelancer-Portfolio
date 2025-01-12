import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 shadow-lg transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur" : "bg-transparent"
      }`}
      role="banner"
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          role="heading"
          aria-level="1"
        >
          Freelancer Portfolio
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-blue-400 transition-colors"
              tabIndex="0"
              aria-label={`Go to ${item}`}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none text-2xl ml-4"
          whileHover={{ scale: 1.2 }}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? "✖" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900 text-white"
        role="menu"
        aria-expanded={menuOpen}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4">
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors block"
                  onClick={() => setMenuOpen(false)}
                  role="menuitem"
                  tabIndex="0"
                  aria-label={`Navigate to ${item}`}
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
