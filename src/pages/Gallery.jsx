import React, { useState } from 'react';
import { ZoomIn, Users, Lightbulb, Target } from 'lucide-react'; // lucide-react install કરી લેજો
import Footer from '../components/Footer';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      category: "Strategy",
      title: "Corporate Strategy Session",
      description: "Defining long-term goals with the leadership team.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop", 
      icon: <Target className="w-5 h-5 text-amber-500" />
    },
    {
      id: 2,
      category: "Teamwork",
      title: "Cross-Functional Workshop",
      description: "Collaborative problem-solving across departments.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", 
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      id: 3,
      category: "Innovation",
      title: "Brainstorming New Ventures",
      description: "Exploring market opportunities and disruptive ideas.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", 
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 4,
      category: "Strategy",
      title: "Market Analysis Presentation",
      description: "Delivering data-driven insights to stakeholders.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      icon: <Target className="w-5 h-5 text-amber-500" />
    },
    {
      id: 5,
      category: "Teamwork",
      title: "Client Success Celebration",
      description: "Celebrating milestones and key achievements.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", 
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      id: 6,
      category: "Innovation",
      title: "Digital Transformation Roadmap",
      description: "Planning technology integration for growth.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", 
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Strategy", "Teamwork", "Innovation"];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050505] py-24 px-6 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Work in Action
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 tracking-tight">
            Consulting <span className="text-amber-500">Gallery</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Explore moments of collaboration, innovation, and strategic impact from our client engagements.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-3 mb-16 border-b border-white/5 pb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-amber-500/30 hover:-translate-y-2 card-animation"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  
                  <ZoomIn className="absolute top-4 right-4 w-5 h-5 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
                </div>
              </div>

              <div className="p-5 flex justify-between items-center bg-white/[0.01] group-hover:bg-transparent transition-colors">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {item.category}
                </span>
                <span className="text-white/30 text-xs font-mono group-hover:opacity-0 transition-opacity">
                  0{item.id}
                </span>
              </div>
              
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amber-500/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-28 text-center py-10 border-t border-white/5">
          <p className="text-white/30 text-sm">
            Interested in working with us? <button className="text-amber-500 hover:underline font-medium">Let's discuss your project</button>
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .card-animation {
          animation: fadeInScale 0.6s ease-out forwards;
        }
      `}</style>
         <Footer />
    </div>
   
  );

};

export default Gallery;