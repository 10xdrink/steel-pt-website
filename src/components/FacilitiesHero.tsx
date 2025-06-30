import React from 'react';

const FacilitiesHero: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: 'url(https://res.cloudinary.com/drxykwg61/image/upload/v1744717242/oiecjw6ykcrkr1namist.webp)' 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-12">
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-all duration-300">
            WORLD-CLASS FACILITIES
          </button>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Built for Results.
        </h1>
        
        <p className="text-gray-400 mb-16 max-w-2xl">
          Every piece of equipment, every space, every detail designed around one goal — your success.
        </p>
      </div>
    </section>
  );
};

export default FacilitiesHero;
