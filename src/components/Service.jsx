import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  FileText,
  UserCheck,
  Map,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  X,
} from "lucide-react";

const services = [
  {
    title: "Expert Advice",
    desc: "Personalized expert advice to help you make confident career decisions.",
    icon: <Briefcase className="w-6 h-6" />,
    details: {
      image: "https://i.pinimg.com/1200x/c4/da/6a/c4da6a4951f2135b9b7b5091e0f3af97.jpg",
      longDesc: "Our expert advisors provide personalized career insights based on your skills, experience, and career goals to help you make informed decisions. We focus on understanding your strengths and aspirations, guiding you toward the right opportunities and long-term career success.",
      offers: ["One-on-one expert consultation", "Career clarity & direction", "Industry-specific insights", "Actionable career advice"]
    }
  },
  {
    title: "Resume Enhancement",
    desc: "Professionally crafted resumes that highlight your skills and achievements.",
    icon: <FileText className="w-6 h-6" />,
    details: {
      image: "https://i.pinimg.com/736x/14/13/99/141399a8b94d2ad0fe25f567372dbe8a.jpg",
      longDesc: "Your resume is your first impression. We help you stand out from the crowd by crafting ATS-friendly resumes that highlight your core strengths and quantifiable achievements in a professional layout.",
      offers: ["ATS-friendly formatting", "Keyword optimization", "Compelling summary writing", "Modern visual templates"]
    }
  },
  {
    title: "Profile Optimization",
    desc: "Optimize your professional profiles to attract recruiters organically.",
    icon: <UserCheck className="w-6 h-6" />,
    details: {
      image: "https://i.pinimg.com/736x/ea/e1/24/eae124894b63a41758a311c5da351143.jpg",
      longDesc: "Social selling is key to career growth. We optimize your LinkedIn and other professional profiles to ensure you appear in recruiter searches and present a highly professional brand to the industry.",
      offers: ["LinkedIn profile overhaul", "Headline & Bio writing", "Skills endorsement strategy", "Profile visibility audit"]
    }
  },
  {
    title: "Job Application Strategy",
    desc: "A structured roadmap to apply smarter and increase interview calls.",
    icon: <Map className="w-6 h-6" />,
    details: {
      image: "https://i.pinimg.com/1200x/d9/0d/db/d90ddb4da9229c71975895f0cfbfe826.jpg",
      longDesc: "Stop applying randomly. We provide a tailored roadmap to target the right companies, use the hidden job market, and track your applications effectively to maximize your success rate.",
      offers: ["Target company listing", "Networking techniques", "Hidden job market tips", "Application tracking system"]
    }
  },
  {
    title: "Interview Preparation",
    desc: "Build confidence and ace interviews with expert coaching sessions.",
    icon: <MessageSquare className="w-6 h-6" />,
    details: {
      image: "https://i.pinimg.com/236x/40/32/da/4032da0c316119217c3179f2298323e7.jpg",
      longDesc: "Interviews can be stressful. Our mock interview sessions and behavioral coaching help you answer tough questions with confidence, clarity, and the right body language.",
      offers: ["Mock interview sessions", "Behavioral (STAR) answers", "Body language coaching", "Post-interview follow-up"]
    }
  },
  {
    title: "Salary Negotiation",
    desc: "Strategic compensation coaching to help you secure the best offer.",
    icon: <TrendingUp className="w-6 h-6" />,
    details: {
      image: "https://i.pinimg.com/736x/70/a1/f7/70a1f7360e9235c5f73b5cda3a2ba71a.jpg",
      longDesc: "Don't leave money on the table. We teach you how to research your market value and negotiate your total compensation package, including bonuses, equity, and perks.",
      offers: ["Market value research", "Negotiation scripts", "Offer analysis", "Benefits evaluation"]
    }
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-20 relative overflow-hidden min-h-screen">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header - Improved Responsiveness */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.2em] text-[10px] font-bold">Solutions for Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Expert Advice & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-zinc-500">Career Solutions.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm text-base md:text-lg pl-4 md:pl-6 border-l border-amber-500/30">
            From first impression to final negotiation, we provide the tools you need to dominate your industry.
          </p>
        </div>

        {/* Services Grid - Better Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedService(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[250px] md:h-[300px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-white/20 font-bold text-3xl md:text-4xl group-hover:text-amber-400/20 transition-colors">0{index + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors line-clamp-2 md:line-clamp-3">{item.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-amber-500 mt-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-2 md:group-hover:translate-y-0">
                VIEW DETAILS <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL - Optimized for Mobile Viewports */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white text-black rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh] lg:max-h-[85vh]"
            >
              {/* Close Button - Larger tap target for mobile */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-50 p-3 bg-black text-white rounded-full hover:bg-amber-600 transition-colors shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Content - Scrollable */}
              <div className="p-6 sm:p-10 md:p-14 md:w-3/5 overflow-y-auto order-2 md:order-1">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                  Professional Service
                </div>
                <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-zinc-900 leading-tight">
                  {selectedService.title}
                </h2>
                <p className="text-zinc-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {selectedService.details.longDesc}
                </p>
                
                <h3 className="text-zinc-900 font-bold text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span> What We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                  {selectedService.details.offers.map((offer, i) => (
                    <div key={i} className="p-3 md:p-4 border border-zinc-100 rounded-xl md:rounded-2xl bg-zinc-50 font-medium text-zinc-700 flex items-center gap-3 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 bg-amber-400 flex-shrink-0 rounded-full" />
                      {offer}
                    </div>
                  ))}
                </div>

                <button className="w-full md:w-auto bg-amber-500 text-white px-8 md:px-10 py-4 rounded-xl md:rounded-2xl font-bold hover:bg-amber-600 transition-all">
                  Contact Us Today
                </button>
              </div>

              {/* Right Side: Image - Hidden or Shorter on mobile */}
              <div className="md:w-2/5 h-48 sm:h-64 md:h-auto relative order-1 md:order-2">
                <img 
                  src={selectedService.details.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-white md:to-transparent" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Service;