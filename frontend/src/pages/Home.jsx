import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Paintbrush, Headphones } from 'lucide-react';
import ContactGloab from './ContactGlobe';
import Stats from '../components/Stats';
import {
    Zap, Users, TrendingUp, ShieldCheck, Handshake,
    Settings2,
} from 'lucide-react';

const Home = () => {
    const icons = [Zap, Users, TrendingUp, ShieldCheck, Handshake, Globe, ShieldCheck, Settings2];
    return (
        <div className="font-inter text-white bg-black">
            {/* 🚀 Hero Section */}
            <section className="bg-black pt-6 px-6">
                <ContactGloab />
            </section>

            {/* 🧠 About Section */}
            <section className=" px-6 font-inter bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
                        <div className="h-[450px]">
                            <img
                                src="/about.png"
                                alt="HelloBj team working"
                                className="w-full object-cover h-full transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:translate-x-4"
                            />

                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-7xl font-semibold text-[#582BF3] italic ml-[-120px] mb-12">
                                ABOUT US
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                HelloBj was founded on the principle that great digital products require both technical
                                excellence and creative vision. We bridge the gap between robust architecture and
                                pixel-perfect experiences. We empower startups and enterprises through clean code and strategic thinking
                                Our solutions go beyond UI to deliver complete product experiences
                                We never settle for "OK" - only work we're proud to put our name on
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🛠 Services Section */}
            <section className="bg-black py-24 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-semibold text-[#582BF3] mb-16">Hellobj Services</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[{ icon: <Globe size={48} />, title: 'Web Development', desc: 'Modern, secure, and scalable websites.' },
                        { icon: <Smartphone size={48} />, title: 'Mobile Development', desc: 'Native and cross-platform apps for Android & iOS.' },
                        { icon: <Paintbrush size={48} />, title: 'UI/UX Design', desc: 'Designs that balance beauty and usability.' },
                        { icon: <Headphones size={48} />, title: 'Support & Maintenance', desc: 'Reliable post-launch assistance & updates.' },
                        { icon: <Smartphone size={48} />, title: 'Consulting', desc: 'Strategic tech advice for digital growth.' },
                        { icon: <Settings2 size={48} />, title: 'Maintenance & Monitoring', desc: 'Proactive system monitoring and timely maintenance to ensure peak performance.' },
                        { icon: <ShieldCheck size={48} />, title: 'IT Consulting', desc: 'Expert guidance to align your technology strategy with business goals.' },
                        { icon: <Globe size={48} />, title: 'Cloud Services', desc: 'Deploy and scale using modern cloud platforms.' },
                        { icon: <Handshake size={48} />, title: 'Partnerships', desc: 'Collaborative solutions for mutual growth.' },
                        ].map(({ icon, title, desc }, i) => (
                            <div
                                key={i}
                                className="  p-8 min-h-[320px] border border-gray-700 hover:shadow-md transition flex flex-col items-center justify-center"
                            >
                                <div className="text-[#582BF3] mb-4">{icon}</div>
                                <h3 className="font-semibold text-2xl text-white mb-3">{title}</h3>
                                <p className="text-gray-300 text-lg">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 💡 Why Choose Us */}
            <section className="bg-black pb-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-semibold text-[#582BF3] mb-16">Why Choose Hellobj?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[{ title: 'Fast Delivery', desc: 'Speedy project completion without compromise' },
                        { title: 'Expert Team', desc: 'Highly skilled and dedicated professionals' },
                        { title: 'Growth-Oriented', desc: 'Focused on scaling your business' },
                        { title: 'Secure Solutions', desc: 'Top-tier data protection and security' },
                        { title: 'Transparent Process', desc: 'Clear and honest communication' },
                        { title: 'Global Reach', desc: 'Serving clients worldwide effectively' },
                        ].map((item, i) => {
                            const Icon = icons[i];
                            return (
                                <div
                                    key={i}
                                    className=" p-14 min-h-[320px] flex border border-gray-700 flex-col items-center"
                                >
                                    <Icon size={48} className="text-[#582BF3] mb-6" />
                                    <h3 className="font-semibold text-2xl text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300 text-lg max-w-xs">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 📊 Stats */}
            <Stats />

            {/* 💬 Testimonials */}
            <section className="bg-black py-24 px-6 text-center"> {/* Your original section background and padding */}
                <h2 className="text-5xl font-semibold text-[#582BF3] mb-14">What Our Clients Say</h2> {/* Your original title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        // Added rating to your existing data structure
                        { name: 'Alice Johnson', company: 'TechCorp Inc.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', feedback: 'HelloBj transformed our digital presence with a beautifully designed website that truly reflects our brand!', rating: 5 },
                        { name: 'Mark Stevenson', company: 'InnovateX', avatar: 'https://randomuser.me/api/portraits/men/46.jpg', feedback: 'Their team delivered fast, professional results and the ongoing support has been exceptional. ', rating: 4 },
                        { name: 'Sophia Lee', company: 'BrightFuture Ltd.', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', feedback: 'We were impressed by their expert knowledge and ability to bring our ideas to life seamlessly. ', rating: 5 },
                        { name: 'James Patel', company: 'Tech Innovations', avatar: 'https://randomuser.me/api/portraits/men/50.jpg', feedback: 'The project was handled with utmost professionalism and delivered ahead of schedule. ', rating: 5 },
                        { name: 'Emily Verma', company: 'NextGen Apps', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', feedback: 'Working with HelloBj was a smooth and creative experience — they truly understood our vision. ', rating: 5 },
                        { name: 'Rahul Mehta', company: 'GlobalEdge Solutions', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', feedback: 'Their commitment to quality and attention to detail is unmatched. Highly recommend HelloBj! ', rating: 4 },
                    ].map(({ name, company, avatar, feedback, rating }, i) => (
                        <div
                            key={i}
                            // Maintaining your original card base styles, adding new structural elements
                            className="p-8 border border-gray-700 shadow hover:shadow-md transition flex flex-col items-center relative overflow-hidden h-[270px] " // Added bg-gray-800 (example dark), rounded-lg, relative, overflow-hidden, h-full
                        >
                            {/* Decorative Quote Icon - Styled to be subtle on your existing card color */}
                            <div className="absolute  top-3 right-3 text-[5rem] font-bold text-white opacity-40 leading-none z-0"> {/* Adjusted size and opacity */}
                                ”
                            </div>

                            {/* Star Rating - Positioned above feedback */}
                            <div className="flex mb-4 z-10 self-start"> {/* self-start to align left like image */}
                                {[...Array(rating || 0)].map((_, starIndex) => ( // Default rating to 0 if not provided
                                    <svg key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"> {/* Slightly smaller stars */}
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
                                    </svg>
                                ))}
                                {[...Array(5 - (rating || 0))].map((_, starIndex) => (
                                    <svg key={`empty-${starIndex}`} className="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Feedback Text - Adjusted to be left-aligned and take available space */}
                            <p className="italic text-gray-300 mb-6 text-left flex-grow z-10 text-m"> {/* text-left, flex-grow, text-sm */}
                                "{feedback}"
                            </p>

                            {/* Author Info - Kept at the bottom, avatar and text layout adjusted */}
                            <div className="flex items-center w-full mt-auto z-10"> {/* w-full, new border color */}
                                <img
                                    src={avatar}
                                    alt={`${name} avatar`}
                                    className="w-10 h-10 rounded-full mr-3 object-cover shadow-sm" // Smaller avatar, adjusted margin
                                />
                                <div className="text-left"> {/* Ensure text aligns left */}
                                    <p className="font-semibold text-white text-s">{name}</p> {/* Adjusted font size */}
                                    {company && <p className="text-sm text-gray-400">{company}</p>} {/* Adjusted font size */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 📩 CTA */}
            <section className="bg-black py-24 px-6 font-inter">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-5xl font-semibold text-[#582BF3] mb-6 leading-tight">
                                Let's Build Your Next Big Idea !
                            </h1>
                            <div className="text-gray-300 text-lg space-y-1">
                                Ready to transform your business? We're here to help. Contact us today to explore how our SAP solutions, custom app development, and Opland ERP can elevate your operations. Let's discuss your goals and craft the perfect solutions for your success. Reach out now!
                            </div>
                        </div>

                        <form
                            action="https://formspree.io/f/yourFormID"
                            method="POST"
                            className="space-y-6  p-16 border border-gray-700"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-700 bg-black text-white focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-700 bg-black text-white focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-700 bg-black text-white focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message (optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-700 bg-black text-white focus:outline-none resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#582BF3] text-white font-semibold py-3 px-6 transition duration-200"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
