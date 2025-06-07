import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserCheck,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaAward
} from 'react-icons/fa';
import SpotlightCard from '../components/SpotlightCard';



const points = [
  {
    icon: <FaUserCheck className="text-blue-400 w-5 h-5" />,
    text: 'Passion for delivering top-tier user experience with intuitive design.',
  },
  {
    icon: <FaRocket className="text-blue-400 w-5 h-5" />,
    text: 'Agile, scalable development process tailored to your business needs.',
  },
  {
    icon: <FaLightbulb className="text-blue-400 w-5 h-5" />,
    text: 'Deep understanding of diverse industries and market challenges.',
  },
  {
    icon: <FaHandshake className="text-blue-400 w-5 h-5" />,
    text: 'Transparent, collaborative partnerships with clear communication.',
  },
  {
    icon: <FaShieldAlt className="text-blue-400 w-5 h-5" />,
    text: 'Commitment to security and data privacy in all our solutions.',
  },
];

const values = [
  {
    title: 'Innovation',
    icon: <FaLightbulb className="text-blue-400 w-10 h-10" />,
    text: 'We embrace creativity and use modern technologies to solve complex challenges with fresh ideas.',
  },
  {
    title: 'Integrity',
    icon: <FaHandshake className="text-blue-400 w-10 h-10" />,
    text: 'We act with honesty, transparency, and accountability in every project and partnership.',
  },
  {
    title: 'Excellence',
    icon: <FaAward className="text-blue-400 w-10 h-10" />,
    text: 'We strive to exceed expectations by delivering quality and performance in everything we do.',
  },
];

const teamMembers = [
  {
    name: 'Aarav Patel',
    role: 'CEO & Founder',
    photo: '/about.png',
    bio: 'Visionary leader with 10+ years in tech startups and product innovation.',
  },
  {
    name: 'Maya Shah',
    role: 'Lead Developer',
    photo: '/about.png',
    bio: 'Expert in scalable web applications and agile development methodologies.',
  },
  {
    name: 'Rohan Mehta',
    role: 'UI/UX Designer',
    photo: '/about.png',
    bio: 'Crafts beautiful and intuitive interfaces that delight users.',
  },
  {
    name: 'Neha Gupta',
    role: 'Product Manager',
    photo: '/about.png',
    bio: 'Ensures every project aligns perfectly with business goals and user needs.',
  },
];
const About = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-6 text-white font-inter">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About HelloBj
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We build smart, scalable, and high-impact digital solutions tailored for startups and growing businesses. Our team is passionate about transforming ideas into reality through innovation, agility, and design excellence.
          </p>
        </div>

        {/* Mission and Why Us */}
        <SpotlightCard className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/about.png"
              alt="About HelloBj"
              className="w-full max-w-xs mx-auto animate-pulse drop-shadow-xl"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 border-l-4 border-blue-500 pl-4">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
                At HelloBj, our mission is to empower businesses by crafting reliable and innovative digital products that fuel growth and efficiency. We focus on user-centric design and scalable architecture to build lasting digital experiences.
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Why We're Different
              </h2>
              <ul className="space-y-4 text-base md:text-lg text-gray-300">
                {points.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 hover:text-blue-400 transition-colors">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SpotlightCard>

        {/* Vision & Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-14 tracking-wide">
            Our Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <SpotlightCard key={idx} className="text-center">
                <div className="flex justify-center items-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Team Section */}
         <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-14 tracking-wide">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <SpotlightCard key={idx} className="p-0"> {/* Override padding */}
                <div className="relative z-20"> {/* Content wrapper */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="p-1 h-45 object-cover object-top"
                    loading="lazy"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-1">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* CTA - NOW USING SPOTLIGHTCARD */}
        <SpotlightCard className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Connect with us today and let's start building your future-proof digital solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 hover:bg-gray-100 transition-all duration-300 rounded-full hover:shadow-md hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default About;