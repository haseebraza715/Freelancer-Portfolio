import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "react-feather"; // Icons
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
  const [openDropdown, setOpenDropdown] = useState(null);

  // Color scheme
  const colors = {
    primary: "#1E293B", // Navy Blue
    secondary: "#F59E0B", // Amber
    background: "#F8FAFC", // Off-white
    cardBg: "#FFFFFF",
    textPrimary: "#1E293B",
    textSecondary: "#64748B",
    border: "#E2E8F0",
  };

  return (
    <header
      className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#1E293B] to-[#3B82F6] text-white shadow-lg backdrop-blur-md"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={coverI}
            alt="Logo"
            className="h-12 w-auto"
            aria-label="Company Logo"
          />
        </div>

        {/* Desktop Navigation */}
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
                className="relative text-sm font-medium transition duration-300 hover:text-[#F59E0B] group"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F59E0B] to-[#e58a00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
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
            className="lg:hidden bg-[#1E293B] text-white"
          >
            <ul className="flex flex-col px-6 py-5 space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.FlyoutContent ? (
                    <button
                      className="w-full flex justify-between items-center text-sm font-medium hover:text-[#F59E0B] transition"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      {item.label}
                      <span className="ml-2">
                        {openDropdown === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      className="block text-sm font-medium hover:text-[#F59E0B] transition"
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
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={href}
        className="relative text-sm font-medium hover:text-[#F59E0B] group"
      >
        {children}
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F59E0B] to-[#e58a00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute left-1/2 top-10 bg-[#1E293B] text-white shadow-md rounded-lg border border-[#F59E0B]/50"
            style={{ translateX: "-50%", width: "240px" }}
          >
            <div className="p-4">{<FlyoutContent />}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesContent = () => (
  <div>
    <h3 className="mb-2 font-semibold text-[#F59E0B]">Our Services</h3>
    <ul className="space-y-2">
      <ServiceLink href="#web-dev" label="Web Development" />
      <ServiceLink href="#mobile-dev" label="Mobile App Development" />
      <ServiceLink href="#ui-ux" label="UI/UX Design" />
      <ServiceLink href="#seo" label="SEO Optimization" />
    </ul>
  </div>
);

const PortfolioContent = () => (
  <div>
    <h3 className="mb-2 font-semibold text-[#F59E0B]">Our Portfolio</h3>
    <ul className="space-y-2">
      <ServiceLink href="#websites" label="Websites" />
      <ServiceLink href="#mobile-apps" label="Mobile Apps" />
      <ServiceLink href="#case-studies" label="Case Studies" />
    </ul>
  </div>
);

const ServiceLink = ({ href, label }) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a
      href={href}
      className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#F59E0B]/20 hover:text-white rounded-md transition-all duration-300"
    >
      {label}
    </a>
  </motion.li>
);

export default Header;