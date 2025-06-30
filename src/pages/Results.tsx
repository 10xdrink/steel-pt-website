import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResultsHero from '@/components/ResultsHero';
import ResultsGallery from '@/components/ResultsGallery';
import ResultsStories from '@/components/ResultsStories';
import ResultsStats from '@/components/ResultsStats';
import ResultsCTA from '@/components/ResultsCTA';

const Results = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <ResultsHero />
      <ResultsGallery />
      <ResultsStories />
      <ResultsStats />
      <ResultsCTA />
      
      <Footer />
    </div>
  );
};

export default Results;
