import React, { useState } from 'react';
import { Send, UserPlus, Gift, X } from 'lucide-react';
import Footer from '../components/Footer';

const Refern = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Refer Us",
      description: "Share the details of a person who is looking for a job through our easy-to-use platform.",
      icon: <Send className="w-6 h-6 text-amber-500" />,
      button: "Share Details"
    },
    {
      id: "02",
      title: "Empower Them",
      description: "Help the candidate enroll with our premium career services to kickstart their professional journey.",
      icon: <UserPlus className="w-6 h-6 text-blue-400" />,
      button: null
    },
    {
      id: "03",
      title: "Get Bonus",
      description: "Earn an exclusive referral bonus directly into your account when the candidate enrolls successfully.",
      icon: <Gift className="w-6 h-6 text-emerald-400" />,
      button: "Join Referral Program"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-24 px-6 text-white font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Refer & <span className="text-amber-500 italic">Earn</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base tracking-[0.2em] uppercase font-bold">
            Empower careers & get rewarded
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative space-y-12">
          <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-500 via-blue-500 to-emerald-500 hidden md:block opacity-20"></div>

          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 ${
                  index === 0 ? 'border-amber-500/30 bg-amber-500/10' : 
                  index === 1 ? 'border-blue-500/30 bg-blue-500/10' : 
                  'border-emerald-500/30 bg-emerald-400/10'
                }`}>
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 text-[10px] font-black px-2 py-0.5 rounded bg-white text-black">
                  STEP {step.id}
                </span>
              </div>

              <div className="flex-grow bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05] shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {step.button && (
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg ${
                      index === 0 
                      ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-amber-500/20' 
                      : 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-500/20'
                    }`}>
                      {step.button}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FORM MODAL (Pop-up) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 w-full max-w-lg rounded-3xl p-8 relative shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-amber-500 mb-6">Referral Details</h2>

            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Your Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Your Email</label>
                <input type="email" placeholder="Your Email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Your Phone</label>
                <input type="tel" placeholder="Your Phone" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                 <div className="space-y-1">
                    <label className="text-xs text-white/60 ml-1">Referral Name</label>
                    <input type="text" placeholder="Referral Name" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                 </div>
                 <div className="space-y-1">
                    <label className="text-xs text-white/60 ml-1">Referral Email</label>
                    <input type="email" placeholder="Referral Email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                 </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Referral Phone</label>
                <input type="tel" placeholder="Referral Phone" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl mt-4 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      )}
       <Footer />
    </div>
   
  );
};

export default Refern;