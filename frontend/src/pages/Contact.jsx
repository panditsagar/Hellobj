import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have a project in mind or a question for us? Let’s talk.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="bg-white shadow-lg rounded-3xl p-10 space-y-8 border border-gray-200"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 placeholder-gray-400 resize-none"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-12 bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
            <div className="flex items-start space-x-5">
              <MapPin className="text-blue-600 mt-1 w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <Mail className="text-blue-600 mt-1 w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-600 mt-1 text-sm">contact@hellobj.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <Phone className="text-blue-600 mt-1 w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600 mt-1 text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-28 bg-blue-100 rounded-3xl p-12 text-center shadow-md border border-blue-200 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-5">
            Let's build something amazing together!
          </h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
            We’re here to listen, collaborate, and create. Drop us a message and
            we’ll get back within 24 hours.
          </p>
          <a
            href="mailto:contact@hellobj.in"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
