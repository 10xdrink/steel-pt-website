import React from 'react';

const ExperienceSteel: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Experience Steel
        </h2>
        
        <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12">
          See why we're Jubilee Hills' premier transformation center. Tour our facility
          and meet your future self.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="/get-started" 
            className="inline-block bg-white text-black font-bold py-4 px-8 rounded hover:bg-gray-200 transition-colors duration-300"
          >
            SCHEDULE TOUR
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSteel;
