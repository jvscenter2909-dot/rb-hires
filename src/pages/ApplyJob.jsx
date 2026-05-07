// import React, { useState } from 'react';
// import { Search, MapPin, Briefcase, Filter, ArrowRight, ChevronDown } from 'lucide-react';
// import Footer from '../components/Footer';

// const ApplyJob = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   return (
//     // આખા પેજને Flexbox સ્ટ્રક્ચર આપ્યું છે
//     <div className="flex flex-col min-h-screen bg-[#050505]">
      
//       {/* મેઈન કન્ટેન્ટ સેક્શન - flex-grow ના કારણે તે ફૂટરને છેક નીચે રાખશે */}
//       <main className="flex-grow text-white font-sans p-6 md:p-12 relative overflow-hidden">
        
//         {/* Dynamic Background Elements */}
//         <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full -z-10"></div>
//         <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
          
//           {/* Header Section */}
//           <div className="text-center mb-16 pt-10">
//             <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
//               Dream <span className="text-amber-500 italic">Careers</span>
//             </h1>
//             <p className="text-white/50 text-lg max-w-xl mx-auto">
//               Find your next big opportunity. Filter by category, location, or role.
//             </p>
//           </div>

//           {/* Futuristic Glass Filter Bar */}
//           <div className="bg-white/[0.03] border border-white/10 p-4 rounded-3xl mb-12 backdrop-blur-md">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
//                 <input 
//                   type="text" 
//                   placeholder="Search jobs..." 
//                   className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-500/40 transition text-white"
//                 />
//               </div>
              
//               <div className="relative group">
//                 <select className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 appearance-none focus:outline-none focus:border-amber-500/40 cursor-pointer text-white/70">
//                   <option>All Categories</option>
//                   <option>Information Technology</option>
//                   <option>Design</option>
//                 </select>
//                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-hover:text-amber-500 transition-colors pointer-events-none" />
//               </div>

//               <div className="relative group">
//                 <select className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 appearance-none focus:outline-none focus:border-amber-500/40 cursor-pointer text-white/70">
//                   <option>All Locations</option>
//                   <option>India</option>
//                   <option>USA</option>
//                 </select>
//                 <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-hover:text-amber-500 transition-colors pointer-events-none" />
//               </div>

//               <button className="bg-amber-500 text-black font-bold rounded-2xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95 py-4">
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Bottom CTA Section */}
//           <div className="mt-24 mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-amber-500/10 to-transparent border border-white/5 text-center relative overflow-hidden">
//               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 blur-[80px] rounded-full"></div>
//               <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Build Your <span className="italic text-amber-500">Dream Career?</span></h2>
//               <p className="text-white/60 mb-10 max-w-2xl mx-auto">If you don't see a position that fits, send us your resume anyway! We're always looking for talented individuals.</p>
//               <button className="px-10 py-5 bg-amber-500 text-black font-black rounded-full hover:bg-amber-400 transition-all hover:scale-105">
//                   Contact Our HR Team
//               </button>
//           </div>
//         </div>
//       </main>

//       {/* Footer Section - હવે તે બરાબર પેજની છેડે રહેશે */}
//       <Footer />
//     </div>
//   );
// };

// export default ApplyJob;



import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  ChevronDown,
  Upload,
  Briefcase,
  Sparkles,
} from "lucide-react";
import Footer from "../components/Footer";

const ApplyJob = () => {
  const [resumeName, setResumeName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResumeName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.position
    ) {
      alert("Please fill all fields");
      return;
    }

    const whatsappNumber = "17302786080";

    const message = `
 New Job Application

 Name: ${formData.name}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Position: ${formData.position}
    `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      <main className="flex-grow relative">

        {/* Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-purple-500/10 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          {/* HERO */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <Sparkles className="w-4 h-4 text-amber-500" />

              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/70">
                Career Portal
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              APPLY FOR YOUR
              <br />
              <span className="italic text-amber-500">
                DREAM JOB
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
              Join our growing team and build an impactful career with endless
              opportunities, mentorship, and innovation.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-amber-500" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black">
                      Why Join Us?
                    </h2>

                    <p className="text-white/40 text-sm">
                      We help you grow beyond limits.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    "Competitive Salary Packages",
                    "Remote & Hybrid Opportunities",
                    "Professional Mentorship",
                    "Career Growth & Promotions",
                    "Flexible Work Culture",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all"
                    >
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>

                      <p className="text-white/80 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA CARD */}
              <div className="rounded-[2.5rem] p-10 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/10 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-[80px] rounded-full"></div>

                <h2 className="text-3xl font-black mb-5">
                  Your Future Starts Here.
                </h2>

                <p className="text-white/50 mb-8">
                  Even if your preferred role isn't listed, send us your resume.
                  We're always looking for exceptional talent.
                </p>

                <a href="tel:+19094020265" className="inline-block px-8 py-4 bg-amber-500 text-black rounded-2xl font-black hover:bg-amber-400 transition-all hover:scale-105">
                  Contact HR Team
                </a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.03)]">

              <div className="mb-10">
                <h2 className="text-4xl font-black mb-3">
                  Apply Now
                </h2>

                <p className="text-white/40">
                  Fill in your information and submit your application.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="text-sm text-white/50 mb-2 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 pl-14 pr-5 outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-white/50 mb-2 block">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 pl-14 pr-5 outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-white/50 mb-2 block">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 00000 00000"
                      className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 pl-14 pr-5 outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label className="text-sm text-white/50 mb-2 block">
                    Applying For
                  </label>

                  <div className="relative">
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full h-16 rounded-2xl bg-black border border-white/10 px-5 appearance-none outline-none focus:border-amber-500/50 transition-all text-white/80"
                    >
                      <option value="">Select Position</option>
                      <option value="Frontend Developer">
                        Frontend Developer
                      </option>

                      <option value="Backend Developer">
                        Backend Developer
                      </option>

                      <option value="UI/UX Designer">
                        UI/UX Designer
                      </option>

                      <option value="Marketing Manager">
                        Marketing Manager
                      </option>
                    </select>

                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  </div>
                </div>

                {/* Upload Resume */}
                

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-amber-500 text-black font-black text-lg flex items-center justify-center gap-3 hover:bg-amber-400 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
                >
                  Submit Application
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyJob;