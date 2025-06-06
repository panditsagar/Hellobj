import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">HelloBj</h2>
            <p className="text-sm leading-relaxed mb-4">
              Delivering innovative digital solutions to help businesses grow and thrive in the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-blue-500 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-500 hover:text-white transition">
                <FaXTwitter />
              </a>
              <a href="#" className="text-blue-500 hover:text-white transition">
                <FaLinkedinIn />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "SEO Services"].map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 text-blue-500">📍</span>
                <span>123 Main Street, Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 text-blue-500">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 text-blue-500">✉️</span>
                <span>info@hellobj.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {currentYear} HelloBj. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
