import React, { useState } from 'react';
import { Send, UserPlus, Gift, X } from 'lucide-react';
import Footer from '../components/Footer';

const Refern = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    refName: '',
    refEmail: '',
    refPhone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Referral Data Submitted:", formData);
    alert("Thank you! Your referral has been submitted.");
    setIsModalOpen(false);
    // Reset form
    setFormData({ userName: '', userEmail: '', userPhone: '', refName: '', refEmail: '', refPhone: '' });
  };

  const steps = [
    {
      id: "01",
      title: "Refer Us",
      description: "Share the details of a person who is looking for a job through our easy-to-use platform.",
      icon: <Send className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
      button: "Share Details"
    },
    {
      id: "02",
      title: "Empower Them",
      description: "Help the candidate enroll with our premium career services to kickstart their professional journey.",
      icon: <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
      button: null
    },
    {
      id: "03",
      title: "Get Bonus",
      description: "Earn an exclusive referral bonus directly into your account when the candidate enrolls successfully.",
      icon: <Gift className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />,
      button: "Join Referral Program"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-12 md:py-24 px-4 md:px-6 text-white font-sans relative overflow-x-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-amber-500/5 blur-[80px] md:blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">
            Refer & <span className="text-amber-500 italic">Earn</span>
          </h2>
          <p className="text-white/40 text-xs md:text-base tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold px-4">
            Empower careers & get rewarded
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative space-y-8 md:space-y-12">
          {/* Vertical Line - Hidden on small mobile if needed, but looks good as is */}
          <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-500 via-blue-500 to-emerald-500 hidden md:block opacity-20"></div>

          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
              
              {/* Icon & Step Badge */}
              <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 ${
                  index === 0 ? 'border-amber-500/30 bg-amber-500/10' : 
                  index === 1 ? 'border-blue-500/30 bg-blue-500/10' : 
                  'border-emerald-500/30 bg-emerald-400/10'
                }`}>
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded bg-white text-black">
                  STEP {step.id}
                </span>
              </div>

              {/* Content Card */}
              <div className="w-full flex-grow bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05] shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-md text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-amber-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {step.button && (
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full lg:w-auto px-6 md:px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg active:scale-95 ${
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

      {/* --- FORM MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#111] border border-white/10 w-full max-w-lg rounded-3xl p-6 md:p-8 relative shadow-2xl my-auto">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-amber-500 mb-6 text-center md:text-left">Referral Details</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-white/60 ml-1">Your Name</label>
                  <input required name="userName" value={formData.userName} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-1">
                    <label className="text-xs text-white/60 ml-1">Your Email</label>
                    <input required name="userEmail" value={formData.userEmail} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-white/60 ml-1">Your Phone</label>
                    <input required name="userPhone" value={formData.userPhone} onChange={handleChange} type="tel" placeholder="+91 0000000000" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/5 my-4"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <label className="text-xs text-white/60 ml-1">Friend's Name</label>
                    <input required name="refName" value={formData.refName} onChange={handleChange} type="text" placeholder="Friend's Name" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                 </div>
                 <div className="space-y-1">
                    <label className="text-xs text-white/60 ml-1">Friend's Email</label>
                    <input required name="refEmail" value={formData.refEmail} onChange={handleChange} type="email" placeholder="friend@email.com" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                 </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Friend's Phone</label>
                <input required name="refPhone" value={formData.refPhone} onChange={handleChange} type="tel" placeholder="Friend's Contact" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl mt-4 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
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