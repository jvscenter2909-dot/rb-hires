// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   FileText,
//   UserCheck,
//   Map,
//   MessageSquare,
//   TrendingUp,
//   ArrowUpRight,
//   X,
// } from "lucide-react";
// import Footer from "../components/Footer";

// const services = [
//   {
//     title: "Expert Advice",
//     desc: "Personalized expert advice to help you make confident career decisions.",
//     icon: <Briefcase className="w-6 h-6" />,
//     details: {
//       image: "https://i.pinimg.com/1200x/c4/da/6a/c4da6a4951f2135b9b7b5091e0f3af97.jpg",
//       longDesc: "Our expert advisors provide personalized career insights based on your skills, experience, and career goals to help you make informed decisions. We focus on understanding your strengths and aspirations, guiding you toward the right opportunities and long-term career success.",
//       offers: ["One-on-one expert consultation", "Career clarity & direction", "Industry-specific insights", "Actionable career advice"]
//     }
//   },
//   {
//     title: "Resume Enhancement",
//     desc: "Professionally crafted resumes that highlight your skills and achievements.",
//     icon: <FileText className="w-6 h-6" />,
//     details: {
//       image: "https://i.pinimg.com/736x/14/13/99/141399a8b94d2ad0fe25f567372dbe8a.jpg",
//       longDesc: "Your resume is your first impression. We help you stand out from the crowd by crafting ATS-friendly resumes that highlight your core strengths and quantifiable achievements in a professional layout.",
//       offers: ["ATS-friendly formatting", "Keyword optimization", "Compelling summary writing", "Modern visual templates"]
//     }
//   },
//   {
//     title: "Profile Optimization",
//     desc: "Optimize your professional profiles to attract recruiters organically.",
//     icon: <UserCheck className="w-6 h-6" />,
//     details: {
//       image: "https://i.pinimg.com/736x/ea/e1/24/eae124894b63a41758a311c5da351143.jpg",
//       longDesc: "Social selling is key to career growth. We optimize your LinkedIn and other professional profiles to ensure you appear in recruiter searches and present a highly professional brand to the industry.",
//       offers: ["LinkedIn profile overhaul", "Headline & Bio writing", "Skills endorsement strategy", "Profile visibility audit"]
//     }
//   },
//   {
//     title: "Job Application Strategy",
//     desc: "A structured roadmap to apply smarter and increase interview calls.",
//     icon: <Map className="w-6 h-6" />,
//     details: {
//       image: "https://i.pinimg.com/1200x/d9/0d/db/d90ddb4da9229c71975895f0cfbfe826.jpg",
//       longDesc: "Stop applying randomly. We provide a tailored roadmap to target the right companies, use the hidden job market, and track your applications effectively to maximize your success rate.",
//       offers: ["Target company listing", "Networking techniques", "Hidden job market tips", "Application tracking system"]
//     }
//   },
//   {
//     title: "Interview Preparation",
//     desc: "Build confidence and ace interviews with expert coaching sessions.",
//     icon: <MessageSquare className="w-6 h-6" />,
//     details: {
//       image: "https://i.pinimg.com/236x/40/32/da/4032da0c316119217c3179f2298323e7.jpg",
//       longDesc: "Interviews can be stressful. Our mock interview sessions and behavioral coaching help you answer tough questions with confidence, clarity, and the right body language.",
//       offers: ["Mock interview sessions", "Behavioral (STAR) answers", "Body language coaching", "Post-interview follow-up"]
//     }
//   },
//   {
//     title: "Salary Negotiation",
//     desc: "Strategic compensation coaching to help you secure the best offer.",
//     icon: <TrendingUp className="w-6 h-6" />,
//     details: {
//       image: "https://i.pinimg.com/736x/70/a1/f7/70a1f7360e9235c5f73b5cda3a2ba71a.jpg",
//       longDesc: "Don't leave money on the table. We teach you how to research your market value and negotiate your total compensation package, including bonuses, equity, and perks.",
//       offers: ["Market value research", "Negotiation scripts", "Offer analysis", "Benefits evaluation"]
//     }
//   },
// ];

// const Service = ({ isFullPage = false }) => {
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     if (selectedService) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [selectedService]);

//   return (
//     <div className="flex flex-col min-h-screen bg-black">
//       {/* --- MAIN SERVICE SECTION --- */}
//       <section className="relative text-white py-16 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden flex-grow">
        
//         {/* Background Texture */}
//         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

