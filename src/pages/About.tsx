import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import AboutPhilosophy from '@/components/AboutPhilosophy';
import AboutStats from '@/components/AboutStats';
import AboutCTA from '@/components/AboutCTA';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <AboutHero />
      <AboutPhilosophy />
      <AboutStats />
      <AboutCTA />
      
      <Footer />
    </div>
  );
};

export default About;
