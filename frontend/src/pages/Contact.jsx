import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 md:px-12 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col justify-center px-4 md:px-0">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#582BF3] mb-8 leading-tight">
            Have Questions?<br /> Contact Us!
          </h1>

          <div className="space-y-6 text-gray-300 text-base">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 w-6 h-6 text-gray-300 flex-shrink-0" />
              <address className="not-italic space-y-1">
                <p>Hellobj Technologies Pvt Ltd</p>
                <p>WeWork RMZ Spire</p>
                <p>Tower-100, Office no– 07A–107</p>
                <p>Silpa Gram Craft Village</p>
                <p>HITEC City</p>
                <p>Ranchi–500081</p>
              </address>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-gray-300 flex-shrink-0" />
              <Link
                to="tel:+918928571364"
                className="text-[#582BF3] underline text-base hover:text-purple-400 transition"
              >
                +91 8928571364
              </Link>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-gray-300 flex-shrink-0" />
              <Link
                to="mailto:hellobj0001@gmail.com"
                className="text-[#582BF3] underline text-base hover:text-purple-400 transition"
              >
                hellobj0001@gmail.com
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Follow Us:</h2>
            <div className="flex space-x-6 text-gray-300 text-3xl">
              <Link to="#" aria-label="Facebook" className="hover:text-[#582BF3] transition">
                <FaFacebookF />
              </Link>
              <Link to="#" aria-label="Instagram" className="hover:text-[#582BF3] transition">
                <FaInstagram />
              </Link>
              <Link to="#" aria-label="Twitter" className="hover:text-[#582BF3] transition">
                <FaXTwitter />
              </Link>
              <Link to="#" aria-label="LinkedIn" className="hover:text-[#582BF3] transition">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="space-y-6 p-8 sm:p-10 border border-gray-700 rounded-xl bg-[#0f0f0f] shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name*"
              required
              className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#582BF3] transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email*"
              required
              className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#582BF3] transition"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject*"
              required
              className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#582BF3] transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#582BF3] transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#582BF3] text-white font-semibold py-3 rounded-md hover:bg-[#6d3eff] transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;