import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <header className="fixed top-0 z-50 w-full bg-[#121212] backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wider text-[#4F8EF7]">
          Freelancer Portfolio
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
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
                className="relative text-white text-sm font-semibold uppercase tracking-wide hover:text-[#4F8EF7] transition duration-300"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Placeholder */}
        <button className="lg:hidden text-xl text-white">☰</button>
      </div>
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
        className="relative text-sm font-semibold uppercase tracking-wide text-white hover:text-[#8A4EFF] transition duration-300"
      >
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F8EF7] to-[#8A4EFF] origin-left scale-x-0 transition-transform duration-300"
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute left-1/2 top-10 bg-[#1D1D1D] text-white shadow-lg rounded-xl"
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-64 p-4 rounded-xl">
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
    <h3 className="mb-2 font-semibold text-[#4F8EF7]">Our Services</h3>
    <ul className="space-y-2">
      <li>
        <a
          href="#web-dev"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          Web Development
        </a>
      </li>
      <li>
        <a
          href="#mobile-dev"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          Mobile App Development
        </a>
      </li>
      <li>
        <a
          href="#ui-ux"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          UI/UX Design
        </a>
      </li>
      <li>
        <a
          href="#seo"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          SEO Optimization
        </a>
      </li>
    </ul>
  </div>
);

const PortfolioContent = () => (
  <div>
    <h3 className="mb-2 font-semibold text-[#4F8EF7]">Our Portfolio</h3>
    <ul className="space-y-2">
      <li>
        <a
          href="#websites"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          Websites
        </a>
      </li>
      <li>
        <a
          href="#mobile-apps"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          Mobile Apps
        </a>
      </li>
      <li>
        <a
          href="#case-studies"
          className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition-all duration-300"
        >
          Case Studies
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
