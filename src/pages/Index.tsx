
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingPlans from '@/components/PricingPlans';
import WhySteel from '@/components/WhySteel';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PricingPlans />
      <WhySteel />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
