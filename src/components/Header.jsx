import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const gold = "#c9a227";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Refer & Earn", path: "/refer" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* LOGO */}
      <img
  src="../public/logo.png"
  alt="RB Hires Consulting"
  className="h-10 md:h-12 w-auto object-contain"
/>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`relative transition duration-300 hover:text-[${gold}] ${
                isActive(item.path) ? `text-[${gold}] font-semibold` : ""
              }`}
            >
              {item.name}

              {/* active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                  isActive(item.path) ? "w-full" : "w-0"
                }`}
                style={{ backgroundColor: gold }}
              />
            </Link>
          ))}
        </nav>

        {/* APPLY BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/job"
            className="text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
            style={{ backgroundColor: gold }}
          >
            Apply Job
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4">

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 px-3 rounded-md transition ${
                isActive(item.path)
                  ? "text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={isActive(item.path) ? { backgroundColor: gold } : {}}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/job"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-white text-center py-2 rounded-lg hover:opacity-90"
            style={{ backgroundColor: gold }}
          >
            Apply Job
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;