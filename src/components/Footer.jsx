import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] pt-0">
      {/* 1. TOP BANNER SECTION */}
      <div className="bg-[#e9f2ff] py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] leading-tight">
              Join India’s <span className="text-[#76b543]">Largest Advisor Network</span>
            </h2>
            <button className="bg-[#003366] text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition shadow-lg">
              Request a Callback
            </button>
          </div>
          {/* Banner Illustration Placeholder */}
          <div className="hidden md:block">
            <img 
              src="/assets/footer.png" // Replace with your image path
              alt="Advisor illustration" 
              className="w-64 h-auto" 
            />
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER LINKS SECTION */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* LOGO & ABOUT */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-[#76b543]">
          <img  src="/assets/logo.png" alt="Navlakha Logo" className="h-16 mb-6" />
          <p className="text-[#003366] text-[15px] leading-relaxed font-medium mb-6">
            At NAVLAKHA INSURANCE SERVICES, we believe in safeguarding what matters most to you — your health, your life, and your valuable assets.
          </p>
          <div>
            <h4 className="font-bold text-[#003366] mb-4">Follow up</h4>
            <div className="flex gap-4">
              <FaFacebookF className="cursor-pointer hover:text-[#76b543]" />
              <FaTwitter className="cursor-pointer hover:text-[#76b543]" />
              <FaInstagram className="cursor-pointer hover:text-[#76b543]" />
              <FaYoutube className="cursor-pointer hover:text-[#76b543]" />
            </div>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-[#003366] font-bold text-xl mb-6">Explore</h3>
          <ul className="space-y-4 text-gray-700">
            {["About Us", "Photo Gallery", "Blog", "Contact", "Terms & Conditions"].map((item) => (
              <li key={item} className="border-b border-gray-300 pb-2 hover:text-[#76b543] transition">
                <Link to="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-[#003366] font-bold text-xl mb-6">Products</h3>
          <ul className="space-y-4 text-gray-700">
            {["Health Insurance", "Motor Insurance", "Liability Insurance", "Travel Insurance", "Property Insurance", "Fire Insurance"].map((item) => (
              <li key={item} className="border-b border-gray-300 pb-2 hover:text-[#76b543] transition">
                <Link to="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-[#003366] font-bold text-xl mb-6">Contact Info</h3>
          <div className="space-y-6 text-[#003366]">
            <div>
              <p className="font-bold">Head office :-</p>
              <p className="text-sm leading-relaxed mt-1">
                A-604, 6th Floor, Block-A, Bijal Business Center, Nr. Pooja Avenue, Opp. Shyam Icon, Aslali Circle Ring Road, Aslali, Ahmedabad-382427
              </p>
            </div>
            
            <div className="space-y-2 text-sm border-t border-gray-300 pt-4">
              <p><span className="font-bold">Email :-</span> minaxi@navlakhainsurance.in</p>
              <p><span className="font-bold">Email :-</span> info@navlakhainsurance.in</p>
            </div>

            <div className="space-y-2 text-sm border-t border-gray-300 pt-4 font-medium">
              <p className="font-bold">Minaxi Navlakha Phone No.:-</p>
              <p>+91 8320291588, +91 6355977758</p>
            </div>

            <div className="space-y-2 text-sm border-t border-gray-300 pt-4">
              <p className="font-bold">Paresh Navlakha Phone No :-</p>
              <p>+91 9316309866</p>
            </div>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;