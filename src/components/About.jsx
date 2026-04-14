import React from "react";

const About = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden selection:bg-amber-500 selection:text-black">
      
      {/* 🔶 Background Elements for Continuity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
      
      {/* Subtle Side Glow */}
      <div className="absolute left-[-10%] top-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* --- LEFT SIDE: IMAGE WITH DECORATION --- */}
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative Square Frame */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/50 hidden md:block" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/50 hidden md:block" />
          
          <div className="relative z-10 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
              alt="About RB Hires"
              className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>

          
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
              Our Legacy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] font-display">
            Trusted <span className="text-amber-500">Recruitment</span> & <br /> 
            Career Consulting Partner
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              RB Hires Consulting is a professional recruitment firm 
              dedicated to connecting <span className="text-white font-medium underline decoration-amber-500/40">skilled talent</span> with world-class opportunities.
            </p>

            <p className="text-gray-400 leading-relaxed border-l-2 border-amber-500/30 pl-6 italic">
              "Our approach focuses on understanding people, roles, and company culture — 
              ensuring long-term success for both employers and job seekers."
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-2 gap-4 mt-10 mb-12">
            {['Expert Vetting', 'Industry Insight', 'Global Reach', 'Culture Match'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-sm text-gray-300 font-medium">{item}</span>
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

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </section>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <section className="relative bg-[#0f0f0f] text-white py-24 px-6 md:px-20 overflow-hidden">
      
//       {/* 🌑 Subtle Background Textures */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-500/10 rounded-full blur-[100px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

//         {/* Left Side: Modern Image Layout */}
//         <div className="w-full md:w-1/2 relative">
//           {/* Decorative Back-frame */}
//           <div className="absolute -top-4 -left-4 w-full h-full border border-orange-500/30 rounded-2xl hidden md:block" />
          
//           <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-500">
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               alt="About RB Hires"
//               className="w-full h-[450px] object-cover"
//             />
//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
//           </div>

//           {/* Experience Card */}
//           <div className="absolute -bottom-8 -left-8 bg-orange-500 p-8 rounded-2xl shadow-2xl hidden lg:block">
//             <h3 className="text-black font-black text-4xl leading-none">RB</h3>
//             <p className="text-black text-xs font-bold uppercase tracking-widest mt-1">Consulting</p>
//           </div>
//         </div>

//         {/* Right Side Content */}
//         <div className="w-full md:w-1/2 space-y-8">
          
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <div className="h-[2px] w-12 bg-orange-500" />
//               <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-bold">
//                 Professional Expertise
//               </span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//               Crafting Excellence in <br />
//               <span className="text-orange-500">Talent Acquisition</span>
//             </h2>
//           </div>

//           <div className="space-y-6">
//             <p className="text-stone-300 text-lg leading-relaxed">
//               RB Hires Consulting is a professional recruitment and consultancy firm
//               dedicated to connecting skilled talent with the right opportunities.
//             </p>

//             <div className="p-6 bg-stone-900/50 border-l-4 border-orange-500 rounded-r-xl">
//               <p className="text-stone-400 italic leading-relaxed">
//                 "Our approach focuses on understanding people, roles, and company culture —
//                 ensuring long-term success for both employers and job seekers."
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-6 pt-4">
//             <button className="px-10 py-4 bg-orange-500 text-black font-bold rounded-xl hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/20">
//               Our Services
//             </button>
//             <button className="px-10 py-4 border border-stone-700 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300">
//               Get in Touch
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <section className="relative bg-[#FCFBFA] text-[#1a1a1a] py-24 px-6 md:px-20 overflow-hidden font-sans">
      
//       {/* ✨ Subtle Gold Accents in Background */}
//       <div className="absolute inset-0 pointer-events-none opacity-40">
//         <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C5A028]/10 rounded-full blur-[100px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

//         {/* Left Side: Elegant Image Frame */}
//         <div className="w-full md:w-1/2 relative group">
//           {/* Gold Outline Frame */}
//           <div className="absolute -top-5 -left-5 w-40 h-40 border-t-2 border-l-2 border-[#C5A028] hidden md:block" />
//           <div className="absolute -bottom-5 -right-5 w-40 h-40 border-b-2 border-r-2 border-[#C5A028] hidden md:block" />
          
//           <div className="relative rounded-sm overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-stone-100">
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               alt="About RB Hires"
//               className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
//             />
//             {/* Soft Light Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
//           </div>

//           {/* Floating Year Badge */}
//           <div className="absolute bottom-10 -left-10 bg-white border border-stone-100 p-8 shadow-2xl hidden lg:block">
//             <h3 className="text-[#C5A028] font-serif text-5xl leading-none italic">RB</h3>
//             <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">Consultancy</p>
//           </div>
//         </div>

//         {/* Right Side Content */}
//         <div className="w-full md:w-1/2 space-y-10">
          
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <span className="h-[1px] w-10 bg-[#C5A028]" />
//               <span className="text-[#C5A028] uppercase tracking-[0.4em] text-[11px] font-bold">
//                 Established Excellence
//               </span>
//             </div>
            
//             <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] leading-tight">
//               A Legacy of <br />
//               <span className="text-[#C5A028] italic">Strategic Hiring</span>
//             </h2>
//           </div>

//           <div className="space-y-6">
//             <p className="text-stone-600 text-lg leading-relaxed font-light">
//               RB Hires Consulting is a professional recruitment and consultancy firm
//               dedicated to connecting skilled talent with the right opportunities.
//             </p>

//             <div className="relative p-8 bg-white border border-stone-100 rounded-sm shadow-sm">
//               <span className="absolute top-4 left-4 text-4xl text-[#C5A028]/20 font-serif">“</span>
//               <p className="text-stone-500 italic leading-relaxed relative z-10 pl-4">
//                 Our approach focuses on understanding people, roles, and company culture —
//                 ensuring long-term success for both employers and job seekers.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-8 pt-4 items-center">
//             <button className="px-12 py-4 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest font-bold hover:bg-[#C5A028] transition-all duration-500 shadow-xl shadow-stone-200">
//               Discover More
//             </button>
//             <button className="text-[#1a1a1a] text-sm uppercase tracking-widest font-bold border-b border-[#C5A028] pb-1 hover:text-[#C5A028] transition-colors">
//               Our Vision
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;