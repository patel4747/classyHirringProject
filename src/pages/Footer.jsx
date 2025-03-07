import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaDesktop,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white py-6 mt-10 rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <span className="text-xl">📜</span> {/* Placeholder for Logo */}
            <span>DocuTech</span>
          </h2>
          <p className="text-sm opacity-80">Powered by Classy Endeavors</p>
        </div>

        {/* Center Links */}
        <nav className="flex space-x-5 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Why Choose Us
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Legal Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </nav>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          <FaTwitter className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          <FaDiscord className="hover:text-gray-300 cursor-pointer" />
          <FaDesktop className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
