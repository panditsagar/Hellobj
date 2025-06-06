import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-[#FAFAFA] py-24 px-6 font-inter">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Section – Contact Info */}
          <div className="mt-16 ml-16">
            <h1 className="text-5xl font-semibold text-[#1C398E] mb-6 leading-tight">
              Have Questions?<br /> Contact Us!
            </h1>

            <div className="text-gray-700 space-y-1 text-base">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 w-5 h-5 text-black" />
                <div>
                  <p>Hellobj Technologies Pvt Ltd</p>
                  <p>WeWork RMZ Spire</p>
                  <p>Tower-100, Office no– 07A–107</p>
                  <p>Silpa Gram Craft Village</p>
                  <p>HITEC City</p>
                  <p>Ranchi–500081</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <Phone className="w-5 h-5 text-black" />
                <a href="tel:+918928571364" className="text-[#1C398E] underline text-base">
                  +91 8928571364
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-black" />
                <a href="mailto:hellobj0001@gmail.com" className="text-[#1C398E] underline text-base">
                 hellobj0001@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Follow Us:</h2>
              <div className="flex space-x-5 text-black text-2xl">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* Right Section – Contact Form */}
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="space-y-6 bg-white p-16  border border-gray-100"
        
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name*"
                required
                className="w-full px-4 py-3 border border-gray-300   focus:outline-none "
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email*"
                required
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none "
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject*"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none "
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#1C398E] text-white font-semibold py-3 px-6 transition duration-200"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
