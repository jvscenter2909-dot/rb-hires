// import React from "react";

// const companies = [
//   {
//     name: "ExxonMobil",
//     domain: "exxonmobil.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880769/placement-companies/hhyboesml4afplbksqg8.webp",
//   },
//   {
//     name: "Microsoft",
//     domain: "microsoft.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880785/placement-companies/mqcfw5aouitek6iywdhz.png",
//   },
//   {
//     name: "Caterpillar",
//     domain: "caterpillar.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880798/placement-companies/fjg2ej9hjtpt7txvh8at.png",
//   },
//   {
//     name: "IBM",
//     domain: "ibm.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880814/placement-companies/id35uifdoqd0m4drhn29.png",
//   },
//   {
//     name: "Lockheed Martin",
//     domain: "lockheedmartin.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880828/placement-companies/rbsvzahr0hu6xmiblbvm.png",
//   },
//   {
//     name: "Meta",
//     domain: "meta.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880846/placement-companies/ponnor6cfi5sutyy9nmq.png",
//   },
//   {
//     name: "Lowe's",
//     domain: "lowes.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880863/placement-companies/skfviwcrdl5cmtgzb4ce.png",
//   },
//   {
//     name: "Amazon",
//     domain: "amazon.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880883/placement-companies/intnaliznu1iinmvpzzu.png",
//   },
//   {
//     name: "Wells Fargo",
//     domain: "wellsfargo.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880945/placement-companies/cqqovlzf53ypduxcvzy5.png",
//   },
//   {
//     name: "Capgemini",
//     domain: "capgemini.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140134/placement-companies/bzld4kyv7ty32udr1lnx.png",
//   },
//   {
//     name: "CVS Health",
//     domain: "cvshealth.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140191/placement-companies/jiyjjw2gvmnnmyhpnqju.png",
//   },
//   {
//     name: "UnitedHealthcare",
//     domain: "uhc.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140264/placement-companies/yx7shi6heqtkmfi2vzm7.png",
//   },
//   {
//     name: "The Home Depot",
//     domain: "homedepot.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140354/placement-companies/puxuphvbsqeakofb76tu.jpg",
//   },
//   {
//     name: "Morgan Stanley",
//     domain: "morganstanley.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140429/placement-companies/lbppfbhwlkltalcjs2tc.png",
//   },
//   {
//     name: "MetLife",
//     domain: "metlife.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140493/placement-companies/g6gqbkeo1wvfbgot1uyc.png",
//   },
//   {
//     name: "Merck",
//     domain: "merck.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140544/placement-companies/kw2dj7xl2rc9sknmhuti.png",
//   },
//   {
//     name: "McKesson",
//     domain: "mckesson.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140617/placement-companies/zjib5bmpe1hs9uq6rljt.jpg",
//   },
//   {
//     name: "JPMorgan Chase",
//     domain: "jpmorganchase.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140706/placement-companies/t9svjl3gvpcn8v32chri.png",
//   },
//   {
//     name: "Infosys",
//     domain: "infosys.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140801/placement-companies/fkhdovm5gj8jfprvk4sl.png",
//   },
//   {
//     name: "Dell Technologies",
//     domain: "dell.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140880/placement-companies/y2e6m1cdollgw2fcford.png",
//   },
//   {
//     name: "Walmart",
//     domain: "walmart.com",
//     image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770236832/placement-companies/exeqd4smbo9x3clruoht.png",
//   },
// ];

// const PlacementSection = () => {
//   return (
//     <section className="bg-black text-white py-24 px-6 relative overflow-hidden selection:bg-amber-500">

//       {/* 🌊 Top Wave */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg
//           className="relative block w-full h-12 text-zinc-900/20"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>

//       {/* Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
//             <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
//               Trusted Ecosystem
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Our Graduates <span className="text-zinc-300">Work At</span>
//           </h2>
//         </div> 

//         {/* MARQUEE */}
//         <div className="relative mt-12">

//           <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
//           <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20" />

//           <div className="flex overflow-hidden">
//             <div className="flex animate-scroll-fast gap-12 py-10">

//               {[...companies, ...companies].map((company, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center min-w-[180px]"
//                 >
//                   <div className="p-6 rounded-2xl bg-zinc-950/50 border border-white/5 shadow-xl">

//                     {/* ✅ FIX: direct image use + fallback */}
//                     <img
//                       src={company.image}
//                       alt={company.name}
//                       className="w-14 h-14 md:w-16 md:h-16 object-contain"
//                       onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                           company.name
//                         )}&background=1a1a1a&color=f59e0b`;
//                       }}
//                     />
//                   </div>

//                   <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
//                     {company.name}
//                   </span>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>

//         {/* Reverse row */}
//         <div className="flex overflow-hidden mt-4">
//           <div className="flex animate-scroll-reverse gap-12 py-4">

