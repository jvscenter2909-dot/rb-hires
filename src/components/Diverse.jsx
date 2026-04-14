// import React from "react";
// import {
//   HeartPulse,
//   Landmark,
//   Truck,
//   Code2,
// } from "lucide-react";

// const industries = [
//   {
//     title: "Healthcare",
//     desc: "Delivering skilled healthcare professionals for hospitals and clinics.",
//     icon: <HeartPulse size={30} />,
//   },
//   {
//     title: "Finance & Banking",
//     desc: "Providing expert talent for banking, finance and insurance sectors.",
//     icon: <Landmark size={30} />,
//   },
//   {
//     title: "Logistics & Supply Chain",
//     desc: "Efficient workforce solutions for transport and supply chain operations.",
//     icon: <Truck size={30} />,
//   },
//   {
//     title: "IT Technology",
//     desc: "Top IT professionals for software, development and tech companies.",
//     icon: <Code2 size={30} />,
//   },
// ];

// const IndustriesWeServe = () => {
//   return (
//     <section className="relative bg-black text-white py-16 px-6 md:px-20 overflow-hidden">

//       {/* 🔶 Yellow Glow Background (About style) */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
//       </div>

//       {/* Content */}
//       <div className="relative max-w-6xl mx-auto text-center">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold">
//           INDUSTRIES WE SERVE
//         </h2>

//         <p className="text-amber-500 mt-2 uppercase tracking-widest text-sm">
//           Serving Diverse Industries
//         </p>

//         <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
//           We deliver tailored recruitment and consulting solutions across multiple industries
//           to meet evolving workforce demands.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

//           {industries.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300"
//             >

//               {/* Icon */}
//               <div className="flex justify-center text-yellow-400 mb-4">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-white">
//                 {item.title}
//               </h3>

//               {/* Desc */}
//               <p className="text-gray-300 mt-2 text-sm">
//                 {item.desc}
//               </p>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesWeServe;

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  Truck,
  Code2,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    desc: "Delivering skilled healthcare professionals for hospitals and clinics.",
    icon: <HeartPulse size={24} />,
  },
  {
    title: "Finance & Banking",
    desc: "Providing expert talent for banking, finance and insurance sectors.",
    icon: <Landmark size={24} />,
  },
  {
    title: "Logistics & Supply Chain",
    desc: "Efficient workforce solutions for transport and supply chain operations.",
    icon: <Truck size={24} />,
  },
  {
    title: "IT Technology",
    desc: "Top IT professionals for software, development and tech companies.",
    icon: <Code2 size={24} />,
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden selection:bg-amber-500">
      
      {/* 🔶 Continuing Carbon Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />

      {/* 🌊 Background Wave Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-amber-500 blur-[150px] rounded-full" 
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* 🔹 Left Side: Sticky Content */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
                Our Expertise
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-display leading-[1.1]">
              Industries <br /> 
              <span className="text-white">We Serve.</span>
            </h2>
            
            <p className="text-white text-lg font-light leading-relaxed">
              Tailored recruitment solutions designed to meet the unique demands of 
              global market leaders.
            </p>
            
            <div className="pt-6">
              <button className="group flex items-center gap-3 text-white bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                View All Sectors 
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Right Side: Wave-Animated Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-950/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* 🌊 Inner Card Wave Effect (Visible on Hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <svg className="absolute bottom-0 w-full h-24 text-amber-500/10" viewBox="0 0 1440 320">
                    <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                 </svg>
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black border border-zinc-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 shadow-xl shadow-amber-500/0 group-hover:shadow-amber-500/20">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mt-10 mb-4 font-display">
                  {item.title}
                </h3>
                
                <p className="text-zinc-300 group-hover:text-zinc-300 leading-relaxed font-light">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 overflow-hidden">
                  <div className="h-[1px] w-0 bg-amber-500 group-hover:w-12 transition-all duration-700" />
                  <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest translate-x-[-20px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Industry Insights
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </section>
  );
};

export default IndustriesWeServe;