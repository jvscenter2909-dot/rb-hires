import React from "react";
import { MapPin, Phone, Mail,ChevronUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 relative z-10">

        {/* LOGO */}
        <div className="space-y-6">
          <div className="bg-white p-2 inline-block rounded-md">
            <img
              src="/public/logo.png"
              alt="RB Hires Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            RB Hires is a professional recruitment and consulting firm helping
            organizations hire the right talent and build successful teams.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-5 border-b border-yellow-500/30 pb-2">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {["Home", "About Us", "Services", "Jobs", "Gallery", "Contact"].map((link) => (
              <li key={link} className="hover:text-yellow-500 cursor-pointer flex gap-2">
                <span className="text-yellow-500">›</span> {link}
              </li>
            ))}
          </ul>
        </div>

        {/* JOB ROLES */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-5 border-b border-yellow-500/30 pb-2">
            Job Roles
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {["IT & Software", "Sales & Marketing", "HR", "Finance", "Operations"].map((role) => (
              <li key={role} className="hover:text-yellow-500 cursor-pointer flex gap-2">
                <span className="text-yellow-500">›</span> {role}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="relative">

          <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />

          <h3 className="text-yellow-500 font-bold text-lg mb-5 border-b border-yellow-500/30 pb-2">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-300">

            <div className="flex gap-3">
              <MapPin className="text-yellow-500" size={18} />
              <p>Mehsana, India</p>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-yellow-500" size={18} />
              <p>Dover DE, USA</p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-yellow-500" size={18} />
              <p>+1 9094020265</p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-yellow-500" size={18} />
              <p>info@rbhiresconsultllc.com</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">

            {[
              { Icon: FaFacebookF },
              { Icon: FaInstagram },
              { Icon: FaTwitter },
              { Icon: FaLinkedinIn },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 bg-yellow-500 text-black flex items-center justify-center rounded-full hover:bg-yellow-400 hover:scale-110 transition"
              >
                <item.Icon size={16} />
              </a>
            ))}

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">

        <p className="text-gray-500 text-xs">
          © 2026 RB Hires. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="bg-yellow-500 p-3 rounded-lg text-black hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20"
        >
          <ChevronUp size={22} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;