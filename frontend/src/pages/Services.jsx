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
    icon: <Globe size={48} className="text-[#1C398E] mb-4" />,
    title: 'Web Development',
    description: 'Responsive, high-performing websites built with modern frameworks and clean code.',
  },
  {
    icon: <Smartphone size={48} className="text-[#1C398E] mb-4" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps designed for speed, usability, and functionality.',
  },
  {
    icon: <Paintbrush size={48} className="text-[#1C398E] mb-4" />,
    title: 'UI/UX Design',
    description: 'Creative, intuitive designs that deliver beautiful and seamless user experiences.',
  },
  {
    icon: <Code2 size={48} className="text-[#1C398E] mb-4" />,
    title: 'Custom Software',
    description: 'Tailored software systems optimized for scalability, speed, and security.',
  },
  {
    icon: <ShieldCheck size={48} className="text-[#1C398E] mb-4" />,
    title: 'Cybersecurity',
    description: 'End-to-end protection and audits to keep your systems secure and compliant.',
  },
  {
    icon: <Settings2 size={48} className="text-[#1C398E] mb-4" />,
    title: 'DevOps & CI/CD',
    description: 'Automation and infrastructure management to ensure reliable delivery pipelines.',
  },
  {
    icon: <Database size={48} className="text-[#1C398E] mb-4" />,
    title: 'Database Solutions',
    description: 'Efficient data architecture and scalable storage using SQL, NoSQL & cloud DBs.',
  },
  {
    icon: <SearchCheck size={48} className="text-[#1C398E] mb-4" />,
    title: 'SEO & Performance',
    description: 'Boost your reach with technical SEO and web optimization best practices.',
  },
  {
    icon: <Settings2 size={48} className="text-[#1C398E] mb-4" />,
    title: 'Maintenance & Monitoring',
    description: 'Proactive system monitoring and timely maintenance to ensure peak performance.',
  },
  {
    icon: <ShieldCheck size={48} className="text-[#1C398E] mb-4" />,
    title: 'IT Consulting',
    description: 'Expert guidance to align your technology strategy with business goals.',
  },
  {
    icon: <Globe size={48} className="text-[#1C398E] mb-4" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to enhance flexibility and reduce costs.',
  },
  {
    icon: <Smartphone size={48} className="text-[#1C398E] mb-4" />,
    title: 'E-commerce Development',
    description: 'Robust e-commerce platforms that drive sales and enhance customer engagement.',
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 text-center font-inter">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-5xl font-semibold text-[#1C398E] mb-4 tracking-tight">
            Hellobj Services
          </h1>
          <p className="text-gray-800 max-w-4xl mx-auto text-xl leading-relaxed">
            We craft powerful digital products to help your business thrive in a fast-paced tech world.
            From concept to deployment, we turn ideas into scalable, user-friendly experiences.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 min-h-[320px] border border-gray-100 hover:shadow-md transition flex flex-col items-center justify-center"
            >
              <div>{service.icon}</div>
              <h3 className="font-semibold text-2xl text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-800 text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default Services;
