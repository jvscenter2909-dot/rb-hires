import React from "react";
import PropTypes from "prop-types";

const Preloader = ({ logo = "./logo.png", alt = "RB HIRES" }) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* 🌊 Background Wave Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -bottom-10 left-0 w-full">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(245, 158, 11, 0.1)" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(245, 158, 11, 0.05)" />
            </g>
          </svg>
        </div>
      </div>

      {/* 🌌 Atmospheric Glow */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full animate-pulse-slow" />

      <div className="relative flex flex-col items-center">
        
        {/* 🟡 Logo with Liquid Filling Effect */}
        <div className="relative group">
          {/* External Pulsing Ring */}
          <div className="absolute -inset-4 rounded-full border border-amber-500/20 animate-ping opacity-20" />
          <div className="absolute -inset-8 rounded-full border border-amber-500/10 animate-ping-slow opacity-10" />

          {/* Main Logo Hexagon/Circle Container */}
          <div className="relative h-32 w-32 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
            
            {/* Liquid Wave Inside the Logo Container */}
            <div className="absolute inset-0 z-0">
               <div className="liquid-wave bg-amber-500/20 absolute bottom-0 left-0 w-full h-[60%] animate-liquid" />
            </div>

            <img
              src={logo}
              alt={alt}
              className="relative z-10 h-16 w-16 object-contain grayscale brightness-200"
            />
          </div>
        </div>

        {/* Branding Branding Section */}
        <div className="mt-10 text-center relative">
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] font-display text-white">
            RB <span className="text-amber-500">HIRES</span>
          </h1>
          
          <div className="flex flex-col items-center mt-4 overflow-hidden">
             <p className="text-[9px] tracking-[0.6em] text-zinc-500 uppercase font-bold animate-fade-in-up">
               Human-Centric Recruitment
             </p>
             {/* Progress bar line */}
             <div className="mt-4 h-[2px] w-24 bg-zinc-800 relative overflow-hidden rounded-full">
                <div className="absolute h-full w-full bg-amber-500 -translate-x-full animate-loading-bar" />
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }

        .waves {
          width: 100%;
          height: 15vh;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }

        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }

        @keyframes liquid {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.1); }
        }

        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        .animate-liquid {
          animation: liquid 4s ease-in-out infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 2s infinite ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

Preloader.propTypes = {
  logo: PropTypes.string,
  alt: PropTypes.string,
};

export default Preloader;