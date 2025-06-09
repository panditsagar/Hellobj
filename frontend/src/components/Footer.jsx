import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-12 pb-8 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 font-inter">
          {/* Company Info */}
          <div>
            <h2 className="text-[#582BF3] text-3xl font-bold mb-6">Hellobj</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Delivering innovative digital solutions to help businesses grow and thrive in the modern world.
            </p>
            <div className="flex space-x-6 text-[#582BF3]">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-[#8e6ff1] transition duration-300 drop-shadow-[0_0_6px_rgba(88,43,243,0.7)]"
                  aria-label="social icon"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#582BF3] text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#8e6ff1] transition duration-300 drop-shadow-[0_0_5px_rgba(88,43,243,0.7)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#582BF3] text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "SEO Services"].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#8e6ff1] transition duration-300 drop-shadow-[0_0_5px_rgba(88,43,243,0.7)]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#582BF3] text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-[#582BF3] text-lg drop-shadow-[0_0_8px_rgba(88,43,243,0.9)]" />
                <span>123 Main Street, Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-[#582BF3] text-lg drop-shadow-[0_0_8px_rgba(88,43,243,0.9)]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-[#582BF3] text-lg drop-shadow-[0_0_8px_rgba(88,43,243,0.9)]" />
                <span>info@hellobj.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-6">
          <h3 className="text-gray-400 text-lg font-semibold">Stay Updated:</h3>
          <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-4 py-3 text-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#4C25D3] text-white text-sm font-medium hover:bg-[#582BF3] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider & Bottom Links */}
        <div className="border-t border-[#582BF3] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>&copy; {currentYear} Hellobj. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-[#8e6ff1] transition duration-300 drop-shadow-[0_0_5px_rgba(88,43,243,0.7)]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;