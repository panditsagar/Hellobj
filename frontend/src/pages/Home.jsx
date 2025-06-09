import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Paintbrush, Headphones } from 'lucide-react';
import ContactGloab from './ContactGlobe';
import Stats from '../components/Stats';
import {
    Zap, Users, TrendingUp, ShieldCheck, Handshake,
    Settings2,
} from 'lucide-react';

import SpotlightCard from '../components/SpotlightCard';

const Home = () => {
    const icons = [Zap, Users, TrendingUp, ShieldCheck, Handshake, Globe, ShieldCheck, Settings2];
    return (
        <div className="font-inter text-white bg-black">
            {/* 🚀 Hero Section */}
            <section className="bg-black pt-6 px-1">
                <ContactGloab />
            </section>

            {/* 🧠 About Section */}
            <section className="px-4 sm:px-6 py-16 font-inter bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        {/* Image Section */}
                        <div className="w-full lg:w-[50%] h-auto max-h-[400px] sm:max-h-[500px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/about.png"
                                alt="HelloBj team working"
                                className="w-full h-full object-cover transform transition duration-500 hover:scale-105 hover:-translate-y-1 hover:translate-x-2"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full lg:w-[50%] space-y-6 text-center lg:text-left">
                            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#582BF3] italic">
                                ABOUT US
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
                                HelloBj was founded on the principle that great digital products require both technical excellence and creative vision.
                                <br /><br />
                                We bridge the gap between robust architecture and pixel-perfect experiences. We empower startups and enterprises through clean code and strategic thinking.
                                <br /><br />
                                Our solutions go beyond UI to deliver complete product experiences — we never settle for "OK", only work we're proud to put our name on.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/*  🛠 Services Section */ }
            <section className="bg-black py-20 px-4 sm:px-6 text-center font-inter">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#582BF3] mb-14">
                        Hellobj Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {[
                            { icon: <Globe size={40} />, title: 'Web Development', desc: 'Modern, secure, and scalable websites.' },
                            { icon: <Smartphone size={40} />, title: 'Mobile Development', desc: 'Native and cross-platform apps for Android & iOS.' },
                            { icon: <Paintbrush size={40} />, title: 'UI/UX Design', desc: 'Designs that balance beauty and usability.' },
                            { icon: <Headphones size={40} />, title: 'Support & Maintenance', desc: 'Reliable post-launch assistance & updates.' },
                            { icon: <Smartphone size={40} />, title: 'Consulting', desc: 'Strategic tech advice for digital growth.' },
                            { icon: <Settings2 size={40} />, title: 'Maintenance & Monitoring', desc: 'Proactive monitoring to ensure peak performance.' },
                            { icon: <ShieldCheck size={40} />, title: 'IT Consulting', desc: 'Align your technology with business goals.' },
                            { icon: <Globe size={40} />, title: 'Cloud Services', desc: 'Deploy and scale using modern cloud platforms.' },
                            { icon: <Handshake size={40} />, title: 'Partnerships', desc: 'Collaborative solutions for mutual growth.' },
                        ].map(({ icon, title, desc }, i) => (
                            <SpotlightCard
                                key={i}
                                className="p-8 rounded-xl border border-gray-700 bg-black flex flex-col items-center text-center"
                            >
                                <div className="flex justify-center items-center w-full mb-4">
                                    <span className="text-[#582BF3]">{icon}</span>
                                </div>
                                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                    {desc}
                                </p>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>


            {/* 💡 Why Choose Us */}
            <section className="bg-black py-20 px-4 sm:px-6 font-inter">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#582BF3] mb-14">
                        Why Choose Hellobj?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {[
                            { title: 'Fast Delivery', desc: 'Speedy project completion without compromise' },
                            { title: 'Expert Team', desc: 'Highly skilled and dedicated professionals' },
                            { title: 'Growth-Oriented', desc: 'Focused on scaling your business' },
                            { title: 'Secure Solutions', desc: 'Top-tier data protection and security' },
                            { title: 'Transparent Process', desc: 'Clear and honest communication' },
                            { title: 'Global Reach', desc: 'Serving clients worldwide effectively' },
                        ].map((item, i) => {
                            const Icon = icons[i]; // ensure 'icons' array is defined and imported
                            return (
                                <SpotlightCard
                                    key={i}
                                    className="p-8 sm:p-10 rounded-xl border border-gray-700 bg-black flex flex-col items-center text-center"
                                >
                                    <div className="flex justify-center items-center w-full mb-5">
                                        <Icon size={40} className="text-[#582BF3]" />
                                    </div>
                                    <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xs">
                                        {item.desc}
                                    </p>
                                </SpotlightCard>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* 📊 Stats */}
            <Stats />

            {/* 💬 Testimonials */}
            <section className="bg-black py-24 px-4 sm:px-6 font-inter">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#582BF3] mb-16 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                name: 'Alice Johnson',
                                company: 'TechCorp Inc.',
                                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                                feedback:
                                    'HelloBj transformed our digital presence with a beautifully designed website that truly reflects our brand!',
                                rating: 5,
                            },
                            {
                                name: 'Mark Stevenson',
                                company: 'InnovateX',
                                avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
                                feedback:
                                    'Their team delivered fast, professional results and the ongoing support has been exceptional.',
                                rating: 4,
                            },
                            {
                                name: 'Sophia Lee',
                                company: 'BrightFuture Ltd.',
                                avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
                                feedback:
                                    'We were impressed by their expert knowledge and ability to bring our ideas to life seamlessly.',
                                rating: 5,
                            },
                            {
                                name: 'James Patel',
                                company: 'Tech Innovations',
                                avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
                                feedback:
                                    'The project was handled with utmost professionalism and delivered ahead of schedule.',
                                rating: 5,
                            },
                            {
                                name: 'Emily Verma',
                                company: 'NextGen Apps',
                                avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
                                feedback:
                                    'Working with HelloBj was a smooth and creative experience — they truly understood our vision.',
                                rating: 5,
                            },
                            {
                                name: 'Rahul Mehta',
                                company: 'GlobalEdge Solutions',
                                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                                feedback:
                                    'Their commitment to quality and attention to detail is unmatched. Highly recommend HelloBj!',
                                rating: 4,
                            },
                        ].map(({ name, company, avatar, feedback, rating }, i) => (
                            <SpotlightCard
                                key={i}
                                className="relative p-8 bg-[#0f0f0f] rounded-2xl border flex flex-col h-full text-left"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-5 right-6 text-7xl text-white opacity-10 z-0">
                                    &rdquo;
                                </div>

                                {/* Star Rating */}
                                <div className="flex mb-4 z-10">
                                    {[...Array(rating)].map((_, starIndex) => (
                                        <svg
                                            key={starIndex}
                                            className="w-5 h-5 text-yellow-400 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
                                        </svg>
                                    ))}
                                    {[...Array(5 - rating)].map((_, starIndex) => (
                                        <svg
                                            key={`empty-${starIndex}`}
                                            className="w-5 h-5 text-gray-600 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Feedback */}
                                <p className="italic text-gray-300 mb-6 z-10 flex-grow leading-relaxed">
                                    “{feedback}”
                                </p>

                                {/* Author */}
                                <div className="flex items-center mt-auto z-10">
                                    <img
                                        src={avatar}
                                        alt={`${name} avatar`}
                                        className="w-11 h-11 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <p className="font-semibold text-white text-base">{name}</p>
                                        <p className="text-sm text-gray-400">{company}</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>


            {/* 📩 CTA */}
            <section className="bg-black py-24 px-4 sm:px-6 font-inter">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Text Block */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#582BF3] mb-6 leading-tight">
                            Let's Build Your Next Big Idea!
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Ready to transform your business? We're here to help. Contact us today to explore how our SAP solutions, custom app development, and Opland ERP can elevate your operations.
                            <br className="hidden sm:block" />
                            Let's discuss your goals and craft the perfect solution for success.
                        </p>
                    </div>

                    {/* Form Block */}
                    <form
                        action="https://formspree.io/f/yourFormID"
                        method="POST"
                        className="p-8 sm:p-10 bg-[#0f0f0f] border border-gray-700 rounded-xl shadow-[0_0_20px_rgba(88,43,243,0.1)] space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
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
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
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
                            <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
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
                            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
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

        </div>
    );
};

export default Home;