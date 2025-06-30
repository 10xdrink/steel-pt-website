import React from 'react';
import { Link } from 'react-router-dom';

const ResultsCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#121212] bg-opacity-90">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Your Story Starts Here
        </h2>
        
        <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto">
          Join the ranks of successful transformations. Your before and after could be next.
        </p>
        
        <Link 
          to="/get-started" 
          className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-3 px-8 rounded-md transition-all duration-300 uppercase tracking-wider text-sm"
        >
          Schedule A Visit
        </Link>
      </div>
    </section>
  );
};

export default ResultsCTA;
