// import React from "react";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import Footer from "../components/Footer";

// const About = ({ showExtra = false }) => {
//   return (
//     <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden selection:bg-amber-500 selection:text-black">
      
//       {/* 🔶 Background Elements for Continuity */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none" 
//            style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
      
//       {/* Subtle Side Glow */}
//       <div className="absolute left-[-10%] top-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />

//       <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

//         {/* --- LEFT SIDE: IMAGE WITH DECORATION --- */}
//         <div className="w-full lg:w-1/2 relative">
//           {/* Decorative Square Frame */}
//           <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/50 hidden md:block" />
//           <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/50 hidden md:block" />
          
//           <div className="relative z-10 rounded-3xl overflow-hidden group">
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <img
//               src="https://i.pinimg.com/736x/54/95/3c/54953ccbea5b0d2072d5562b97ac9b86.jpg"
//               alt="About RB Hires"
//               className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
//             />
//           </div>

          
//         </div>

//         {/* --- RIGHT SIDE: CONTENT --- */}
//         <div className="w-full lg:w-1/2">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
//             <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
//             <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
//               Our Legacy
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] font-display">
//             Trusted <span className="text-amber-500">Recruitment</span> & <br /> 
//             Career Consulting Partner
//           </h2> 

//           <div className="space-y-6">
//             <p className="text-xl text-white/80 font-light leading-relaxed">
//               RB Hires Consulting is a professional recruitment firm 
//               dedicated to connecting <span className="text-white font-medium underline decoration-amber-500/40">skilled talent</span> with world-class opportunities.
//             </p>

//             <p className="text-white/80 leading-relaxed border-l-2 border-amber-500/30 pl-6 italic">
//               "Our approach focuses on understanding people, roles, and company culture — 
//               ensuring long-term success for both employers and job seekers."
//             </p>
//           </div>

//           {/* Feature List */}
//           <div className="grid grid-cols-2 gap-4 mt-10 mb-12">
//             {['Expert Vetting', 'Industry Insight', 'Global Reach', 'Culture Match'].map((item) => (
//               <div key={item} className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
//                 <span className="text-sm text-white/80 font-medium">{item}</span>
//               </div>
//             ))}
//           </div>

//           <button className="group relative flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-amber-500 transition-all duration-300 active:scale-95 shadow-xl shadow-white/5">
//             Learn More About Us
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>

//       </div>

//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }
//         .font-display { font-family: 'Space Grotesk', sans-serif; }
//       `}</style>
//      {showExtra && (
//   <div className="max-w-7xl mx-auto mt-20 md:mt-24">

//     {/* 🔶 Section Heading */}
//     <div className="text-center mb-14">
//       <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
//         OUR PURPOSE
//       </p>

//       <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
//         Mission & <span className="text-amber-500">Vision</span>
//       </h2>

//       <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
//         Guiding principles that define our values, goals, and commitment to excellence.
//       </p>
//     </div>

//     {/* 🔶 Mission Vision Grid */}
//     <div className="grid md:grid-cols-2 gap-10 mb-20">

//       {/* Mission */}
//       <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-500/40 transition duration-300">
//         <h3 className="text-2xl font-bold mb-4 text-amber-500">
//           Our Mission
//         </h3>
//         <p className="text-white/70 leading-relaxed">
//           Our mission is to connect talented professionals with the right
//           opportunities by delivering efficient, transparent, and
//           personalized recruitment solutions that create long-term value.
//         </p>
//       </div>

//       {/* Vision */}
//       <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-500/40 transition duration-300">
//         <h3 className="text-2xl font-bold mb-4 text-amber-500">
//           Our Vision
//         </h3>
//         <p className="text-white/70 leading-relaxed">
//           Our vision is to become a globally trusted recruitment partner,
//           helping businesses grow and individuals build meaningful careers
//           through strong and lasting connections.
//         </p>
//       </div>

//     </div>

//     {/* 🔶 TEAM SECTION */}
//     <div className="text-center mb-16">
//       <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
//         OUR TEAM
//       </p>

//       <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
//         Meet Our <span className="text-amber-500">Experts</span>
//       </h2>

//       <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
//         A team of dedicated professionals committed to delivering excellence.
//       </p>
//     </div>

//     {/* Team Grid */}
//    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

//   {[
//     {
//       name: "Bhargav Solanki",
//       role: "Founder",
//       img: "/bhargav.png",
//     },
//     {
//       name: "Jimit Parmar",
//       role: "Co-Founder",
//       img: "/jimit.png",
//     },
//     {
//       name: "Rahul Parmar",
//       role: "CEO",
//       img: "/rahul.png",
//     },
//     {
//       name: "Parth Solanki",
//       role: "HR Manager",
//       img: "/parth.png",
//     },
//   ].map((member, index) => (
//     <div
//       key={index}
//       className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition duration-300"
//     >
//       {/* Image */}
//       <div className="overflow-hidden">
//        <img
//   src={member.img}
//   alt={member.name}
//   className="w-full h-70 object-cover group-hover:scale-105 transition duration-500"
// />
//       </div>

//       {/* Content */}
//       <div className="p-4 text-center">
//         <h3 className="text-base font-semibold">{member.name}</h3>
//         <p className="text-amber-500 text-xs mt-1">{member.role}</p>
//         <div className="flex justify-center gap-3 mt-3">
    
//     {/* LinkedIn */}
//     <a
//       href="#"
//       className="w-8 h-8 flex items-center justify-center rounded-full border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition duration-300"
//     >
//       <FaLinkedinIn size={14} />
//     </a>

//     {/* Mail */}
//     <a
//       href="#"
//       className="w-8 h-8 flex items-center justify-center rounded-full border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition duration-300"
//     >
//       <FiMail size={14} />
//     </a>

