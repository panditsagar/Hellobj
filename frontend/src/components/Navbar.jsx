import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black shadow-[0_0_15px_rgba(88,43,243,0.5)]">
      <div className="container mx-auto px-16 py-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-[#582BF3] flex items-center gap-2 drop-shadow-[0_0_6px_rgba(88,43,243,0.7)] hover:drop-shadow-[0_0_12px_rgba(88,43,243,0.9)] "
        >
          <span className="hidden md:inline italic text-4xl  ">Hellobj</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition font-medium px-6 py-2 rounded text-lg
  ${location.pathname === link.path
                  ? 'border border-[#582BF3] text-[#582BF3] bg-black/80 shadow-[0_0_8px_rgba(88,43,243,0.4)]'
                  : 'text-gray-300 '
                }
`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#582BF3] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur px-6 pb-6 overflow-hidden transition-max-height duration-300 ease-in-out ${menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`block py-3 font-medium text-lg rounded-md
              ${location.pathname === link.path
                ? 'text-[#582BF3] font-semibold'
                : 'text-gray-300 hover:text-[#8e6ff1] hover:drop-shadow-[0_0_8px_rgba(88,43,243,0.7)]'
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
