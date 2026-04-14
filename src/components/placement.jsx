import React from "react";

const companies = [
  { name: "Walmart", domain: "walmart.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "HDFC Bank", domain: "hdfcbank.com" },
  { name: "ICICI Bank", domain: "icicibank.com" },
  { name: "Axis Bank", domain: "axisbank.com" },
  { name: "Reliance", domain: "ril.com" },
  { name: "Tata Motors", domain: "tatamotors.com" },
  { name: "L&T", domain: "larsentoubro.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "IBM", domain: "ibm.com" },
];

const PlacementSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden selection:bg-amber-500">
      
      {/* 🌊 Top Wave Transition (Continuing from previous section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12 text-zinc-900/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* 🌌 Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">Trusted Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
            Our Graduates <span className="text-zinc-600">Work At</span>
          </h2>
          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Connecting our elite talent with the world's most innovative organizations.
          </p>
        </div>

        {/* --- INFINITE LOGO MARQUEE --- */}
        <div className="relative mt-12">
          {/* Gradient Masking for Smooth Fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20" />

          <div className="flex overflow-hidden group">
            <div className="flex animate-scroll-fast gap-12 py-10">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[180px] group/logo transition-all duration-500"
                >
                  <div className="relative p-6 rounded-2xl bg-zinc-950/50 border border-white/5 group-hover/logo:border-amber-500/40 group-hover/logo:bg-zinc-900 transition-all shadow-xl">
                    <img 
                      src={`https://logo.clearbit.com/${company.domain}`} 
                      alt={company.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain grayscale group-hover/logo:grayscale-0 transition-all duration-500 opacity-60 group-hover/logo:opacity-100"
                      onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=1a1a1a&color=f59e0b`; }}
                    />
                  </div>
                  <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 group-hover/logo:text-amber-500 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional: Second Row Moving in Reverse */}
        <div className="flex overflow-hidden group mt-4">
          <div className="flex animate-scroll-reverse gap-12 py-4">
            {[...companies, ...companies].reverse().map((company, index) => (
               <div key={`rev-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 opacity-30 hover:opacity-100 transition-opacity cursor-default">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-semibold whitespace-nowrap">{company.name}</span>
               </div>
            ))}
          </div>
        </div>

      </div>

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
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </section>
  );
};

export default PlacementSection;