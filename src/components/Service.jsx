// import React from "react";

// const services = [
//   {
//     title: "Expert Advice",
//     desc: "Personalized expert advice to help you make confident career decisions.",
//   },
//   {
//     title: "Resume Enhacement",
//     desc: "Professionally crafted resumes that highlight youe skills and achivements.",
//   },
//   {
//     title: "Profile Optimization",
//     desc: "Optimize your professional profiles to attract recruiters organically.",
//   },
//   {
//     title: "Job Application Strategy",
//     desc: "A structured roadmap to apply smarter and increase interview calls.",
//   },
//   {
//     title: "Interview Preparation",
//     desc: "Build confidence and ace interviews with expert coaching sessions.",
//   },
//   {
//     title: "Salary Negotiation",
//     desc: "Strategic compensation coaching to help you secure the best offer.",
//   },
// ];

// const Service = () => {
//   return (
//     <section className="bg-black text-white py-20 px-6 md:px-20 relative">
      
//       {/* Glow background */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto text-center mb-12">
//         <h4 className="text-amber-500 uppercase tracking-widest text-sm">
//           Our Services
//         </h4>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">
//           Expert Advice & Career Solutions
//         </h2>
//         <p className="text-gray-400 mt-3">
//           We provide complete recruitment and career consulting support.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white/5 border border-yellow-500/30 rounded-2xl p-6 hover:scale-105 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer"
//           >
//             <h3 className="text-xl font-semibold text-amber-400 mb-3">
//               {item.title}
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Service;
import React from "react";
import { Briefcase, FileText, UserCheck, Map, MessageSquare, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Expert Advice",
    desc: "Personalized expert advice to help you make confident career decisions.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Resume Enhancement",
    desc: "Professionally crafted resumes that highlight your skills and achievements.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Profile Optimization",
    desc: "Optimize your professional profiles to attract recruiters organically.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "Job Application Strategy",
    desc: "A structured roadmap to apply smarter and increase interview calls.",
    icon: <Map className="w-6 h-6" />,
  },
  {
    title: "Interview Preparation",
    desc: "Build confidence and ace interviews with expert coaching sessions.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Salary Negotiation",
    desc: "Strategic compensation coaching to help you secure the best offer.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const Service = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">
      
      {/* 🔶 Continuing the Carbon Fiber Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
                Solutions for Success
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
              Expert Advice & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-zinc-500">
                Career Solutions.
              </span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed border-l border-zinc-800 pl-6">
            From first impression to final negotiation, we provide the tools you need to dominate your industry.
          </p>
        </div>

        {/* Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/5 bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[300px]"
            >
              {/* Corner Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-[50px] group-hover:bg-amber-500/20 transition-all duration-700" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-zinc-800 font-bold text-4xl group-hover:text-amber-500/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-4">
                  {item.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Interactive Element */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                EXPLORE SERVICE <ArrowUpRight className="w-4 h-4" />
              </div>
              
              {/* Subtle Border Animation Bottom */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-transparent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </section>
  );
};

export default Service;