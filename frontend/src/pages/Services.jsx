import React from 'react';
import {
  Globe,
  Smartphone,
  Paintbrush,
  Code2,
  ShieldCheck,
  Settings2,
  Database,
  SearchCheck,
} from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Web Development',
    description: 'Responsive, high-performing websites built with modern frameworks and clean code.',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps designed for speed, usability, and functionality.',
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'UI/UX Design',
    description: 'Creative, intuitive designs that deliver beautiful and seamless user experiences.',
  },
  {
    icon: <Code2 className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Custom Software',
    description: 'Tailored software systems optimized for scalability, speed, and security.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Cybersecurity',
    description: 'End-to-end protection and audits to keep your systems secure and compliant.',
  },
  {
    icon: <Settings2 className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'DevOps & CI/CD',
    description: 'Automation and infrastructure management to ensure reliable delivery pipelines.',
  },
  {
    icon: <Database className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Database Solutions',
    description: 'Efficient data architecture and scalable storage using SQL, NoSQL & cloud DBs.',
  },
  {
    icon: <SearchCheck className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'SEO & Performance',
    description: 'Boost your reach with technical SEO and web optimization best practices.',
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We craft powerful digital products to help your business thrive in a fast-paced tech world.
            From concept to deployment, we turn ideas into scalable, user-friendly experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:shadow-xl transition duration-300 rounded-xl p-6 text-center border border-gray-100"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Outro CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Not sure what you need?</h2>
          <p className="text-gray-600 mb-6">
            Our experts can help you define the right solution for your business goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
