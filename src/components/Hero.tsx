import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-black text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/drxykwg61/video/upload/v1744708947/w2bwawu2m74q9sk7ppjt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10 text-center">
        {/* Small tag line */}
        <div className="mb-8 flex justify-center">
          <span className="inline-block bg-zinc-800 text-white text-sm font-medium px-6 py-2 rounded-full">
            RESULTS THAT LAST A LIFETIME
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight mx-auto">
          <div>The Art and</div>
          <div>Science of Results.</div>
        </h1>
        
        {/* Subheading */}
        <div className="max-w-2xl mb-12 mx-auto">
          <p className="text-xl md:text-2xl mb-4">Plans are common. Progress isn't.</p>
          <p className="text-lg text-gray-400">Pick the level that gets you moving and keeps you there.</p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/#pricing" 
            className="inline-block  bg-white text-black hover:bg-gray-100 px-10 py-4 text-base font-bold tracking-wider rounded-sm uppercase text-center min-w-[240px]"
          >
            CHOOSE YOUR LEVEL
          </a>
          <a 
            href="/about" 
            className="inline-block border border-white text-white hover:bg-zinc-900 px-10 py-4 text-base font-medium tracking-wider rounded-sm uppercase text-center min-w-[240px]"
          >
            OUR STORY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