//             {[...companies, ...companies].reverse().map((company, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 opacity-30 hover:opacity-100 transition-opacity"
//               >
//                 <div className="w-2 h-2 rounded-full bg-amber-500" />
//                 <span className="text-xs font-semibold whitespace-nowrap">
//                   {company.name}
//                 </span>
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes scroll-fast {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scroll-reverse {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//         .animate-scroll-fast {
//           animation: scroll-fast 40s linear infinite;
//         }
//         .animate-scroll-reverse {
//           animation: scroll-reverse 50s linear infinite;
//         }
//       `}</style>

//     </section>
//   );
// };

// export default PlacementSection;

import React, { useState } from "react";

const companies = [
  {
    name: "ExxonMobil",
    domain: "exxonmobil.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880769/placement-companies/hhyboesml4afplbksqg8.webp",
  },
  {
    name: "Microsoft",
    domain: "microsoft.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880785/placement-companies/mqcfw5aouitek6iywdhz.png",
  },
  {
    name: "Caterpillar",
    domain: "caterpillar.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880798/placement-companies/fjg2ej9hjtpt7txvh8at.png",
  },
  {
    name: "IBM",
    domain: "ibm.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880814/placement-companies/id35uifdoqd0m4drhn29.png",
  },
  {
    name: "Lockheed Martin",
    domain: "lockheedmartin.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880828/placement-companies/rbsvzahr0hu6xmiblbvm.png",
  },
  {
    name: "Meta",
    domain: "meta.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880846/placement-companies/ponnor6cfi5sutyy9nmq.png",
  },
  {
    name: "Lowe's",
    domain: "lowes.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880863/placement-companies/skfviwcrdl5cmtgzb4ce.png",
  },
  {
    name: "Amazon",
    domain: "amazon.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880883/placement-companies/intnaliznu1iinmvpzzu.png",
  },
  {
    name: "Wells Fargo",
    domain: "wellsfargo.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1769880945/placement-companies/cqqovlzf53ypduxcvzy5.png",
  },
  {
    name: "Capgemini",
    domain: "capgemini.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140134/placement-companies/bzld4kyv7ty32udr1lnx.png",
  },
  {
    name: "CVS Health",
    domain: "cvshealth.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140191/placement-companies/jiyjjw2gvmnnmyhpnqju.png",
  },
  {
    name: "UnitedHealthcare",
    domain: "uhc.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140264/placement-companies/yx7shi6heqtkmfi2vzm7.png",
  },
  {
    name: "The Home Depot",
    domain: "homedepot.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140354/placement-companies/puxuphvbsqeakofb76tu.jpg",
  },
  {
    name: "Morgan Stanley",
    domain: "morganstanley.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140429/placement-companies/lbppfbhwlkltalcjs2tc.png",
  },
  {
    name: "MetLife",
    domain: "metlife.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140493/placement-companies/g6gqbkeo1wvfbgot1uyc.png",
  },
  {
    name: "Merck",
    domain: "merck.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140544/placement-companies/kw2dj7xl2rc9sknmhuti.png",
  },
  {
    name: "McKesson",
    domain: "mckesson.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140617/placement-companies/zjib5bmpe1hs9uq6rljt.jpg",
  },
  {
    name: "JPMorgan Chase",
    domain: "jpmorganchase.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140706/placement-companies/t9svjl3gvpcn8v32chri.png",
  },
  {
    name: "Infosys",
    domain: "infosys.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140801/placement-companies/fkhdovm5gj8jfprvk4sl.png",
  },
  {
    name: "Dell Technologies",
    domain: "dell.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770140880/placement-companies/y2e6m1cdollgw2fcford.png",
  },
  {
    name: "Walmart",
    domain: "walmart.com",
    image: "https://res.cloudinary.com/docdxpjnf/image/upload/v1770236832/placement-companies/exeqd4smbo9x3clruoht.png",
  },
];

const PlacementSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden selection:bg-amber-500">

      {/* 🌊 Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12 text-zinc-900/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
              Trusted Ecosystem
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our Graduates <span className="text-zinc-300">Work At</span>
          </h2>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-12">

          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20" />

          <div className="flex overflow-hidden">
            <div className={`flex ${isPaused ? "" : "animate-scroll-fast"} gap-12 py-10`}>

              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  onClick={() => setIsPaused(prev => !prev)}
                  className="flex flex-col items-center min-w-[180px] cursor-pointer"
                >
                  <div className="p-6 rounded-2xl bg-zinc-950/50 border border-white/5 shadow-xl">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          company.name
                        )}&background=1a1a1a&color=f59e0b`;
                      }}
                    />
                  </div>

                  <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
                    {company.name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Reverse row */}
        <div className="flex overflow-hidden mt-4">
          <div className={`flex ${isPaused ? "" : "animate-scroll-reverse"} gap-12 py-4`}>

            {[...companies, ...companies].reverse().map((company, index) => (
              <div
                key={index}
                onClick={() => setIsPaused(prev => !prev)}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-xs font-semibold whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default PlacementSection;