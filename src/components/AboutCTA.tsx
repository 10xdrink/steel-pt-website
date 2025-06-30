import React from 'react';

const AboutCTA = () => {
  return (
    <section className="bg-[#121212] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Legacy?
          </h2>
          
          <p className="text-lg text-gray-300 mb-10">
            Become part of the Steel story. Write your own transformation chapter.
          </p>
          
          <a href="/get-started" className="inline-block bg-white text-black py-4 px-8 rounded-md font-semibold uppercase tracking-wider shadow-md shadow-white/15 hover:shadow-white/30 transform transition-all duration-300">
            Schedule A Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
