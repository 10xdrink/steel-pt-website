import React from 'react';
import Navbar from '@/components/Navbar';
import MethodHero from '@/components/MethodHero';
import MethodPrinciples from '@/components/MethodPrinciples';
import MethodPillars from '@/components/MethodPillars';
import MethodCTA from '@/components/MethodCTA';
import Footer from '@/components/Footer';

const Method = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <MethodHero />
      <MethodPrinciples />
      <MethodPillars />
      <MethodCTA />
      <Footer />
    </div>
  );
};

export default Method;
