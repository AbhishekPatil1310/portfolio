import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-4 left-4 right-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-blue-700">MyPortfolio</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-gray-800 hover:text-blue-600 transition font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-blue-700 focus:outline-none">
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  className="block text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
