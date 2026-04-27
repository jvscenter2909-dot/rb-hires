import React from "react";
import { Phone, Mail, Share2 } from "lucide-react";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

/* ✅ Testimonials (FIXED - missing issue solved) */
const testimonials = [
  {
    name: "Priya Nair",
    role: "Logistics Manager",
    image: "/assets/21.jpg",
    quote:
      "Warehouse insurance policy lene ka process simple aur transparent tha. Navlakha Insurance ne best plan recommend kiya.",
  },
  {
    name: "Arjun Verma",
    role: "Entrepreneur",
    image: "/assets/24.jpg",
    quote:
      "Transit insurance ke liye quick aur hassle-free service mili. Truly reliable team!",
  },
  {
    name: "Shreya Mehta",
    role: "Teacher",
    image: "/assets/31.jpg",
    quote:
      "Health insurance select karva ma bahu saras guidance mali. Smooth experience.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col w-full">

      {/* ===================== SECTION 1 ===================== */}
      <section className="py-16 md:py-24 bg-[#fdfaf2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="relative group">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-7.png"
                  alt="Minaxi Navlakha"
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#76b543]/20 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                Navlakha <span className="text-[#76b543]">Insurance Services</span>
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
                <p>
                  <b className="text-[#003366]">Navlakha Insurance Services</b> trusted insurance solutions provide kare chhe.
                </p>
                <p>
                  <b>Founded by Miss Minaxi Navlakha</b>, with 10+ years experience.
                </p>
                <p>
                  Health, Motor, Travel, Property, Fire, Transit badha insurance cover.
                </p>
                <p>
                  Mission: customers ne financial protection aapvu.
                </p>
              </div>

              <a
                href="tel:+918320291588"
                className="inline-flex items-center gap-3 bg-[#003366] text-white px-8 py-4 rounded-md font-bold hover:bg-[#002244] transition shadow-lg border-l-4 border-[#76b543]"
              >
                <Phone size={20} />
                Call Minaxi Navlakha
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 ===================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a9ab0]">
              Our Valued Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-[4/5] overflow-hidden rounded-full shadow-xl border-4 border-gray-50">
                  <img
                    src="https://navlakhainsurance.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-30-at-4.05.16-PM.jpeg"
                    alt="Paresh Navlakha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-extrabold">Paresh Navlakha</h3>
                <p className="text-[#76b543] font-bold uppercase text-sm">
                  Director
                </p>
              </div>

              <p className="text-gray-800 leading-relaxed text-[15px]">
                Paresh Navlakha manages insurance operations, claims, and partnerships with top companies like HDFC, ICICI, SBI, Bajaj Allianz.
              </p>

              <div className="border-t pt-6 space-y-3 text-gray-700">
                <p><b>Email:</b> paresh@navlakhainsurance.in</p>
                <p><b>Phone:</b> +91-9316309866</p>
              </div>

              <button className="p-3 bg-gray-100 rounded-full text-[#76b543] hover:bg-[#76b543] hover:text-white transition">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <TestimonialsSection testimonials={testimonials} />
      </section>

<Footer/>
    </div>
  );
};

export default About;