//   </div>
//       </div>
//     </div>

    
//   ))}

// </div>
// {/* 🔶 TESTIMONIALS */}
// <div className="max-w-7xl mx-auto mt-24 md:mt-32 px-6">
//   {/* Heading */}
//   <div className="text-center mb-20">
//     <p className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 bg-amber-500/10 inline-block px-4 py-1 rounded-full border border-amber-500/20">
//       Testimonials
//     </p>

//     <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
//       What Our <span className="text-amber-500">Clients</span> Say
//     </h2>

//     <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full opacity-50"></div>

//     <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">
//       Hear from organizations who trust us to deliver exceptional talent and drive their business forward.
//     </p>
//   </div>

//   {/* Cards */}
//   <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//     {[
//       {
//         text: "The recruitment process was smooth and transparent. We received quality candidates perfectly aligned with our expectations.",
//         name: "Anita Verma",
//         role: "HR Director",
//       },
//       {
//         text: "Highly reliable recruitment partner. Their structured approach and dedication make them stand out in the industry.",
//         name: "Amit Patel",
//         role: "Tech Lead",
//       },
//       {
//         text: "Exceptional service and quick turnaround time. Truly a professional hiring consultancy for modern business.",
//         name: "Sneha Kulkarni",
//         role: "Operations Head",
//       },
//     ].map((item, index) => (
//       <div
//         key={index}
//         className="group relative bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]"
//       >
//         {/* Floating Quote Icon */}
//         <div className="absolute -top-4 -left-2 bg-amber-500 text-black w-10 h-10 flex items-center justify-center rounded-xl rotate-[-10deg] shadow-lg group-hover:rotate-0 transition-transform duration-300">
//           <span className="text-2xl font-serif">“</span>
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 italic font-light">
//             {item.text}
//           </p>

//           {/* Bottom Profile Section */}
//           <div className="flex items-center gap-4 border-t border-white/5 pt-6">
//             {/* Avatar Placeholder */}
//             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-black font-bold text-sm shadow-inner">
//               {item.name.charAt(0)}
//             </div>

//             <div className="flex flex-col">
//               <span className="text-white font-semibold text-base group-hover:text-amber-500 transition-colors">
//                 {item.name}
//               </span>
//               <span className="text-white-400/70 text-[11px] uppercase tracking-widest font-medium">
//                 {item.role}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Background Glow */}
//         <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-2xl"></div>
//       </div>
//     ))}
//   </div>
// </div>
// <Footer />
//   </div>

// )}


//     </section>
    
//   );
// };

// export default About;

import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../components/Footer";

const About = ({ showExtra = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* --- MAIN ABOUT SECTION --- */}
      <section className="relative text-white py-24 px-6 md:px-20 overflow-hidden selection:bg-amber-500 selection:text-black">
        
        {/* 🔶 Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
        
        <div className="absolute left-[-10%] top-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/50 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/50 hidden md:block" />
            
            <div className="relative z-10 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://i.pinimg.com/736x/54/95/3c/54953ccbea5b0d2072d5562b97ac9b86.jpg"
                alt="About RB Hires"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">Our Legacy</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] font-display">
              Trusted <span className="text-amber-500">Recruitment</span> & <br /> 
              Career Consulting Partner
            </h2> 

            <div className="space-y-6">
              <p className="text-xl text-white/80 font-light leading-relaxed">
                RB Hires Consulting is a professional recruitment firm 
                dedicated to connecting <span className="text-white font-medium underline decoration-amber-500/40">skilled talent</span> with world-class opportunities.
              </p>
              <p className="text-white/80 leading-relaxed border-l-2 border-amber-500/30 pl-6 italic">
                "Our approach focuses on understanding people, roles, and company culture."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 mb-12">
              {['Expert Vetting', 'Industry Insight', 'Global Reach', 'Culture Match'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-sm text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="group relative flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-amber-500 transition-all duration-300 active:scale-95 shadow-xl shadow-white/5">
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- 🔶 CONDITIONAL CONTENT (Mission, Team, Testimonials) --- */}
        {showExtra && (
          <div className="max-w-7xl mx-auto mt-20 md:mt-24">
            <div className="text-center mb-14">
              <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3">OUR PURPOSE</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Mission & <span className="text-amber-500">Vision</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-20">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">Our mission is to connect talented professionals with the right opportunities.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">Our vision is to become a globally trusted recruitment partner.</p>
              </div>
            </div>

            {/* TEAM SECTION */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Meet Our <span className="text-amber-500">Experts</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24">
              {[
                { name: "Bhargav Solanki", role: "Founder", img: "/bhargav.png" },
                { name: "Jimit Parmar", role: "Co-Founder", img: "/jimit.png" },
                { name: "Rahul Parmar", role: "CEO", img: "/rahul.png" },
                { name: "Parth Solanki", role: "HR Manager", img: "/parth.png" },
              ].map((member, index) => (
                <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-70 object-cover" />
                  <div className="p-4 text-center">
                    <h3 className="text-base font-semibold">{member.name}</h3>
                    <p className="text-amber-500 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TESTIMONIALS */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
               {/* ... (તમારો ટેસ્ટિમોનિયલ કોડ અહીં મૂકો) ... */}
            </div>
          </div>
        )}
      </section>

      {/* --- 🔶 FOOTER: PROPERLY SET --- */}
      {/* Home page પર ડબલ ફૂટર ન આવે તે માટે logic: 
          જો showExtra true હોય (એટલે કે આ મેઈન About Page છે), તો જ ફૂટર બતાવશે.
          Home page પર જ્યારે તમે About વાપરશો ત્યારે showExtra=false હશે એટલે ત્યાં ફૂટર નહીં દેખાય. */}
      {showExtra && <Footer />}

      <style jsx>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
};

export default About;