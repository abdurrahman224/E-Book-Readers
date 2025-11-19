

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Login from "../Login/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(); // Mobile menu

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/listedBooks", label: "Listed Books" },
    { path: "/PagestoRead", label: "Pages to Read" },
  ];

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-[#23BE0A] focus:outline-none focus:ring-2 focus:ring-[#23BE0A] rounded-md p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link
              to="/"
              className="text-sm md:text-2xl font-bold text-gray-800 hover:text-[#23BE0A] transition"
            >
              E-Book Readers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2 ">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-xl  font-medium transition  ${
                    isActive
                      ? "text-[#23BE0A] font-bold"
                      : "text-gray-700 hover:text-[#23BE0A] hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div >
            <Login ></Login>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md text-base font-medium transition ${
                    isActive
                      ? "text-[#23BE0A] font-bold bg-gray-50"
                      : "text-gray-700 hover:text-[#23BE0A] hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
