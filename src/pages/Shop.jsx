// import React from "react";
// import { Check, Zap, Star, Shield, Trophy, Users, Building2 } from "lucide-react";
// import Footer from "../components/Footer"; 

// const Shop = () => {
//   const plans = [
//     {
//       name: "Starter",
//       price: "$1500",
//       description: "Perfect for freshers looking for guidance.",
//       features: [
//         "Resume Optimization",
//         "LinkedIn Profile Audit",
//         "Basic Interview Prep",
//         "Job Alerts",
//       ],
//       icon: <Zap className="w-5 h-5 text-blue-400" />,
//       highlight: false,
//       buttonText: "Get Started",
//     },
//     {
//       name: "Professional",
//       price: "$2500",
//       description: "Comprehensive support for serious job seekers.",
//       features: [
//         "All Starter Features",
//         "1-on-1 Mock Interviews",
//         "Direct Referrals",
//         "Soft Skills Training",
//         "Lifetime Portal Access",
//       ],
//       icon: <Star className="w-5 h-5 text-amber-500" />,
//       highlight: true,
//       buttonText: "Choose Professional",
//     },
//     {
//       name: "Executive",
//       price: "$5000",
//       description: "Advanced leadership and tech coaching.",
//       features: [
//         "Premium 1:1 Mentorship",
//         "Salary Negotiation Support",
//         "Executive Branding",
//         "Portfolio Development",
//       ],
//       icon: <Shield className="w-5 h-5 text-emerald-400" />,
//       highlight: false,
//       buttonText: "Contact Us",
//     },
//   ];

//   return (
//     // આ div આખા પેજને કંટ્રોલ કરશે
//     <div className="flex flex-col min-h-screen bg-[#050505]">
      
//       {/* મેઈન કન્ટેન્ટ સેક્શન - flex-grow ના કારણે તે ફૂટરને નીચે ધકેલશે */}
//       <main className="flex-grow py-20 px-6 text-white">
//         <div className="max-w-7xl mx-auto">

//           {/* Header */}
//           <div className="text-center mb-16">
//             <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">
//               Pricing Plans
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold mt-6">
//               Ready to <span className="text-amber-500">Level Up</span> Your Career?
//             </h2>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {[
//               { label: "Placements", value: "500+", icon: <Trophy className="w-4 h-4 text-amber-500" /> },
//               { label: "Success Rate", value: "94%", icon: <Star className="w-4 h-4 text-blue-400" /> },
//               { label: "Community", value: "10k+", icon: <Users className="w-4 h-4 text-emerald-400" /> },
//               { label: "Partners", value: "50+", icon: <Building2 className="w-4 h-4 text-purple-400" /> },
//             ].map((stat, i) => (
//               <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
//                 <div className="flex justify-center mb-2">{stat.icon}</div>
//                 <div className="text-xl font-bold">{stat.value}</div>
//                 <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pricing Cards */}
//           <div className="grid lg:grid-cols-3 gap-6 items-start mb-20">
//             {plans.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`relative transition-all duration-300 ${
//                   plan.highlight
//                     ? "bg-amber-500/10 border border-amber-500 md:scale-105"
//                     : "bg-white/[0.03] border border-white/10"
//                 } rounded-2xl p-6 shadow-lg hover:-translate-y-1`}
//               >
//                 {plan.highlight && (
//                   <div className="absolute top-0 right-0 bg-amber-500 text-black text-[9px] font-bold px-3 py-1 rounded-bl-lg">
//                     Popular
//                   </div>
//                 )}

//                 <div className="mb-4">
//                   <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${
//                       plan.highlight ? "bg-amber-500/20" : "bg-white/5"
//                     }`}>
//                     {plan.icon}
//                   </div>
//                   <h3 className="text-lg font-bold mt-3">{plan.name}</h3>
//                   <p className="text-white/50 text-xs">{plan.description}</p>
//                 </div>

//                 <div className="mb-5">
//                   <span className="text-3xl font-bold">₹{plan.price}</span>
//                   <span className="text-white/30 text-xs"> /package</span>
//                 </div>

//                 <div className="space-y-2 mb-5">
//                   {plan.features.map((f, i) => (
//                     <div key={i} className="flex items-center gap-2">
//                       <Check className="w-3.5 h-3.5 text-amber-500" />
//                       <span className="text-white/70 text-xs">{f}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button className={`w-full py-2.5 rounded-lg text-xs font-semibold transition ${
//                     plan.highlight
//                       ? "bg-amber-500 text-black hover:bg-amber-400"
//                       : "bg-white/10 hover:bg-white/20"
//                   }`}>
//                   {plan.buttonText}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Shop;

import React, { useState } from "react";
import { Check, Zap, Star, Shield, Trophy, Users, Building2 } from "lucide-react";
import Footer from "../components/Footer";

const Shop = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const plans = [
    {
      name: "Starter",
      price: "1500",
      currency: "$",
      description: "Perfect for freshers looking for guidance.",
      features: [
        "Resume Optimization",
        "LinkedIn Profile Audit",
        "Basic Interview Prep",
        "Job Alerts",
      ],
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      highlight: false,
      buttonText: "Get Started",
    },
    
    {
      name: "Professional",
      price: "2500",
      currency: "$",
      description: "Comprehensive support for serious job seekers.",
      features: [
        "All Starter Features",
        "1-on-1 Mock Interviews",
        "Direct Referrals",
        "Soft Skills Training",
        "Lifetime Portal Access",
      ],
      icon: <Star className="w-5 h-5 text-amber-500" />,
      highlight: true,
      buttonText: "Choose Professional",
    },
    {
      name: "Executive",
      price: "5000",
      currency: "$",
      description: "Advanced leadership and tech coaching.",
      features: [
        "Premium 1:1 Mentorship",
        "Salary Negotiation Support",
        "Executive Branding",
        "Portfolio Development",
      ],
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      highlight: false,
      buttonText: "Contact Us",
    },
  ];

