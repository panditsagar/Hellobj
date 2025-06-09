import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Sticky navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur bg-black/90 shadow-[0_0_15px_rgba(88,43,243,0.5)]' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold italic text-[#582BF3] flex items-center gap-2 drop-shadow-[0_0_6px_rgba(88,43,243,0.7)] hover:drop-shadow-[0_0_12px_rgba(88,43,243,0.9)]">
          Hellobj
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg px-4 py-2 rounded-md transition-all duration-200 font-medium
                ${location.pathname === link.path
                  ? 'text-[#582BF3]'
                  : 'text-gray-300 hover:text-[#8e6ff1]'
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-[#582BF3] rounded-full animate-slide-in" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#582BF3] hover:scale-110 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-black/90 backdrop-blur-sm
        ${menuOpen ? 'max-h-96 px-6 pb-4' : 'max-h-0 px-6 pb-0'}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`block py-3 text-base rounded font-medium relative
              ${location.pathname === link.path
                ? 'text-[#582BF3] font-semibold'
                : 'text-gray-300 hover:text-[#8e6ff1]'
              }`}
          >
            {link.name}
            {location.pathname === link.path && (
              <span className="absolute left-0 bottom-1 h-[2px] w-2/3 bg-[#582BF3] rounded-full animate-slide-in" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;