import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] opacity-20 blur-2xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-[#50E3C2] to-[#4A90E2] opacity-20 blur-2xl rounded-full z-0"></div>

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Us */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-transparent bg-clip-text">
              About Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a team of passionate developers dedicated to delivering
              exceptional websites tailored to your needs. Let us bring your
              vision to life with creativity and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-transparent bg-clip-text">
              Quick Links
            </h4>
            <ul className="text-gray-400 text-sm space-y-3">
              {["About Us", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-[#50E3C2] transition-colors font-medium"
                    aria-label={`Navigate to ${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-transparent bg-clip-text">
              Contact Info
            </h4>
            <div className="space-y-3">
              <p className="flex items-center text-gray-400 text-sm">
                <FaMapMarkerAlt className="mr-2 text-[#50E3C2]" /> 123
                Freelancer St., Web City, USA
              </p>
              <p className="flex items-center text-gray-400 text-sm">
                <FaEnvelope className="mr-2 text-[#50E3C2]" />{" "}
                contact@example.com
              </p>
              <p className="flex items-center text-gray-400 text-sm">
                <FaPhoneAlt className="mr-2 text-[#50E3C2]" /> +1 (555) 123-4567
              </p>
            </div>

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
                  className="text-gray-400 hover:text-[#50E3C2] transition-colors"
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
          className="border-t border-gray-700 my-8"
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
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Freelancer Portfolio. All rights
            reserved. |{" "}
            <a
              href="#"
              className="hover:text-[#50E3C2] transition-colors font-medium"
            >
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
