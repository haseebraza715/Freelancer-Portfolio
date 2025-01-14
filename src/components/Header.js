import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiCode,
  FiBarChart2,
  FiHome,
} from "react-icons/fi";

const Header = () => {
  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    {
      label: "Services",
      Component: ServicesContent,
    },
    {
      label: "Portfolio",
      Component: PortfolioContent,
    },
    { label: "Contact", link: "#contact" },
  ];

  const [selectedTab, setSelectedTab] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    left: "auto",
    right: "auto",
  });

  const handleTabSelect = (tabIndex, event) => {
    if (!event) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    // Adjust dropdown positioning to avoid overflow
    const dropdownLeft = rect.left;
    const dropdownRight = screenWidth - rect.right;

    if (dropdownRight < 300) {
      setDropdownPosition({ left: "auto", right: 0 });
    } else {
      setDropdownPosition({ left: dropdownLeft, right: "auto" });
    }

    setSelectedTab(tabIndex);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#121212] shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-[#4F8EF7]">
          Freelancer Portfolio
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item, index) =>
            item.Component ? (
              <DropdownTab
                key={index}
                tabIndex={index}
                label={item.label}
                selectedTab={selectedTab}
                handleTabSelect={handleTabSelect}
                dropdownPosition={dropdownPosition}
              >
                <item.Component />
              </DropdownTab>
            ) : (
              <a
                key={index}
                href={item.link}
                className="text-white text-sm font-semibold uppercase hover:text-[#4F8EF7] transition"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl text-white"
          onClick={() =>
            setSelectedTab(selectedTab === "mobile" ? null : "mobile")
          }
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {selectedTab === "mobile" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#1D1D1D] text-white shadow-lg w-full absolute top-full left-0"
            >
              <ul className="flex flex-col px-6 py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block text-sm font-semibold uppercase tracking-wide hover:text-[#4F8EF7] transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const DropdownTab = ({
  label,
  tabIndex,
  selectedTab,
  handleTabSelect,
  children,
  dropdownPosition,
}) => {
  const isSelected = selectedTab === tabIndex;

  return (
    <div
      onMouseEnter={(e) => handleTabSelect(tabIndex, e)}
      onMouseLeave={() => handleTabSelect(null)}
      className="relative"
    >
      <button
        className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide ${
          isSelected ? "text-[#4F8EF7]" : "text-white"
        } transition`}
      >
        <span>{label}</span>
        <FiChevronDown
          className={`${isSelected ? "rotate-180" : ""} transition-transform`}
        />
      </button>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bg-[#1A1A1A] rounded-lg shadow-lg p-6"
            style={{
              ...dropdownPosition,
              minWidth: "300px",
              maxWidth: "600px",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesContent = () => {
  const categories = [
    {
      heading: "Web Development",
      projects: [
        { title: "E-commerce Website", icon: <FiCode />, link: "#ecommerce" },
        { title: "Portfolio Website", icon: <FiCode />, link: "#portfolio" },
        { title: "Corporate Website", icon: <FiCode />, link: "#corporate" },
      ],
    },
    {
      heading: "Mobile Development",
      projects: [
        {
          title: "Food Delivery App",
          icon: <FiCode />,
          link: "#food-delivery",
        },
        { title: "Health Tracker", icon: <FiCode />, link: "#health-tracker" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h4 className="mb-2 text-sm font-medium text-gray-400">
            {category.heading}
          </h4>
          <ul className="space-y-2">
            {category.projects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-sm text-gray-200 hover:text-blue-400 transition"
                >
                  {project.icon}
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const PortfolioContent = ServicesContent;

export default Header;
