import React from 'react';

const MethodHero = () => {
  return (
    <section className="text-white relative min-h-[50vh] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://res.cloudinary.com/drxykwg61/image/upload/v1744377705/zwz2cvnhglsql5bgslyn.jpg)',
          backgroundPosition: 'center 30%' 
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button className="bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full uppercase">
              OUR METHOD
            </button>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            Science Meets Art.
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-xl">
              The Steel Mind-Body Mastery System.
            </p>
            
            <p className="text-lg leading-relaxed">
              Seven pillars. Countless results. One proven system for lasting transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodHero;
