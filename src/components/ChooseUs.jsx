// import React from "react";

// const points = [
//   {
//     number: "01",
//     title: "Industry Expertise",
//     desc: "Years of experience across multiple industries helping businesses hire the right talent.",
//   },
//   {
//     number: "02",
//     title: "Quality-Focused Hiring",
//     desc: "We focus on long-term value, not just quick placements.",
//   },
//   {
//     number: "03",
//     title: "Tailored Recruitment",
//     desc: "Every hiring strategy is customized to your business goals and culture.",
//   },
//   {
//     number: "04",
//     title: "Fast & Reliable Process",
//     desc: "Optimized recruitment workflows that save time and improve efficiency.",
//   },
//   {
//     number: "05",
//     title: "Trusted Partnerships",
//     desc: "Built on transparency, integrity, and consistent delivery.",
//   },
//   {
//     number: "06",
//     title: "End-to-End Support",
//     desc: "Complete hiring assistance from sourcing to onboarding.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="relative bg-black text-white py-20 px-6 md:px-20 overflow-hidden">

//       {/* 🔶 Gold Glow Background */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

//         {/* 🔹 LEFT SIDE (Steps) */}
//         <div className="w-full lg:w-1/2 space-y-6">

//           <h2 className="text-3xl md:text-4xl font-bold">
//             WHY CHOOSE US
//           </h2>

//           <p className="text-amber-400 uppercase tracking-widest text-sm">
//             Strong Reasons to Trust RB Hires
//           </p>

//           <div className="space-y-6 mt-6">

//             {points.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-4 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:shadow-yellow-500/20 transition"
//               >
//                 {/* Number */}
//                 <div className="text-yellow-400 font-bold text-xl w-12">
//                   {item.number}
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm mt-1">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>

//         {/* 🔹 RIGHT SIDE (Content Box) */}
//         <div className="w-full lg:w-1/2">

//           <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg hover:shadow-yellow-500/20 transition">

//             <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
//               Building Careers, Not Just Placements
//             </h3>

//             <p className="text-gray-300 mt-5 leading-relaxed">
//               At RB Hires, we believe in creating long-term success stories.
//               Our recruitment approach is designed to understand both company
//               culture and candidate potential deeply.
//             </p>

//             <p className="text-gray-400 mt-4 leading-relaxed">
//               We don’t just fill positions — we build strong professional relationships
//               that drive growth for both employers and job seekers.
//             </p>

//             <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
//               Get Started
//             </button>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";

const points = [
  {
    number: "01",
    title: "Industry Expertise",
    desc: "Years of experience across multiple industries helping businesses hire the right talent.",
    className: "lg:col-span-2", // Larger card
  },
  {
    number: "02",
    title: "Quality-Focused",
    desc: "We focus on long-term value, not just quick placements.",
    className: "lg:col-span-1",
  },
  {
    number: "03",
    title: "Tailored Recruitment",
    desc: "Customized to your business goals and culture.",
    className: "lg:col-span-1",
  },
  {
    number: "04",
    title: "Fast & Reliable",
    desc: "Optimized workflows that save time and improve efficiency.",
    className: "lg:col-span-1",
  },
  {
    number: "05",
    title: "Trusted Partnerships",
    desc: "Built on transparency and consistent delivery.",
    className: "lg:col-span-1",
  },
  {
    number: "06",
    title: "End-to-End Support",
    desc: "Complete assistance from sourcing to onboarding.",
    className: "lg:col-span-3", // Wide card at bottom
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium tracking-[0.2em] mb-3 uppercase text-sm">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Careers, <br /> 
              <span className="text-yellow-400">Not Just Placements.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-lg">
            We bridge the gap between talent and opportunity with a process built on trust.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all duration-500 ${item.className}`}
            >
              {/* Hover Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-yellow-500 font-mono text-sm border border-yellow-500/30 px-3 py-1 rounded-full">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-bold mt-6 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Minimal Arrow Icon for bottom-wide card */}
                {index === 5 && (
                  <button className="mt-8 flex items-center gap-2 text-yellow-500 font-semibold group-hover:gap-4 transition-all">
                    Learn more about our process <span>→</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all">
                Let's Talk Talent
            </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;