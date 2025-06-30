import React, { useState, useEffect, useRef } from 'react';

const WhySteel = () => {
  // Stats data
  const statsData = [
    { value: 2015, label: 'FOUNDED', increment: 50 },
    { value: 1000, label: 'LIVES CHANGED', suffix: '+', increment: 25 },
    { value: 95, label: 'SUCCESS RATE', suffix: '%', increment: 2 },
    { value: 10, label: 'YEARS EXPERIENCE', suffix: '+', increment: 1 }
  ];
  
  // State for animated counters
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Set up intersection observer to detect when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Animate counters when section becomes visible
  useEffect(() => {
    if (!isVisible) return;
    
    const intervals = statsData.map((stat, index) => {
      let current = 0;
      
      return setInterval(() => {
        current += stat.increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intervals[index]);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, 30);
    });
    
    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible]);
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left column - Text content */}
          <div>
            <h2 className="text-5xl font-bold mb-8 text-white">Why Steel?</h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              Since 2015, we've been redefining what personal training means. Not just workouts, but transformation. Not just plans, but results that last.
            </p>
            
            <p className="text-gray-300 mb-8 text-lg">
              Located in the heart of Jubilee Hills, we've built more than a gym — we've created a system that works.
            </p>
            
            <a href="/about" className="inline-block bg-black border-2 border-white text-white py-3 px-8 rounded-md font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors shadow-md shadow-white/10 hover:shadow-white/20">
              OUR FULL STORY
            </a>
          </div>
          
          {/* Right column - Image */}
          <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-lg h-full">
            <img 
              src="https://res.cloudinary.com/drxykwg61/image/upload/v1744377705/zwz2cvnhglsql5bgslyn.jpg" 
              alt="Steel PT Facility" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Stats section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-48 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={stat.label} className="text-center transform transition-all duration-700 opacity-0" 
                 style={{
                   opacity: isVisible ? 1 : 0,
                   transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                   transitionDelay: `${index * 150}ms`
                 }}>
              <div className="text-5xl font-bold mb-2 text-white">
                {Math.floor(counters[index])}{stat.suffix || ''}
              </div>
              <div className="text-white text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySteel;
