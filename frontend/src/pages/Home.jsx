import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Paintbrush, Headphones } from 'lucide-react';

import Stats from '../components/Stats';
import {
    Zap, Users, TrendingUp, ShieldCheck, Handshake,
    Settings2,
} from 'lucide-react';

const Home = () => {
    const icons = [Zap, Users, TrendingUp, ShieldCheck, Handshake, Globe, ShieldCheck,
        Settings2,];
    return (
        <div className="font-inter text-gray-800 bg-[#FAFAFA]">

            {/* 🚀 Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28 px-6 text-center overflow-hidden">
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold italic text-blue-900 mb-6 leading-tight">
                        We Build Smart Digital Solutions
                    </h1>
                    <p className="text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                        Helping businesses thrive with technology, design & strategy.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link
                            to="/contact"
                            className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium "
                        >
                            Let&apos;s Talk
                        </Link>

                    </div>
                </div>
            </section>

            {/* 🧠 About Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-md p-10">
                    <img
                        src="/logo.svg"
                        alt="About HelloBj"
                        className="w-64 h-64 object-contain mx-auto"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Hellobj</h2>
                        <p className="text-gray-700 mb-4">
                            HelloBj is a forward-thinking technology company delivering innovative and scalable software solutions.
                        </p>
                        <p className="text-gray-700">
                            We empower organizations through robust code, engaging design, and reliable support.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🛠 Services Section */}
            <section className="bg-white py-24 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-semibold text-[#1C398E] mb-16">Hellobj Services</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: <Globe size={48} />, title: 'Web Development', desc: 'Modern, secure, and scalable websites.' },
                            { icon: <Smartphone size={48} />, title: 'Mobile Development', desc: 'Native and cross-platform apps for Android & iOS.' },
                            { icon: <Paintbrush size={48} />, title: 'UI/UX Design', desc: 'Designs that balance beauty and usability.' },
                            { icon: <Headphones size={48} />, title: 'Support & Maintenance', desc: 'Reliable post-launch assistance & updates.' },
                            { icon: <Smartphone size={48} />, title: 'Consulting', desc: 'Strategic tech advice for digital growth.' },
                            {
                                icon: <Settings2 size={48} className="text-[#1C398E] mb-4" />,
                                title: 'Maintenance & Monitoring',
                                desc: 'Proactive system monitoring and timely maintenance to ensure peak performance.',
                            },
                            {
                                icon: <ShieldCheck size={48} className="text-[#1C398E] mb-4" />,
                                title: 'IT Consulting',
                                desc: 'Expert guidance to align your technology strategy with business goals.',
                            },
                            { icon: <Globe size={48} />, title: 'Cloud Services', desc: 'Deploy and scale using modern cloud platforms.' },
                            { icon: <Handshake size={48} />, title: 'Partnerships', desc: 'Collaborative solutions for mutual growth.' },
                        ].map(({ icon, title, desc }, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-8 min-h-[320px]  border border-gray-100  hover:shadow-md transition flex flex-col items-center justify-center"
                            >
                                <div className="text-[#1C398E] mb-4">{icon}</div>
                                <h3 className="font-semibold text-2xl text-blue-900 mb-3">{title}</h3>
                                <p className="text-gray-800 text-lg">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 💡 Why Choose Us */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-semibold text-[#1C398E] mb-16">Why Choose Hellobj?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            { title: 'Fast Delivery', desc: 'Speedy project completion without compromise' },
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
                                    className="bg-white p-14 min-h-[320px] flex border border-gray-100 flex-col items-center"
                                >
                                    <Icon size={48} className="text-[#1C398E] mb-6" />
                                    <h3 className="font-semibold text-2xl text-blue-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-800 text-lg max-w-xs">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* 📊 Stats */}
            <Stats />

            {/* 💬 Testimonials */}
            <section className="bg-white py-24 px-6 text-center">
                <h2 className="text-5xl font-semibold text-[#1C398E] mb-14">What Our Clients Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        {
                            name: 'Alice Johnson',
                            company: 'TechCorp Inc.',
                            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                            feedback: 'HelloBj transformed our digital presence with a beautifully designed website that truly reflects our brand.'
                        },
                        {
                            name: 'Mark Stevenson',
                            company: 'InnovateX',
                            avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
                            feedback: 'Their team delivered fast, professional results and the ongoing support has been exceptional.'
                        },
                        {
                            name: 'Sophia Lee',
                            company: 'BrightFuture Ltd.',
                            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
                            feedback: 'We were impressed by their expert knowledge and ability to bring our ideas to life seamlessly.'
                        },
                        {
                            name: 'James Patel',
                            company: '',
                            avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
                            feedback: 'The project was handled with utmost professionalism and delivered ahead of schedule.'
                        },
                        {
                            name: 'Emily Verma',
                            company: 'NextGen Apps',
                            avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
                            feedback: 'Working with HelloBj was a smooth and creative experience — they truly understood our vision.'
                        },
                        {
                            name: 'Rahul Mehta',
                            company: 'GlobalEdge Solutions',
                            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                            feedback: 'Their commitment to quality and attention to detail is unmatched. Highly recommend HelloBj!'
                        },
                    ].map(({ name, company, avatar, feedback }, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 p-6  border border-gray-100 shadow hover:shadow-md transition flex flex-col items-center"
                        >
                            <img
                                src={avatar}
                                alt={`${name} avatar`}
                                className="w-20 h-20 rounded-full mb-4 object-cover shadow-sm"
                            />
                            <p className="italic text-gray-700 mb-6">"{feedback}"</p>
                            <p className="font-semibold text-gray-900">{name}</p>
                            {company && <p className="text-sm text-gray-500">{company}</p>}
                        </div>
                    ))}
                </div>
            </section>


            {/* 📩 CTA */}
            <section className="bg-[#FAFAFA] py-24 px-6 font-inter">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Left Section – Contact Info */}
                        <div className="flex flex-col justify-center">
                            <h1 className="text-5xl font-semibold text-[#1C398E] mb-6 leading-tight">
                                Let's Build Your Next Big Idea!
                            </h1>
                            <div className="text-gray-700 text-lg space-y-1 ">
                                Ready to transform your business? We're here to help. Contact us today to explore how our SAP solutions, custom app development, and Opland ERP can elevate your operations. Let's discuss your goals and craft the perfect solutions for your success. Reach out now!
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


        </div>
    );
};

export default Home;
