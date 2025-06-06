import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Paintbrush, Headphones } from 'lucide-react';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
            {/* Hero Section */}
            <section className="bg-[#E0EDFF] text-gray-900 py-28 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 border-b-4 border-blue-600 inline-block pb-2">
                        We Build Smart Digital Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto">
                        HelloBj helps startups and businesses grow with top-notch tech solutions tailored for success.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </section>


            {/* About Section */}
            <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left ml-28">
                    <img
                        src="/logo.svg"
                        alt="About HelloBj"
                        className="w-64 h-64 mx-auto md:mx-0 rounded-xl  transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-extrabold mb-6 text-blue-900">About HelloBj</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                        HelloBj is a forward-thinking technology company delivering innovative and scalable software solutions.
                        We partner with startups and enterprises to deliver user-centered, data-driven products.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our mission is to empower organizations through robust code, engaging design, and reliable support.
                        We transform ideas into functional, stunning digital products.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold mb-14 text-blue-900">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                icon: <Globe className="w-12 h-12 text-blue-600 mx-auto mb-5" />,
                                title: 'Web Development',
                                text: 'Modern, secure, and scalable websites with performance in mind.',
                            },
                            {
                                icon: <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-5" />,
                                title: 'Mobile Development',
                                text: 'Native and cross-platform mobile apps for seamless user experience.',
                            },
                            {
                                icon: <Paintbrush className="w-12 h-12 text-blue-600 mx-auto mb-5" />,
                                title: 'UI/UX Design',
                                text: 'Human-centered, intuitive designs and smooth interactions.',
                            },
                            {
                                icon: <Headphones className="w-12 h-12 text-blue-600 mx-auto mb-5" />,
                                title: 'Support & Maintenance',
                                text: 'Ongoing support, updates, and iterative improvements.',
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                {service.icon}
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 text-base">{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 text-center bg-gradient-to-tr from-blue-50 to-blue-100">
                <h2 className="text-4xl font-extrabold mb-14 text-blue-900">Why Choose HelloBj?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {[
                        { icon: '⚡', title: 'Fast Delivery' },
                        { icon: '👩‍💻', title: 'Expert Team' },
                        { icon: '📈', title: 'Growth-Oriented' },
                        { icon: '🔒', title: 'Secure Solutions' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="text-5xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technologies */}
            <section className="bg-white py-24 px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Technologies We Use</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        'React',
                        'Next.js',
                        'Tailwind CSS',
                        'Node.js',
                        'MongoDB',
                        'Firebase',
                        'Figma',
                        'Express.js',
                    ].map((tech, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 hover:bg-blue-200 text-gray-800 hover:text-blue-700 px-8 py-4 rounded-full text-sm font-semibold shadow-md cursor-default transition-colors duration-300"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-blue-50 py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-14">
                        Our Impact
                    </h2>
                    <div className="bg-blue-100 rounded-3xl p-14 text-center grid grid-cols-2 sm:grid-cols-4 gap-10 shadow-inner">
                        {[
                            { label: 'Projects Delivered', value: '120+' },
                            { label: 'Satisfied Clients', value: '90+' },
                            { label: 'Tech Experts', value: '20+' },
                            { label: 'Years of Experience', value: '4+' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <p className="text-4xl font-extrabold text-blue-900">{stat.value}</p>
                                <p className="text-blue-800 mt-2 tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-24 text-center px-6">
                <h2 className="text-4xl font-extrabold mb-16 text-gray-900">What Our Clients Say</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <p className="italic text-gray-700 mb-6 leading-relaxed text-lg">
                                "HelloBj delivered beyond expectations with a top-tier team, clear communication, and brilliant design."
                            </p>
                            <p className="font-semibold text-gray-900">— Client {i + 1}, Role</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call To Action */}
            <section className="bg-[#DBEAFE] py-24 text-black text-center px-6 relative overflow-hidden">
                <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg text-[#1447E6]">Let&apos;s Build Your Next Big Idea</h2>
                <p className="text-lg mb-10 max-w-xl mx-auto drop-shadow-md">
                    Get in touch with our experts to bring your vision to life.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-blue-700 text-white font-semibold px-12 py-4 rounded-full hover:bg-gray-100 shadow-lg transition duration-300"
                >
                    Contact Us
                </Link>
                {/* Background glow */}
             </section>
        </div>
    );
};

export default Home;
