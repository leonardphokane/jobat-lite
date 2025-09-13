import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/bias', label: 'Bias Scoring' },
    { path: '/updates', label: 'Recruiter Updates' },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold tracking-wide">Jobat Lite</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? 'text-yellow-400 font-semibold' : 'text-white'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Optional Avatar */}
      <div className="hidden md:block ml-4">
        <img
          src="/assets/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-2 border-yellow-400"
        />
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-yellow-400"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white p-4 md:hidden z-50">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block py-2 hover:text-yellow-400 ${
                  isActive ? 'text-yellow-400 font-semibold' : 'text-white'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
