// import React, { useEffect, useRef, useState } from "react";

// const stats = [
//   {
//     label: "Successful Placements",
//     value: 700,
//     suffix: "+",
//   },
//   {
//     label: "Happy Clients",
//     value: 500,
//     suffix: "+",
//   },
//   {
//     label: "Industries Served",
//     value: 25,
//     suffix: "+",
//   },
//   {
//     label: "Years of Experience",
//     value: 5,
//     suffix: "+",
//   },
// ];

// const Achievements = () => {
//   const [start, setStart] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStart(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="relative bg-black text-white py-20 px-6 md:px-20 overflow-hidden"
//     >
//       {/* 🔶 Gold Glow Background */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl" />
//       </div>

//       {/* Heading */}
//       <div className="relative text-center max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           OUR ACHIEVEMENTS
//         </h2>

//         <p className="text-amber-400 uppercase tracking-widest text-sm mt-2">
//           Numbers That Speak Our Success
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="relative mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

//         {stats.map((item, index) => (
//           <CounterCard
//             key={index}
//             label={item.label}
//             value={item.value}
//             suffix={item.suffix}
//             start={start}
//           />
//         ))}

//       </div>
//     </section>
//   );
// };

// export default Achievements;

// /* 🔥 Counter Component */
// const CounterCard = ({ value, label, suffix, start }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let startVal = 0;
//     const duration = 1500;
//     const increment = value / (duration / 16);

//     const counter = setInterval(() => {
//       startVal += increment;

//       if (startVal >= value) {
//         startVal = value;
//         clearInterval(counter);
//       }

//       setCount(Math.floor(startVal));
//     }, 16);

//     return () => clearInterval(counter);
//   }, [start, value]);

//   return (
//     <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
      
//       <h3 className="text-4xl font-bold text-yellow-400">
//         {count}
//         {suffix}
//       </h3>

//       <p className="mt-3 text-gray-300 text-sm">
//         {label}
//       </p>
//     </div>
//   );
// };
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Successful Placements", value: 700, suffix: "+" },
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Industries Served", value: 25, suffix: "+" },
  { label: "Years of Experience", value: 5, suffix: "+" },
];

const Achievements = () => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-black py-32 px-6 overflow-hidden selection:bg-amber-500">
      
      {/* 🌊 Background Continuity: Carbon Texture & Subtle Waves */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
      
      {/* 🌌 High-End Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Minimal & Bold */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">Our Track Record</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Making a Real <span className="text-amber-500">Impact.</span>
          </h2>
          
          <p className="max-w-xl text-zinc-500 text-lg font-light leading-relaxed">
            Numbers don't lie. Our commitment to excellence is reflected in every placement and partnership we build.
          </p>
        </div>

        {/* Stats Container - Modern Glassmorphism */}
        <div className="relative group">
          {/* External decorative glow that follows the box */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`relative py-16 px-8 flex flex-col items-center group/item transition-all duration-500
                    ${index !== stats.length - 1 ? "lg:border-r border-white/5" : ""}
                    ${index % 2 !== 0 ? "sm:border-r lg:border-r" : "border-r-0 lg:border-r"}
                    border-b lg:border-b-0 border-white/5
                  `}
                >
                  {/* Subtle Card Hover Effect */}
                  <div className="absolute inset-0 bg-amber-500/[0.01] opacity-0 group-hover/item:opacity-100 transition-opacity" />

                  <div className="relative flex flex-col items-center">
                    <Counter
                      value={item.value}
                      suffix={item.suffix}
                      start={start}
                    />
                    
                    {/* Animated Line under number */}
                    <div className="h-1 w-8 bg-amber-500/20 mx-auto mt-4 rounded-full group-hover/item:w-16 group-hover/item:bg-amber-500 transition-all duration-500" />
                  </div>

                  <p className="mt-8 text-zinc-500 font-medium text-xs md:text-sm uppercase tracking-[0.2em] text-center group-hover/item:text-white transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Decorative Floating Element */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none opacity-[0.03]">
          <h3 className="text-[10rem] md:text-[15rem] font-bold text-white leading-none font-display">
            TRUST
          </h3>
        </div>
      </div>

      <style jsx>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </section>
  );
};

const Counter = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 2500; // Smoother 2.5s duration

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Power 4 ease out for that "premium" slow-down feel
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(easeOut * value);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <span className="text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-amber-500/50">
      {count}{suffix}
    </span>
  );
};

export default Achievements;