//         <div className="relative max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="h-px w-8 bg-amber-500"></span>
//                 <span className="text-amber-500 uppercase tracking-[0.2em] text-[10px] font-bold">Solutions for Success</span>
//               </div>
//               <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
//                 Expert Advice & <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-zinc-500">Career Solutions.</span>
//               </h2>
//             </div>
//             <p className="text-zinc-400 max-w-sm text-base md:text-lg pl-4 md:pl-6 border-l border-amber-500/30">
//               From first impression to final negotiation, we provide the tools you need to dominate your industry.
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {services.map((item, index) => (
//               <motion.div
//                 key={index}
//                 onClick={() => setSelectedService(item)}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//                 className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[250px] md:h-[300px]"
//               >
//                 <div>
//                   <div className="flex justify-between items-start mb-6">
//                     <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
//                       {item.icon}
//                     </div>
//                     <span className="text-white/20 font-bold text-3xl md:text-4xl group-hover:text-amber-400/20 transition-colors">0{index + 1}</span>
//                   </div>
//                   <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">{item.title}</h3>
//                   <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors line-clamp-2">{item.desc}</p>
//                 </div>
//                 <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-amber-500 mt-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
//                   VIEW DETAILS <ArrowUpRight className="w-4 h-4" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* --- MODAL (POPUPS) --- */}
//         <AnimatePresence>
//           {selectedService && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-10">
//               <motion.div 
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                 onClick={() => setSelectedService(null)}
//                 className="absolute inset-0 bg-black/95 backdrop-blur-md"
//               />
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="relative w-full max-w-5xl bg-white text-black rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
//               >
//                 <button 
//                   onClick={() => setSelectedService(null)}
//                   className="absolute top-4 right-4 z-50 p-3 bg-black text-white rounded-full"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <div className="p-6 sm:p-10 md:p-14 md:w-3/5 overflow-y-auto order-2 md:order-1">
//                   <h2 className="text-2xl md:text-5xl font-bold mb-4 text-zinc-900">{selectedService.title}</h2>
//                   <p className="text-zinc-600 text-base md:text-lg mb-6 leading-relaxed">{selectedService.details.longDesc}</p>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
//                     {selectedService.details.offers.map((offer, i) => (
//                       <div key={i} className="p-3 border border-zinc-100 rounded-xl bg-zinc-50 flex items-center gap-3 text-sm">
//                         <div className="w-1.5 h-1.5 bg-amber-400 flex-shrink-0 rounded-full" />
//                         {offer}
//                       </div>
//                     ))}
//                   </div>
//                   <button className="w-full md:w-auto bg-amber-500 text-white px-8 py-4 rounded-xl font-bold">Contact Us Today</button>
//                 </div>

//                 <div className="md:w-2/5 h-48 md:h-auto relative order-1 md:order-2">
//                   <img src={selectedService.details.image} alt={selectedService.title} className="w-full h-full object-cover" />
//                 </div>
//               </motion.div>
//             </div>
//           )}
//         </AnimatePresence>
//       </section>

//       {/* --- 🔶 FOOTER LOGIC --- */}
//       {/* Home page પર ડબલ ફૂટર ન આવે તે માટે logic: 
//           જો isFullPage true હશે (જે સર્વિસ પેજમાં હશે), તો જ ફૂટર બતાવશે. */}
//       {isFullPage && <Footer />}
//     </div>
//   );
// };

// export default Service;

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
  ArrowLeft,
} from "lucide-react";
import Footer from "../components/Footer";

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

const Service = ({ isFullPage = false }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setShowContactForm(false); // Reset form state when modal closes
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* --- MAIN SERVICE SECTION --- */}
      <section className="relative text-white py-16 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden flex-grow">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
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

          {/* Services Grid */}
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
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors line-clamp-2">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-amber-500 mt-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                  VIEW DETAILS <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- MODAL (POPUPS) --- */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => { setSelectedService(null); setShowContactForm(false); }}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-5xl bg-white text-black rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
              >
                {/* Close Button */}
                <button 
                  onClick={() => { setSelectedService(null); setShowContactForm(false); }}
                  className="absolute top-4 right-4 z-50 p-3 bg-black text-white rounded-full hover:scale-110 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Content Area */}
                <div className="p-6 sm:p-10 md:p-14 md:w-3/5 overflow-y-auto order-2 md:order-1">
                  <AnimatePresence mode="wait">
                    {!showContactForm ? (
                      // SERVICE DETAILS VIEW
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                      >
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-zinc-900">{selectedService.title}</h2>
                        <p className="text-zinc-600 text-base md:text-lg mb-6 leading-relaxed">{selectedService.details.longDesc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {selectedService.details.offers.map((offer, i) => (
                            <div key={i} className="p-3 border border-zinc-100 rounded-xl bg-zinc-50 flex items-center gap-3 text-sm">
                              <div className="w-1.5 h-1.5 bg-amber-400 flex-shrink-0 rounded-full" />
                              {offer}
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={() => setShowContactForm(true)}
                          className="w-full md:w-auto bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                        >
                          Contact Us Today
                        </button>
                      </motion.div>
                    ) : (
                      // CONTACT FORM VIEW
                      <motion.div
                        key="contact"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full"
                      >
                        <button 
                          onClick={() => setShowContactForm(false)}
                          className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-6 hover:underline"
                        >
                          <ArrowLeft className="w-4 h-4" /> BACK TO DETAILS
                        </button>
                        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-zinc-900">Get In Touch</h2>
                        <p className="text-zinc-500 mb-8">Fill out the form below for {selectedService.title}.</p>
                        
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-amber-500" />
                            <input type="email" placeholder="Email Address" className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-amber-500" />
                          </div>
                          <input type="text" placeholder="Subject" defaultValue={selectedService.title} className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-amber-500" />
                          <textarea rows="4" placeholder="How can we help you?" className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-amber-500"></textarea>
                          <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors">Send Message</button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Side: Image Area */}
                <div className="md:w-2/5 h-48 md:h-auto relative order-1 md:order-2">
                  <img 
                    src={selectedService.details.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* --- FOOTER LOGIC --- */}
      {isFullPage && <Footer />}
    </div>
  );
};

export default Service;