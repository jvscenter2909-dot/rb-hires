import { useState, useEffect } from "react";
import Header from "./Header";

const stats = [
  { number: "12K+", label: "Placements Made" },
  { number: "95%", label: "Client Success" },
  { number: "50+", label: "Sectors Covered" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-black text-white min-h-[90vh] relative overflow-hidden flex flex-col items-center selection:bg-amber-500 selection:text-black">
        
        {/* Cinematic Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
        
        {/* Dynamic Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full animate-pulse" />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;800&family=Space+Grotesk:wght@300;500;700&display=swap');
          
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

          .text-gradient {
            background: linear-gradient(to bottom, #ffffff 30%, #a1a1a1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* --- WAVE ANIMATION --- */
          .waves {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 15vh;
            min-height: 100px;
            max-height: 150px;
          }

          .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
          }
          .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
          .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
          .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
          .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }

          @keyframes move-forever {
            0% { transform: translate3d(-90px,0,0); }
            100% { transform: translate3d(85px,0,0); }
          }
        `}</style>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-5xl w-full px-6 pt-20 pb-32 flex flex-col items-center text-center">
          
          {/* Tagline */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-white/60">
                Human-Centric Recruitment
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className={`font-display text-4xl md:text-7xl font-bold leading-[1.1] tracking-tighter transition-all duration-1000 delay-200 ${visible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gradient">Connecting Talent</span> <br />
            <span className="text-amber-500 italic font-light">with the</span> Right Opportunities
          </h1>

          {/* Content Paragraphs */}
          <div className={`mt-10 space-y-6 max-w-2xl transition-all duration-1000 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-body text-xl text-white/80 leading-relaxed font-light">
              RB Hires Consulting helps job seekers find careers and enables companies to hire skilled professionals.
            </p>
          </div>

          {/* Actions */}
          <div className={`mt-12 flex flex-col sm:flex-row items-center gap-5 transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <button className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-black font-bold rounded-2xl hover:bg-white transition-all active:scale-95 shadow-lg shadow-amber-500/20">
              Contact Us
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-white/20 font-bold rounded-2xl hover:bg-white/5 transition-all">
              Explore Jobs
            </button>
          </div>
        </div>

        {/* WAVE ELEMENT */}
        <div className="absolute bottom-0 w-full leading-none">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(255,191,0,0.05)" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(255,191,0,0.1)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(255,191,0,0.15)" />
              <use href="#gentle-wave" x="48" y="7" fill="rgba(255,191,0,0.2)" />
            </g>
          </svg>
        </div>

      </div>
    </>
  );
}