import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquareText } from 'lucide-react';
import Footer from '../components/Footer';

const ContactPage = () => {
  const contactDetails = [
    { icon: Phone, title: "Call Us", detail: "+1 9094020265", type: 'tel' },
    { icon: Mail, title: "Email Us", detail: "info@rbhiresconsultllc.com", type: 'email' },
    { icon: MapPin, title: "Main Office", detail: "T-22, Golden Square, Mehasana, GJ", type: 'text' },
  ];

  const locationDetails = [
    { 
      title: "India Location", 
      detail: "T-22, Golden Square, Radhanpur Road, Mehasana, India, 384002.", 
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4026369062!2d72.3789!3d23.6061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzIyLjAiTiA3MsKwMjInNDQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
    },
    { 
      title: "USA Location", 
      detail: "8 The Green, STE A, Dover DE, 19901.", 
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.3!2d-75.52!3d39.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA5JzAwLjAiTiA3NfKwMzEnMTIuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-500/10 blur-[100px] md:blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-80 h-64 md:h-80 bg-blue-500/5 blur-[80px] md:blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 py-12 md:px-12 md:py-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24 mt-4">
          <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full mb-6 bg-white/[0.03]">
            <MessageSquareText className="w-4 h-4 text-amber-500" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/70">Connections Matter</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-5">
            Get <span className="text-amber-500 italic">In Touch</span> With Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="group flex items-center md:items-start gap-4 md:gap-6 bg-white/[0.02] border border-white/5 p-5 md:p-8 rounded-2xl md:rounded-[2rem] transition-all hover:bg-white/[0.04] hover:border-amber-500/30">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 bg-black/30 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-amber-500 group-hover:text-amber-400" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.1em] text-white/50 mb-1">{item.title}</p>
                  {item.type === 'text' ? (
                     <p className="text-lg md:text-2xl font-extrabold text-white group-hover:text-amber-500 transition-colors break-words">
                        {item.detail}
                     </p>
                  ) : (
                    <a href={`${item.type}:${item.detail}`} className="text-lg md:text-2xl font-extrabold text-white group-hover:text-amber-500 transition-colors break-words block">
                      {item.detail}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3 bg-white/[0.03] border border-white/10 p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 left-6 md:left-12 w-1 h-12 md:h-20 bg-amber-500 rounded-full hidden sm:block"></div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-10 sm:pl-6">Send Us A Message</h2>
            
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-base text-white focus:outline-none focus:border-amber-500/50 transition"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-base text-white focus:outline-none focus:border-amber-500/50 transition"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-base text-white focus:outline-none focus:border-amber-500/50 transition"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-base text-white focus:outline-none focus:border-amber-500/50 transition resize-none"
              ></textarea>
              
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 text-black font-extrabold px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-amber-400 transition-all group active:scale-95">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10 md:mb-12 text-center">
            Our <span className="text-amber-500 italic">Locations</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {locationDetails.map((loc, index) => (
              <div key={index} className="flex flex-col bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-3xl group relative overflow-hidden">
                <MapPin className="w-16 h-16 md:w-20 md:h-20 text-white/5 absolute -top-4 -right-4 -rotate-12 group-hover:text-amber-500/10 transition-colors" />
                
                <h3 className="text-xl md:text-2xl font-extrabold text-amber-500 mb-2 relative z-10">{loc.title}</h3>
                <p className="text-sm md:text-base text-white/70 mb-6 md:mb-8 relative z-10 leading-relaxed">
                  {loc.detail}
                </p>
                
                <div className="w-full h-[200px] md:h-[250px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-500/20 transition-colors mt-auto relative z-10 bg-white/5">
                    <iframe 
                        src={loc.mapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        title={`map-${index}`}
                        className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;