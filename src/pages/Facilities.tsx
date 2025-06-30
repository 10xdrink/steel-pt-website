import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacilitiesHero from '@/components/FacilitiesHero';
import FacilitiesFeatures from '@/components/FacilitiesFeatures';
import PrecisionAssessment from '@/components/PrecisionAssessment';
import ExperienceSteel from '@/components/ExperienceSteel';

const Facilities = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <FacilitiesHero />
      <FacilitiesFeatures />
      <PrecisionAssessment />
      <ExperienceSteel />
      
      <Footer />
    </div>
  );
};

export default Facilities;
