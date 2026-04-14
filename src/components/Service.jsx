import React, { useState } from "react";
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
import Footer from "../components/Footer";

const services = [
  {
    title: "Expert Advice",
    desc: "Personalized expert advice to help you make confident career decisions.",
    icon: <Briefcase className="w-6 h-6" />,
    details: {
      image: "https://images.unsplash.com/photo-1521791136364-708a16ac3309?q=80&w=800",
      longDesc: "Our expert advisors provide personalized career insights based on your skills, experience, and career goals to help you make informed decisions. We focus on understanding your strengths and aspirations, guiding you toward the right opportunities and long-term career success.",
      offers: ["One-on-one expert consultation", "Career clarity & direction", "Industry-specific insights", "Actionable career advice"]
    }
  },
  {
    title: "Resume Enhancement",
    desc: "Professionally crafted resumes that highlight your skills and achievements.",
    icon: <FileText className="w-6 h-6" />,
    details: {
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800",
      longDesc: "Your resume is your first impression. We help you stand out from the crowd by crafting ATS-friendly resumes that highlight your core strengths and quantifiable achievements in a professional layout.",
      offers: ["ATS-friendly formatting", "Keyword optimization", "Compelling summary writing", "Modern visual templates"]
    }
  },
  {
    title: "Profile Optimization",
    desc: "Optimize your professional profiles to attract recruiters organically.",
    icon: <UserCheck className="w-6 h-6" />,
    details: {
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800",
      longDesc: "Social selling is key to career growth. We optimize your LinkedIn and other professional profiles to ensure you appear in recruiter searches and present a highly professional brand to the industry.",
      offers: ["LinkedIn profile overhaul", "Headline & Bio writing", "Skills endorsement strategy", "Profile visibility audit"]
    }
  },
  {
    title: "Job Application Strategy",
    desc: "A structured roadmap to apply smarter and increase interview calls.",
    icon: <Map className="w-6 h-6" />,
    details: {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
      longDesc: "Stop applying randomly. We provide a tailored roadmap to target the right companies, use the hidden job market, and track your applications effectively to maximize your success rate.",
      offers: ["Target company listing", "Networking techniques", "Hidden job market tips", "Application tracking system"]
    }
  },
  {
    title: "Interview Preparation",
    desc: "Build confidence and ace interviews with expert coaching sessions.",
    icon: <MessageSquare className="w-6 h-6" />,
    details: {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
      longDesc: "Interviews can be stressful. Our mock interview sessions and behavioral coaching help you answer tough questions with confidence, clarity, and the right body language.",
      offers: ["Mock interview sessions", "Behavioral (STAR) answers", "Body language coaching", "Post-interview follow-up"]
    }
  },
  {
    title: "Salary Negotiation",
    desc: "Strategic compensation coaching to help you secure the best offer.",
    icon: <TrendingUp className="w-6 h-6" />,
    details: {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
      longDesc: "Don't leave money on the table. We teach you how to research your market value and negotiate your total compensation package, including bonuses, equity, and perks.",
      offers: ["Market value research", "Negotiation scripts", "Offer analysis", "Benefits evaluation"]
    }
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden min-h-screen">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">Solutions for Success</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Expert Advice & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-zinc-500">Career Solutions.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-lg text-white/80 pl-6 border-l border-amber-500/30">
            From first impression to final negotiation, we provide the tools you need to dominate your industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedService(item)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/5 bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[300px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-white font-bold text-4xl group-hover:text-amber-400/40 transition-colors">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors line-clamp-3">{item.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                VIEW DETAILS <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white text-black rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-20 p-2 bg-black text-white rounded-full hover:bg-amber-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Content */}
              <div className="p-8 md:p-14 md:w-3/5 overflow-y-auto">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                  Professional Service
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 leading-tight">
                  {selectedService.title}
                </h2>
                <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                  {selectedService.details.longDesc}
                </p>
                
                <h3 className="text-zinc-900 font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span> What We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {selectedService.details.offers.map((offer, i) => (
                    <div key={i} className="p-4 border border-zinc-100 rounded-2xl bg-zinc-50 font-medium text-zinc-700 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {offer}
                    </div>
                  ))}
                </div>

                <button className="w-full sm:w-auto bg-amber-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                  Contact Us Today
                </button>
              </div>

              {/* Right Side: Image */}
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedService.details.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent md:bg-gradient-to-t" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Service;