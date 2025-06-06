import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="min-h-screen bg-[#FAFAFA] py-20 px-6 text-gray-800 font-inter">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
            About HelloBj
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We build smart, scalable, and high-impact digital solutions tailored for startups and growing businesses. Our team is passionate about transforming ideas into reality through innovation, agility, and design excellence.
          </p>
        </div>

        {/* Mission and Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white p-10 border border-gray-100">
          <img
            src="/logo.svg"
            alt="About HelloBj"
            className="w-full max-w-xs mx-auto"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
              At HelloBj, our mission is to empower businesses by crafting reliable and innovative digital products that fuel growth and efficiency. We focus on user-centric design and scalable architecture to build lasting digital experiences.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
              Why We're Different
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-base md:text-lg pl-2">
              {[
                '✨ Passion for delivering top-tier user experience with intuitive design.',
                '🚀 Agile, scalable development process tailored to your business needs.',
                '💡 Deep understanding of diverse industries and market challenges.',
                '🤝 Transparent, collaborative partnerships with clear communication.',
                '🔒 Commitment to security and data privacy in all our solutions.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-blue-700 transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision and Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-14 tracking-wide">
            Our Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                icon: '💡',
                text: 'We embrace creativity and use modern technologies to solve complex challenges with fresh ideas.',
              },
              {
                title: 'Integrity',
                icon: '🤝',
                text: 'We act with honesty, transparency, and accountability in every project and partnership.',
              },
              {
                title: 'Excellence',
                icon: '🏆',
                text: 'We strive to exceed expectations by delivering quality and performance in everything we do.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-14 tracking-wide">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Aarav Patel',
                role: 'CEO & Founder',
                photo: '/team/aarav.jpg',
                bio: 'Visionary leader with 10+ years in tech startups and product innovation.',
              },
              {
                name: 'Maya Shah',
                role: 'Lead Developer',
                photo: '/team/maya.jpg',
                bio: 'Expert in scalable web applications and agile development methodologies.',
              },
              {
                name: 'Rohan Mehta',
                role: 'UI/UX Designer',
                photo: '/team/rohan.jpg',
                bio: 'Crafts beautiful and intuitive interfaces that delight users.',
              },
              {
                name: 'Neha Gupta',
                role: 'Product Manager',
                photo: '/team/neha.jpg',
                bio: 'Ensures every project aligns perfectly with business goals and user needs.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-700 py-12 px-8 text-center text-white max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-base mb-6 leading-relaxed">
            Connect with us today and let’s start building your future-proof digital solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
