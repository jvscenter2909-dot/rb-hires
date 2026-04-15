import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquareText } from 'lucide-react';
import Footer from '../components/Footer';

const ContactPage = () => {
  const contactDetails = [
    { icon: Phone, title: "Call Us", detail: "+1 9094020265", type: 'tel' },
    { icon: Mail, title: "Email Us", detail: "info@rbhiresconsultinc.com", type: 'email' },
    { icon: MapPin, title: "India Office", detail: "T-22, Golden Square, Mehasana, GJ", type: 'text' },
    { icon: MapPin, title: "USA Office", detail: "8 The Green, STE A, Dover DE, 19901", type: 'text' },
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
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-5 py-12 md:px-12 md:py-24 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-24 mt-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-5">
            Get <span className="text-amber-500 italic">In Touch</span> With Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 md:p-8 rounded-2xl hover:border-amber-500/30 transition-all">
                
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border border-white/10">
                  <item.icon className="w-5 h-5 text-amber-500" />
                </div>

                <div>
                  <p className="text-[10px] md:text-xs uppercase text-white/50 mb-1">
                    {item.title}
                  </p>

                  {item.type === 'text' ? (
                    <p className="text-base md:text-xl font-bold text-white">
                      {item.detail}
                    </p>
                  ) : (
                    <a
                      href={`${item.type}:${item.detail}`}
                      className="text-base md:text-xl font-bold text-white hover:text-amber-500"
                    >
                      {item.detail}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE FORM (UNCHANGED) */}
          <div className="lg:col-span-3 bg-white/[0.03] border border-white/10 p-6 md:p-12 rounded-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6">
              <input className="w-full bg-black/20 border border-white/10 p-4 rounded-xl" placeholder="Your Name" />
              <input className="w-full bg-black/20 border border-white/10 p-4 rounded-xl" placeholder="Email" />
              <textarea className="w-full bg-black/20 border border-white/10 p-4 rounded-xl" rows="4" placeholder="Message" />

              <button className="bg-amber-500 text-black font-bold px-8 py-4 rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-10">
            Our <span className="text-amber-500 italic">Locations</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {locationDetails.map((loc, index) => (
              <div key={index} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                <h3 className="text-xl font-bold text-amber-500 mb-2">
                  {loc.title}
                </h3>
                <p className="text-white/70 mb-6">{loc.detail}</p>

                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="250"
                  loading="lazy"
                  className="rounded-xl w-full"
                  title={`map-${index}`}
                />
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