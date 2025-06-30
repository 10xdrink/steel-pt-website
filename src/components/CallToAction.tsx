import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Transform?</h2>
          
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Stop planning. Start progressing. Your transformation begins with one decision.
          </p>
          
          <a href="/get-started" className="inline-block bg-white text-black py-4 px-8 rounded-md font-semibold uppercase tracking-wider shadow-md shadow-white/15 hover:shadow-white/30 transform transition-all duration-300">
            Schedule A Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
