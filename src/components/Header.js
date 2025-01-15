import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "react-feather"; // For dropdown icons
import coverI from "../images/Logo.png";

const Header = () => {
  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    {
      label: "Services",
      FlyoutContent: ServicesContent,
    },
    {
      label: "Portfolio",
      FlyoutContent: PortfolioContent,
    },
    { label: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns

  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={coverI}
            alt="Logo"
            className="h-10 w-auto" // Adjust height and width as needed
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) =>
            item.FlyoutContent ? (
              <FlyoutLink
                key={index}
                href={item.link}
                FlyoutContent={item.FlyoutContent}
              >
                {item.label}
              </FlyoutLink>
            ) : (
              <a
                key={index}
                href={item.link}
                className="relative text-white text-sm font-medium hover:text-[#3B82F6] transition duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#A855F7] origin-left scale-x-0 hover:scale-x-100 transition-transform duration-300" />
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl text-white hover:text-[#3B82F6] transition focus:outline-none focus:ring-2 focus:ring-[#3B82F6] rounded-md p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 backdrop-blur-md text-white shadow-lg w-full"
          >
            <ul className="flex flex-col px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.FlyoutContent ? (
                    <button
                      className="w-full flex justify-between items-center text-sm font-medium hover:text-[#3B82F6] transition focus:outline-none focus:ring-2 focus:ring-[#3B82F6] rounded-md p-2"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      aria-expanded={openDropdown === index}
                    >
                      {item.label}
                      <span className="ml-2">
                        {openDropdown === index ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      className="block text-sm font-medium hover:text-[#3B82F6] transition p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    >
                      {item.label}
                    </a>
                  )}
                  {openDropdown === index && item.FlyoutContent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 pt-2"
                    >
                      <item.FlyoutContent />
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <a
        href={href || "#"}
        className="relative text-white text-sm font-medium hover:text-[#3B82F6] transition duration-300"
      >
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#A855F7] origin-left scale-x-0 transition-transform duration-300"
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute left-1/2 top-10 bg-black/90 backdrop-blur-md text-white shadow-lg rounded-lg border border-[#3B82F6]/20"
            style={{ translateX: "-50%", width: "220px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full p-4 rounded-lg">
              <FlyoutContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesContent = () => (
  <div>
    <h3 className="mb-2 font-semibold text-[#3B82F6]">Our Services</h3>
    <ul className="space-y-2">
      <li>
        <a
          href="#web-dev"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          Web Development
        </a>
      </li>
      <li>
        <a
          href="#mobile-dev"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          Mobile App Development
        </a>
      </li>
      <li>
        <a
          href="#ui-ux"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          UI/UX Design
        </a>
      </li>
      <li>
        <a
          href="#seo"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          SEO Optimization
        </a>
      </li>
    </ul>
  </div>
);

const PortfolioContent = () => (
  <div>
    <h3 className="mb-2 font-semibold text-[#3B82F6]">Our Portfolio</h3>
    <ul className="space-y-2">
      <li>
        <a
          href="#websites"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          Websites
        </a>
      </li>
      <li>
        <a
          href="#mobile-apps"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          Mobile Apps
        </a>
      </li>
      <li>
        <a
          href="#case-studies"
          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#3B82F6]/10 hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          Case Studies
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
