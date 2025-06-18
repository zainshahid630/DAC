import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white px-6 sm:px-24 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/8fdelrvc_expires_30_days.png"
        alt="Logo"
        className="w-20 h-auto object-contain"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-base font-medium">
        {navItems.map(({ name, path }) => (
          <button
            key={name}
            onClick={() => navigate(path)}
            className={`hover:underline ${
              isActive(path) ? "text-[#F9995D] font-bold" : "text-[#14161E]"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col items-start px-6 py-4 space-y-3 md:hidden">
          {navItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => {
                navigate(path);
                setMenuOpen(false);
              }}
              className={`w-full text-left ${
                isActive(path) ? "text-[#F9995D] font-bold" : "text-[#14161E]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};