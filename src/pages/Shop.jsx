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

// import React, { useState } from "react";
// import { Check, ShoppingCart, Plus, Minus, Zap, Star, Shield } from "lucide-react";
// import Footer from "../components/Footer";

// const Shop = () => {
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (id) => {
//     setOpenFaq(openFaq === id ? null : id);
//   };

// const products = [
//   {
//     id: 1,
//     name: "Starter",
//     brand: "Starter",
//     price: "1,500.00",
//     img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
//     description: "Perfect for freshers looking for guidance.",
//     features: [
//       "100–120 Job Applications",
//       "Resume Optimization",
//       "LinkedIn Profile Audit",
//       "Job Alerts",
//     ],
//     icon: <Zap className="w-5 h-5 text-blue-400" />,
//     buttonText: "Get Started",
//   },
//   {
//     id: 2,
//     name: "Professional",
//     brand: "Professional",
//     price: "2,500.00",
//     img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//     description: "Comprehensive support for serious job seekers.",
//     features: [
//       "All Starter Features",
//       "1-on-1 Mock Interviews",
//       "Direct Referrals",
//       "Soft Skills Training",
//       "Lifetime Access",
//     ],
//     icon: <Star className="w-5 h-5 text-amber-500" />,
//     buttonText: "Choose Plan",
//   },
//   {
//     id: 3,
//     name: "Executive",
//     brand: "Executive",
//     price: "5,000.00",
//     img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
//     description: "Advanced leadership and full job placement support.",
//     features: [
//       "Placement Guarantee",
//       "Premium Mentorship",
//       "Salary Negotiation",
//       "Executive Branding",
//       "Portfolio Development",
//     ],
//     icon: <Shield className="w-5 h-5 text-emerald-400" />,
//     buttonText: "Contact Us",
//   },
// ];

//   const faqs = [
//     { q: "What exactly does ApplySure guarantee?", a: "100–120 verified job applications within 100 working days." },
//     { q: "Are applications manual?", a: "Yes, all applications are manually submitted by our team." },
//     { q: "What does interview guarantee mean?", a: "12–22 interview opportunities depending on market demand." },
//     { q: "What if I don't get a job?", a: "Refund terms apply as per company policy if placement isn't secured in 180 days." }
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#050505]">
//       <main className="flex-grow py-20 px-6">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Header */}
//           <div className="text-center mb-16">
//             <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">
//               Official Store
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold mt-6 text-white leading-tight">
//               Ready to <span className="text-amber-500 underline decoration-white/20 underline-offset-8">Level Up</span> Your Career?
//             </h2>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
//             {products.map((product) => (
//               <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col border border-white/5 hover:border-amber-500/50 transition-all duration-300">
                
//                 {/* Image Container */}
//                 <div className="relative p-6 bg-[#f9f9f9] flex flex-col items-center overflow-hidden">
//                   <div className="absolute top-4 left-4 bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded shadow-sm uppercase z-20">
//                     Sale!
//                   </div>
                  
//                   {/* Subtle Text in Background */}
//                   <div className="absolute top-4 right-4 text-black-200 font-black text-2xl italic tracking-tighter select-none">
//                     {product.name}
//                   </div>
                  
//                   {/* Illustration Area */}
//                   <div className="w-full h-48 mt-8 flex items-center justify-center relative">
//                     {/* Background Glow (Amber/Gold instead of Blue) */}
//                     <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
//                     <img 
//                       src={product.img} 
//                       alt={product.name} 
//                       className="max-h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>
//                 </div>

//                 {/* Content Area */}
//                 <div className="p-7 bg-white flex flex-col flex-grow">
//                   <h3 className="text-black font-bold text-xl mb-1 tracking-tight">{product.brand}</h3>
                  
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="text-black font-black text-2xl border-b-4 border-amber-500 pb-0.5">${product.price}</span>
//                   </div>
                  
//                   <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
//                     {product.description}
//                   </p>

//                   <button className="w-full md:w-fit px-8 py-3 bg-white border-2 border-black text-black font-bold rounded-xl hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2">
//                     <ShoppingCart className="w-4 h-4" />
//                     Add to cart
//                   </button>
//                 </div>
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

import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Starter",
      brand: "Career Kickstart",
      price: "1,500.00",
      oldPrice: "2,200.00",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", 
          features: [
      "100–120 Job Applications",
      "Resume Optimization",
      "LinkedIn Profile Audit",
      "Job Alerts",
    ],
    },
    {
      id: 2,
      name: "Professional",
      brand: "Career Accelerator",
      price: "2,500.00",
      oldPrice: "3,800.00",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tag: "Best Seller",
    features: [
      "All Starter Features",
      "1-on-1 Mock Interviews",
      "Direct Referrals",
      "Soft Skills Training",
      "Lifetime Access",
    ],
    },
    {
      id: 3,
      name: "Executive",
      brand: "Elite Placement",
      price: "5,000.00",
      oldPrice: "7,500.00",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        features: [
      "Placement Guarantee",
      "Premium Mentorship",
      "Salary Negotiation",
      "Executive Branding",
      "Portfolio Development",
    ],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-amber-500 selection:text-black font-sans">
      <main className="flex-grow py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* --- Refined Header Section --- */}
          <div className="flex flex-col items-center text-center mb-32">
             <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Technexa Store</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic leading-none">
              OWN THE MARKET. <br />
            </h2>
            <p className="mt-8 text-gray-500 text-xs md:text-sm uppercase tracking-[0.3em] font-medium max-w-lg">
              Elite career engineering for the next generation of industry leaders.
            </p>
          </div>

          {/* --- Product Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                
                {/* 1. Visual Card */}
                <div className="relative aspect-[3/4.5] w-full bg-[#0a0a0a] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-amber-500/50">
                  
                  {/* Image with subtle zoom */}
                  <div className="absolute inset-0">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                  </div>

                  {product.tag && (
                    <div className="absolute top-10 left-10 z-20">
                      <div className="bg-amber-500 text-black px-5 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl shadow-amber-500/20">
                        {product.tag}
                      </div>
                    </div>
                  )}

                  {/* Feature Content */}
                  <div className="absolute bottom-10 inset-x-10 z-20">
                    <p className="text-amber-500 text-[9px] font-black uppercase tracking-[0.3em] mb-6 border-l-2 border-amber-500 pl-4">Benefits</p>
                    <ul className="space-y-4 mb-10">
                      {product.features.map((f, i) => (
                        <li key={i} className="text-xs text-gray-200 font-bold flex items-center gap-3">
                           <div className="h-1.5 w-1.5 bg-amber-500 rounded-full" /> {f}
                        </li>
                      ))}
                    </ul>
                    
                  <button
  onClick={() => {
    if (product.name === "Starter") navigate("/starter");
    if (product.name === "Professional") navigate("/professional");
    if (product.name === "Executive") navigate("/executive");
  }}
  className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] rounded-2xl flex items-center justify-center gap-3 hover:bg-amber-500 transition-all duration-500"
>
  View Plan <ArrowRight className="w-4 h-4" />
</button>
                  </div>
                </div>

                {/* --- 2. Fixed Info Section --- */}
                <div className="mt-12 px-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-8 bg-amber-500/50" />
                    <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] leading-none">
                      {product.brand}
                    </p>
                  </div>

                  {/* Split Grid for Name and Price */}
                  <div className="grid grid-cols-2 items-end gap-2 mb-10">
                    <h3 className="text-3xl lg:text-2xl font-black tracking-tighter uppercase leading-[0.8] truncate">
                      {product.name}
                    </h3>
                    <div className="text-right flex flex-col justify-end leading-none">
                       <span className="text-3xl lg:text-2xl font-black text-white italic tracking-tighter">
                        ${product.price}
                       </span>
                    </div>
                  </div>
                  
                  {/* Footer Button with Animated Bar */}
                  <button className="w-full flex items-center justify-between group/btn py-6 border-t border-white/10">
                    <span className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover/btn:text-amber-500 transition-colors">
                      <ShoppingCart className="w-5 h-5" /> Add To Cart
                    </span>
                    <div className="h-[2px] w-12 bg-white/10 group-hover/btn:bg-amber-500 group-hover/btn:w-20 transition-all duration-500" />
                  </button>
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