const faqs = {
  1500: [
    {
      q: "What exactly does ApplySure guarantee?",
      a: "ApplySure™ guarantees the submission of 100–120 verified job applications within 100 working days. The guarantee applies only to application execution, not interview calls or job offers.",
    },
    {
      q: "Are the applications automated or manual?",
      a: "All applications are manually submitted by Technexa’s team to ensure relevance, accuracy, and proper role alignment. No bulk or automated submissions are used.",
    },
    {
      q: "Which platforms do you apply to?",
      a: "We apply through: Company career portals, LinkedIn Jobs, Trusted job boards relevant to your role and location",
    },
    {
      q: "Can I track my applications?",
      a: "Yes. You receive a shared application tracking sheet showing applied roles, companies, and dates.",
    },
    {
      q: "What if 100–120 applications are not completed in time?",
      a: "If the guaranteed number is not completed within 100 working days, Technexa will complete the remaining applications at no extra cost.",
    },
    {
      q: "Does ApplySure guarantee interviews or a job?",
      a: "No. ApplySure™ does not guarantee interviews, job offers, salary outcomes, or visa sponsorship.",
    },
    {
      q: "What is required from the candidate?",
      a: "You must approve your resume on time, provide accurate information, and remain responsive during the program.",
    },
  ],

  2500: [
    {
      q: "What does the interview guarantee mean?",
      a: "InterviewSure™ guarantees 12–22 interview opportunities, depending on your experience, technology stack, and market demand.",
    },
    {
      q: "Are these final interviews?",
      a: "The interviews may include HR screening calls, technical interviews, or early-stage interview rounds. Final selection or job offers are not guaranteed.",
    },
    {
      q: "What happens if the interview count is not met?",
      a: "If the committed interview count is not achieved within 100 working days, RB Hires consulting will continue interview marketing at no additional cost until the guarantee is fulfilled.",
    },
    {
      q: "What is included in interview preparation?",
      a: "Mock interviews (technical and HR), Resume walkthrough coaching, Common interview Q&A, Feedback-based improvement sessions",
    },
    {
      q: "Are missed or rejected interviews counted?",
      a: "No. Interviews missed, declined, or rejected by the candidate are not counted toward the guarantee.",
    },
    {
      q: "Is visa sponsorship included?",
      a: "No. InterviewSure™ does not guarantee visa sponsorship, relocation, or salary outcomes.",
    },
    {
      q: "What are my responsibilities as a candidate?",
      a: "You must attend mock interviews, be available for real interview calls, apply feedback, and remain responsive.",
    },
  ],

  5000: [
    {
      q: "What job guarantee does JobSure provide?",
      a: "JobSure guarantees job placement within 180 days in a full-time, contract, or contract-to-hire role aligned with your skills and experience.",
    },
    {
      q: "What happens if I don’t get a job in 180 days?",
      a: "If you do not secure a job within 180 days, refund terms will apply as outlined in our company policy.",
    },
    {
      q: "Are there any conditions for the refund?",
      a: "Yes. Refunds are not applicable if the candidate misses or declines interviews, is unresponsive or non-cooperative, rejects reasonable job offers, provides incorrect information, or violates program guidelines.",
    },
    {
      q: "Is technical training included?",
      a: "Yes. If required, technology-specific training and interview-focused upskilling are provided at no additional cost.",
    },
    {
      q: "Can I choose the job location or salary?",
      a: "We align roles with your preferences, but location, salary, and employer decisions are not guaranteed.",
    },
    {
      q: "Will RB Hires consulting apply for jobs on my behalf?",
      a: "Yes. Technexa manages job applications, recruiter outreach, and follow-ups throughout the program.",
    },
  ],
};

  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <main className="flex-grow py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6">
              Ready to <span className="text-amber-500">Level Up</span> Your Career?
            </h2>
          </div>

          {/* Plans */}
          <div className="grid lg:grid-cols-3 gap-6 mb-20 items-start">
            {plans.map((plan, index) => (
              <div key={index} className={`rounded-2xl p-6 border h-fit self-start ${plan.highlight ? "border-amber-500 bg-amber-500/10" : "border-white/10 bg-white/5"}`}>
                <div className="flex items-center gap-2">
                  {plan.icon}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                </div>
                <p className="text-white/50 text-sm mt-2">{plan.description}</p>
               <div className="text-3xl font-bold mt-4">
  {plan.currency}{plan.price}
</div>

                <div className="mt-4 space-y-2">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex gap-2 items-center text-xs text-white/70">
                      <Check className="w-3 h-3 text-amber-500" />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-2 bg-amber-500 text-black rounded-lg text-sm">
                  {plan.buttonText}
                </button>

                {/* FAQs */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">FAQs</h4>
                  <div className="space-y-2">
                    {faqs[plan.price].map((item, i) => {
                      const id = plan.price + "-" + i;
                      return (
                        <div key={id} className="border border-white/10 rounded-lg">
                          <button
                            className="w-full text-left p-3 text-xs flex justify-between"
                            onClick={() => toggleFaq(id)}
                          >
                            {item.q}
                            <span>{openFaq === id ? "-" : "+"}</span>
                          </button>
                          {openFaq === id && (
                            <div className="p-3 text-xs text-white/60">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;