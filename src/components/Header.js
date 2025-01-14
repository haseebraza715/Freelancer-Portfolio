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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#121212] to-[#1F1F1F] shadow-lg">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1D1D1D] text-white shadow-lg"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {menuItems.map((item, index) =>
                item.FlyoutContent ? (
                  <FlyoutLink
                    key={index}
                    href={item.link}
                    FlyoutContent={item.FlyoutContent}
                    mobile
                  >
                    {item.label}
                  </FlyoutLink>
                ) : (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block text-sm font-semibold uppercase tracking-wide hover:text-[#4F8EF7] transition duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, mobile }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={!mobile ? () => setOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setOpen(false) : undefined}
      className={`relative ${mobile ? "block" : "inline-block"}`}
    >
      <button
        onClick={mobile ? () => setOpen(!open) : undefined}
        className="relative text-sm font-semibold uppercase tracking-wide text-white hover:text-[#8A4EFF] transition duration-300"
      >
        {children}
        {!mobile && (
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F8EF7] to-[#8A4EFF] origin-left scale-x-0 transition-transform duration-300"
          />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`absolute ${mobile ? "block" : "left-1/2 top-10"} ${
              mobile ? "bg-[#1D1D1D]" : "bg-[#1D1D1D] shadow-lg rounded-xl"
            }`}
            style={mobile ? {} : { translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`relative w-64 ${
                mobile ? "px-6 py-4" : "p-4 rounded-xl"
              }`}
            >
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
      <Submenu label="Web Development" projects={webDevProjects} />
      <Submenu label="Mobile App Development" projects={mobileDevProjects} />
    </ul>
  </div>
);

const PortfolioContent = () => (
  <div>
    <h3 className="mb-2 font-semibold text-[#4F8EF7]">Our Portfolio</h3>
    <ul className="space-y-2">
      <Submenu label="Websites" projects={webProjects} />
      <Submenu label="Mobile Apps" projects={mobileProjects} />
    </ul>
  </div>
);

const Submenu = ({ label, projects }) => (
  <li>
    <h4 className="text-white text-sm font-semibold">{label}</h4>
    <ul className="space-y-1">
      {projects.map((project, index) => (
        <li key={index}>
          <a
            href={project.link}
            className="block px-3 py-2 text-sm text-[#A0A0A0] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8A4EFF] hover:text-white rounded-md transition duration-300"
          >
            {project.title}
          </a>
        </li>
      ))}
    </ul>
  </li>
);

const webDevProjects = [
  { title: "E-commerce Website", link: "#ecommerce" },
  { title: "Portfolio Website", link: "#portfolio" },
  { title: "Corporate Website", link: "#corporate" },
];

const mobileDevProjects = [
  { title: "Food Delivery App", link: "#food-delivery" },
  { title: "Health Tracker", link: "#health-tracker" },
];

const webProjects = [
  { title: "Business Websites", link: "#business" },
  { title: "Educational Websites", link: "#education" },
];

const mobileProjects = [
  { title: "Fitness Apps", link: "#fitness" },
  { title: "E-commerce Apps", link: "#ecommerce-mobile" },
];

export default Header;
