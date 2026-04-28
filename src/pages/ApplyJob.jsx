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

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter, ArrowRight, ChevronDown, Upload, Send, User, Mail, Phone } from 'lucide-react';
import Footer from '../components/Footer';

const ApplyJob = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      
      <main className="flex-grow text-white font-sans p-6 md:p-12 relative overflow-hidden">
        
        {/* Dynamic Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full -z-10"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-16 pt-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              Dream <span className="text-amber-500 italic">Careers</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Find your next big opportunity. Filter by category, location, or role.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2">Apply for a Position</h2>
              <p className="text-white/40">Submit your details and we'll get back to you.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40" />
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-amber-500/50 outline-none transition" />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40" />
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-amber-500/50 outline-none transition" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40" />
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-amber-500/50 outline-none transition" />
                  </div>
                </div>

                {/* Applying For */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Applying For</label>
                  <div className="relative group">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 appearance-none focus:border-amber-500/50 outline-none cursor-pointer text-white/70">
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>UI/UX Designer</option>
                      <option>Marketing Manager</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Resume / CV</label>
                <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-amber-500/40 transition-colors cursor-pointer group">
                  <Upload className="w-10 h-10 text-white/20 group-hover:text-amber-500 mx-auto mb-4 transition-colors" />
                  <p className="text-white/40">Click to upload or drag and drop</p>
                  <p className="text-xs text-white/20 mt-2">PDF, DOC (Max 5MB)</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-amber-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                Submit Application <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
          {/* --- Form Section End --- */}

          {/* Bottom CTA Section */}
          <div className="mt-24 mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-amber-500/10 to-transparent border border-white/5 text-center relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 blur-[80px] rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Build Your <span className="italic text-amber-500">Dream Career?</span></h2>
              <p className="text-white/60 mb-10 max-w-2xl mx-auto">If you don't see a position that fits, send us your resume anyway! We're always looking for talented individuals.</p>
              <button className="px-10 py-5 bg-amber-500 text-black font-black rounded-full hover:bg-amber-400 transition-all hover:scale-105">
                  Contact Our HR Team
              </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyJob;