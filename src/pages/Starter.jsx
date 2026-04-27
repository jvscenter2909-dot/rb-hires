import React, { useState } from "react";
import {
  ShoppingCart,
  ChevronDown,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  ArrowLeft // Added for the back button icon
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Starter = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What exactly does ApplySure guarantee?", a: "ApplySure™ guarantees the submission of 100–120 verified job applications within 100 working days. The guarantee applies only to application execution, not interview calls or job offers." },
    { q: "Are the applications automated or manual?", a: "All applications are manually submitted by RB Hires’ team to ensure relevance, accuracy, and proper role alignment. No bulk or automated submissions are used." },
    { q: "Which platforms do you apply to?", a: "We apply through Company career portals, LinkedIn Jobs, and trusted job boards relevant to your role and location." },
    { q: "Can I track my applications?", a: "Yes. You receive a shared application tracking sheet showing applied roles, companies, and dates." },
    { q: "What if 100–120 applications are not completed in time?", a: "If the guaranteed number is not completed within 100 working days, RB Hires will complete the remaining applications at no extra cost." },
    { q: "Does ApplySure guarantee interviews or a job?", a: "No. ApplySure™ does not guarantee interviews, job offers, salary outcomes, or visa sponsorship." },
    { q: "What is required from the candidate?", a: "You must approve your resume on time, provide accurate information, and remain responsive during the program." }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const features = [
    {
      icon: <Target className="w-4 h-4" />,
      title: "Applications",
      desc: "100–120 Job Applications submitted strategically."
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: "Resume",
      desc: "Resume Optimization for ATS performance."
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: "LinkedIn",
      desc: "LinkedIn Profile Audit to boost visibility."
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "Alerts",
      desc: "Smart Job Alerts based on your profile."
    }
  ];
const navigate = useNavigate();

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-amber-500 selection:text-black font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">

        {/* ✅ BACK BUTTON AREA */}
        <div className="mb-8">
          <Link 
            to="/shop" 
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors duration-300"
          >
            <div className="p-2 rounded-full border border-white/10 group-hover:border-amber-500/50 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Shop</span>
          </Link>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Left Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-transparent rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="RB Hires ApplySure"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-50 group-hover:opacity-80 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent"></div>

              <div className="absolute top-8 left-8">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-500">
                    Elite Tier Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-amber-500/50" />
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">
                Strategic Placement
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
              CAREER<br /><span className="text-amber-500">ACCELERATOR</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Stop waiting for opportunities. <span className="text-white font-bold">RB Hires</span> is a high-velocity application engine.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((item, index) => (
                <div key={index} className="space-y-1 hover:scale-105 transition duration-300">
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    {item.icon}
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium uppercase">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Price + Button */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/5">
              <div>
                <span className="text-3xl font-black">$1,500.00</span>
                <span className="block text-[10px] text-gray-600 uppercase">All-Inclusive Fee</span>
              </div>

             <button 
  onClick={() => navigate("/job")}
  className="flex-grow w-full py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] rounded-xl hover:bg-amber-500 transition-all flex items-center justify-center gap-3"
>
  <ShoppingCart className="w-4 h-4" />
  Secure Your Slot
</button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto pt-20 border-t border-white/5">
          <h2 className="text-4xl font-black text-center mb-10 italic uppercase">
            FREQUENTLY ASKED <span className="text-amber-500">INTEL</span>
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-3 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-center p-5 text-left transition-colors font-bold uppercase text-[11px] tracking-widest ${openFaq === index ? 'bg-white/5 text-amber-500' : 'hover:bg-white/5'}`}
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-amber-500' : 'text-gray-500'}`} />
              </button>

              {openFaq === index && (
                <div className="p-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 bg-black/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="mt-32 p-12 bg-amber-500/5 border border-amber-500/10 rounded-[3rem] text-center">
          <ShieldCheck className="mx-auto text-amber-500 mb-6 w-10 h-10" />
          <h3 className="text-2xl font-black uppercase italic mb-4">
            RB HIRES FULFILL GUARANTEE
          </h3>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest max-w-xl mx-auto leading-loose">
            Remaining applications will be completed at no extra cost if the 100-day target is not met.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Starter;