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
    <section
      ref={ref}
      className="relative bg-black py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-amber-500/5 blur-[120px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
              Our Track Record
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6">
            Making a Real <span className="text-amber-500">Impact.</span>
          </h2>

          <p className="max-w-xl text-zinc-300 text-sm md:text-lg">
            Numbers don't lie. Our commitment to excellence is reflected in every placement and partnership we build.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />

          <div className="relative bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden">
            
            {/* ✅ FIX: Mobile = 2 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="relative py-10 md:py-16 px-4 md:px-8 flex flex-col items-center border border-white/5"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-amber-500/[0.01] opacity-0 hover:opacity-100 transition-opacity" />

                  <div className="relative flex flex-col items-center">
                    <Counter
                      value={item.value}
                      suffix={item.suffix}
                      start={start}
                    />

                    <div className="h-1 w-6 md:w-8 bg-amber-500/20 mt-3 md:mt-4 rounded-full hover:w-12 md:hover:w-16 hover:bg-amber-500 transition-all duration-500" />
                  </div>

                  <p className="mt-4 md:mt-8 text-zinc-500 text-[10px] md:text-sm uppercase tracking-widest text-center hover:text-white transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ FIX: TRUST responsive & not cut */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.04]">
          <h3 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold text-white leading-none">
            TRUST
          </h3>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 2500;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

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
    <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-amber-500/50">
      {count}
      {suffix}
    </span>
  );
};

export default Achievements;