import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 font-lato border-t border-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container flex flex-col md:flex-row justify-between gap-12"
      >
        {/* Info Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-grow">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serifDisplay">Contact Info</h3>
            <ul className="text-black space-y-2">
              <li><strong>Address:</strong> Address.</li>
              <li><strong>Phone:</strong> +123-456-7890</li>
              <li><strong>Email:</strong> info@auroraeducation.com</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serifDisplay ">Important Links</h3>
            <ul className="text-black space-y-2">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Services</a></li>
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 font-serifDisplay">Newsletter</h3>
          <p className="text-black mb-4">
            Stay updated with the latest resources, tips, and personalized learning insights.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-200 text-black w-full md:w-64 focus:outline-none"
            />
            <button className="bg-primary text-white font-semibold py-1 px-7 rounded-lg hover:bg-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>

      {/* Social Icons & Copyright */}
      <div className="mt-12 flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a href="#" className="text-black hover:text-primary"><FaWhatsapp className="text-2xl cursor-pointer" /></a>
          <a href="#" className="text-black hover:text-primary"><FaInstagram className="text-2xl cursor-pointer" /></a>
          <a href="#" className="text-black hover:text-primary"><TbWorldWww className="text-2xl cursor-pointer" /></a>
          <a href="#" className="text-black hover:text-primary"><FaYoutube className="text-2xl cursor-pointer" /></a>
        </div>
        <p className="text-black text-sm text-center">
          © 2025 Aurora Education. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
