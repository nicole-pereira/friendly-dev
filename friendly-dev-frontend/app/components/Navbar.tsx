import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "transition hover:text-orange-400";
  const active = "text-orange-400 font-semibold";

  return (
    <nav className="bg-orange-200 border-b border-orange-300 shadow-xs sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-orange-400">
          <FaLaptopCode className="text-orange-400 text-xl" />
          <span>The Friendly Developer</span>
        </NavLink>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-white">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects">
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/blog">
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about">
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact">
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-orange-400 text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-orange-200 border-t border-orange-400 px-6 py-4 space-y-2 space-x-4 text-center">
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
            to="/projects">
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
            to="/blog">
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
            to="/about">
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
            to="/contact">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
