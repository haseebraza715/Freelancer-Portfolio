import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="bg-[#1E293B] text-[#F8FAFC] py-12 relative overflow-hidden"
      style={{ backgroundColor: "#1E293B", color: "#F8FAFC" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300 opacity-20 blur-2xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-300 opacity-20 blur-2xl rounded-full z-0"></div>

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About Us Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#FFFFFF]">
              About Us
            </h4>
            <p className="text-[#64748B] text-sm leading-relaxed">
              We are a team of passionate developers dedicated to delivering
              exceptional websites tailored to your needs. Let us bring your
              vision to life with creativity and precision.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#FFFFFF]">
              Quick Links
            </h4>
            <ul className="text-[#64748B] text-sm space-y-2">
              {["About Us", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-[#F59E0B] transition-colors"
                    aria-label={`Navigate to ${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#FFFFFF]">
              Contact Info
            </h4>
            <p className="text-[#64748B] text-sm leading-relaxed">
              123 Freelancer St., Web City, USA
            </p>
            <p className="text-[#64748B] text-sm mt-4">
              contact@example.com
            </p>
            <p className="text-[#64748B] text-sm">
              +1 (555) 123-4567
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: FaFacebookF, link: "#", label: "Facebook" },
                { icon: FaTwitter, link: "#", label: "Twitter" },
                { icon: FaInstagram, link: "#", label: "Instagram" },
                { icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="text-[#FFFFFF] hover:text-[#F59E0B] transition-colors"
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                  }}
                  aria-label={`Visit our ${social.label}`}
                >
                  {React.createElement(social.icon, { size: 24 })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-[#64748B] my-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
        ></motion.div>

        {/* Footer Bottom Bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-[#64748B] text-sm">
            &copy; {new Date().getFullYear()} Freelancer Portfolio. All rights
            reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;