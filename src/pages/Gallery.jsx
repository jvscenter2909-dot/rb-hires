import React from 'react';
import Footer from '../components/Footer';

const Gallery = () => {
  // Array of images - tame potana path ahi add kari sako chho
  const images = [
    { id: 1, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-7.png", alt: "Office Work" },
    { id: 2, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design.png", alt: "Navlakha Logo Entrance" },
    { id: 3, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-8.png", alt: "Office Interior" },
    { id: 4, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-1.png", alt: "Insurance Services Board" },
    { id: 5, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-2.png", alt: "Office Decor" },
    { id: 6, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-4.png", alt: "Wall Frames" },
    { id: 7, src: "https://navlakhainsurance.in/wp-content/uploads/2025/07/Untitled-design-5.png", alt: "Reception Area" },
  ];

  return (
    <section className="py-20 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Our Journey <span className="text-[#76b543]">in Motion</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Explore our collection of engaging videos and photos that showcase our services, 
            customer stories, and behind-the-scenes moments. Experience the essence of 
            Navlakha Insurance through visual storytelling.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square overflow-hidden rounded-md shadow-md group border-4 border-white"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle Overlay on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </section>
    
  );
};

export default Gallery;