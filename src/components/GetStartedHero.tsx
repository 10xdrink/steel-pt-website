import React from 'react';

const GetStartedHero: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: 'url(https://res.cloudinary.com/drxykwg61/image/upload/v1744716961/sarboxdprq8b64tyuerw.jpg)' 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="mb-12">
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-all duration-300">
            SCHEDULE YOUR VISIT
          </button>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          SCHEDULE YOUR VISIT
        </h1>
        
        <p className="text-xl md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Book your appointment and take the first step toward your fitness goals.
        </p>
        
      </div>
      
    </section>
  );
};

export default GetStartedHero;
