import React from "react";
import { Check, Zap, Star, Shield, Trophy, Users, Building2 } from "lucide-react";
import Footer from "../components/Footer"; // 👈 adjust path if needed

const Shop = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
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
      price: "4,999",
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
      price: "9,999",
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

  return (
    <div className="min-h-screen bg-[#050505] py-20 px-6 text-white">

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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Placements", value: "500+", icon: <Trophy className="w-4 h-4 text-amber-500" /> },
            { label: "Success Rate", value: "94%", icon: <Star className="w-4 h-4 text-blue-400" /> },
            { label: "Community", value: "10k+", icon: <Users className="w-4 h-4 text-emerald-400" /> },
            { label: "Partners", value: "50+", icon: <Building2 className="w-4 h-4 text-purple-400" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start mb-20">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-amber-500/10 border border-amber-500 md:scale-105"
                  : "bg-white/[0.03] border border-white/10"
              } rounded-2xl p-6 shadow-lg hover:-translate-y-1`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-amber-500 text-black text-[9px] font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    plan.highlight ? "bg-amber-500/20" : "bg-white/5"
                  }`}
                >
                  {plan.icon}
                </div>

                <h3 className="text-lg font-bold mt-3">{plan.name}</h3>
                <p className="text-white/50 text-xs">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-5">
                <span className="text-3xl font-bold">₹{plan.price}</span>
                <span className="text-white/30 text-xs"> /package</span>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-5">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-white/70 text-xs">{f}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full py-2.5 rounded-lg text-xs font-semibold transition ${
                  plan.highlight
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}

        </div>

      </div>

      {/* 🔥 FOOTER ADDED */}
      <Footer />
    </div>
  );
};

export default Shop;