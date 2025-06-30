import React from 'react';

const MethodCTA: React.FC = () => {
  return (
    <section className="bg-[#121212] py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Experience the Method</h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          See how our proven system can work for you. Your transformation starts
          with understanding.
        </p>
        <div className="flex justify-center">
          <a 
            href="/get-started" 
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-[#00FF1A] transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule A Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodCTA;
