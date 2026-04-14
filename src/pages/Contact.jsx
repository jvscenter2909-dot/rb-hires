import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquareText } from 'lucide-react';
import Footer from '../components/Footer';

const ContactPage = () => {
  // Added Address to the left column details
  const contactDetails = [
    { icon: Phone, title: "Call Us", detail: "+1 9094020265", type: 'tel' },
    { icon: Mail, title: "Email Us", detail: "info@rbhiresconsultllc.com", type: 'email' },
    { icon: MapPin, title: "Main Office", detail: "T-22, Golden Square, Mehasana, GJ", type: 'text' },
  ];

  const locationDetails = [
    { 
      title: "India Location", 
      detail: "T-22, Golden Square, Radhanpur Road, Mehasana, India, 384002.", 
      // Functional Mehsana Embed Link
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.444342886364!2d72.3732626!3d23.5883906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c43d78c000001%3A0x6b1626f6723b7b84!2sRadhanpur%20Rd%2C%20Mehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713100000000!5m2!1sen!2sin" 
    },
    { 
      title: "USA Location", 
      detail: "8 The Green, STE A, Dover DE, 19901.", 
      // Functional Dover, Delaware Embed Link
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5778263725624!2d-75.5259648!3d39.1581699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c77ad090332491%3A0x9f54625b341f286!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901%2C%20USA!5e0!3m2!1sen!2sus!4v1713100000000!5m2!1sen!2sus" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-6 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 mt-8">
          <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full mb-6 bg-white/[0.03]">
            <MessageSquareText className="w-4 h-4 text-amber-500" />
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/70">Connections Matter</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-5">
            Get <span className="text-amber-500 italic">In Touch</span> With Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column now includes the address card */}
          <div className="lg:col-span-2 space-y-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="group flex items-start gap-6 bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] transition-all hover:bg-white/[0.04] hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-black/30 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                  <item.icon className="w-7 h-7 text-amber-500 group-hover:text-amber-400" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-white/50 mb-1.5">{item.title}</p>
                  {item.type === 'text' ? (
                     <span className="text-xl md:text-2xl font-extrabold text-white group-hover:text-amber-500 transition-colors break-words">
                        {item.detail}
                     </span>
                  ) : (
                    <a href={`${item.type}:${item.detail}`} className="text-xl md:text-2xl font-extrabold text-white group-hover:text-amber-500 transition-colors break-words">
                      {item.detail}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 bg-white/[0.03] border border-white/10 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute top-6 left-12 w-1 h-20 bg-amber-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 pl-6">Send Us A Message</h2>
            <form className="space-y-6">
              {['Your Name', 'Your Email', 'Subject'].map((placeholder) => (
                <input 
                  key={placeholder}
                  type={placeholder.includes('Email') ? 'email' : 'text'} 
                  placeholder={placeholder} 
                  className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4.5 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition"
                />
              ))}
              <textarea placeholder="Your Message" rows="5" className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition resize-none"></textarea>
              <button type="submit" className="inline-flex items-center gap-3 bg-amber-500 text-black font-extrabold px-10 py-5 rounded-full hover:bg-amber-400 transition-all group">
                Send Message
                <Send className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center">Our <span className="text-amber-500 italic">Locations</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {locationDetails.map((loc, index) => (
              <div key={index} className="flex flex-col bg-white/[0.02] border border-white/5 p-8 rounded-3xl group overflow-hidden relative">
                <MapPin className="w-20 h-20 text-white/5 absolute -top-4 -right-4 -rotate-12 group-hover:text-amber-500/10 transition-colors" />
                <h3 className="text-2xl font-extrabold text-amber-500 mb-3 relative z-10">{loc.title}</h3>
                <p className="text-base text-white/70 mb-8 relative z-10 leading-relaxed max-w-sm">{loc.detail}</p>
                <div className="flex-grow w-full h-[250px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-500/20 transition-colors mt-auto relative z-10">
                    <iframe 
                        src={loc.mapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;