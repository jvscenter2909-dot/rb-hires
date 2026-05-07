import React, { useState } from "react";
import { 
  ShoppingCart, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Users, 
  PhoneCall, 
  Globe,
  ArrowLeft 
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Professional = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What does the interview guarantee mean?", a: "InterviewSure™ guarantees 12–22 interview opportunities, depending on your experience, technology stack, and market demand." },
    { q: "Are these final interviews?", a: "The interviews may include HR screening calls, technical interviews, or early-stage interview rounds. Final selection or job offers are not guaranteed." },
    { q: "What happens if the interview count is not met?", a: "If the committed interview count is not achieved within 100 working days, RB Hires consulting will continue interview marketing at no extra cost until the guarantee is fulfilled." },
    { q: "What is included in interview preparation?", a: "You receive Mock interviews (technical and HR), Resume walkthrough coaching, Common interview Q&A, and Feedback-based improvement sessions." },
    { q: "Are missed or rejected interviews counted?", a: "No. Interviews missed, declined, or rejected by the candidate are not counted toward the guarantee." },
    { q: "Is visa sponsorship included?", a: "No. InterviewSure™ does not guarantee visa sponsorship, relocation, or salary outcomes." },
    { q: "What are my responsibilities as a candidate?", a: "You must attend mock interviews, be available for real interview calls, apply feedback, and remain responsive." }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const navigate = useNavigate();

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-amber-500 selection:text-black font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">

        {/* BACK BUTTON */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/shop" 
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors duration-300"
          >
            <div className="p-2 rounded-full border border-white/10 group-hover:border-amber-500/50">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Shop</span>
          </Link>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          
          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 bg-[#0a0a0a]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="RB Hires InterviewSure"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <div className="bg-amber-500 text-black px-3 sm:px-4 py-1 rounded-full flex items-center gap-2 shadow-lg shadow-amber-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Most Popular Tier</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Conversion Engine</span>
              <span className="h-[1px] w-12 bg-white/10" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-[0.9] md:leading-[0.8] mb-6 md:mb-8">
              INTERVIEW<br />
              <span className="text-amber-500 underline decoration-white/10 underline-offset-8">SURE</span>
            </h1>
            
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg">
              Designed for candidates who want <span className="text-white font-bold italic">interviews, not just applications.</span> We focus on advanced resume positioning and recruiter outreach to get you in the room.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-y-8 md:gap-x-12 mb-10 md:mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest">1-on-1 Prep</span>
                </div>
                <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">Technical & HR mock sessions with feedback.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white">
                  <PhoneCall className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest">Recruiter Reach</span>
                </div>
                <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">Direct outreach to active hiring managers.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest">ATS Mastery</span>
                </div>
                <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">Advanced LinkedIn & Resume optimization.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white">
                  <Globe className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest">Reporting</span>
                </div>
                <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">Full interview tracking and funnel analysis.</p>
              </div>
            </div>

            {/* PRICE */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-6 md:pt-8 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter">$2,500.00</span>
                <span className="text-[10px] text-amber-500 font-black uppercase tracking-widest">Professional Tier</span>
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

        {/* DELIVERABLES */}
        <div className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-12 bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem]">

            <div>
              <h3 className="text-xl sm:text-2xl font-black italic uppercase mb-6 md:mb-8">
                Included <span className="text-amber-500">Deliverables</span>
              </h3>

              <div className="space-y-4">
                {["All Starter Features Included", "Direct Referrals to Tier-1", "Soft Skills Training", "Lifetime Access to Network", "Priority Recruiter Outreach"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-12 flex flex-col justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black italic leading-tight text-white/20 uppercase tracking-tighter">
                We guarantee <span className="text-white">12–22 Interview</span> opportunities or we work for <span className="text-amber-500">Free.</span>
              </p>
            </div>

          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto pt-12 md:pt-20 border-t border-white/5">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">RB Hires Intelligence</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase italic">InterviewSure <span className="text-amber-500">FAQ</span></h2>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <div key={index} className="group border rounded-2xl border-white/5">

                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left">
                  <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] ${openFaq === index ? "text-amber-500" : "text-white/80"}`}>
                    {faq.q}
                  </span>

                  <ChevronDown className={`w-4 h-4 transition ${openFaq === index ? "rotate-180 text-amber-500" : "text-gray-600"}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-6 text-gray-500 text-xs leading-relaxed font-bold border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* GUARANTEE */}
        <div className="mt-20 md:mt-32 p-8 sm:p-10 md:p-16 bg-gradient-to-br from-[#0a0a0a] to-black border border-amber-500/20 rounded-[2rem] md:rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>

          <ShieldCheck className="w-12 sm:w-16 h-12 sm:h-16 text-amber-500 mx-auto mb-6 md:mb-8" />

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase italic mb-4 md:mb-6 tracking-tighter">
            The 100-Day Interview Commitment
          </h3>

          <p className="text-gray-500 max-w-2xl mx-auto text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-loose">
            If the committed interview count (12–22) is not achieved within 100 working days, 
            <span className="text-white block mt-3 text-sm italic">
              RB Hires Consulting will continue interview marketing at <span className="text-amber-500 underline underline-offset-4">Zero Additional Cost</span> until the guarantee is fulfilled.
            </span>
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Professional;