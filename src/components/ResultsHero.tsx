import React from 'react';

const ResultsHero: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundPosition: 'center 30%',
        backgroundImage: 'url(https://res.cloudinary.com/drxykwg61/image/upload/v1744808570/ya02pwyip0zc9bdkk4h8.webp)' 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-12">
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-all duration-300">
            REAL RESULTS
          </button>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Proof. Not <br />Promises.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          Real people. Real transformations.
        </p>
        
        <p className="text-gray-400 mb-16 max-w-2xl">
          When you combine the right system with the right support, extraordinary results become inevitable.
        </p>
      </div>
    </section>
  );
};

export default ResultsHero;
