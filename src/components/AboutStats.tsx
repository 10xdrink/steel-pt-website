import React, { useState, useEffect, useRef } from 'react';

const AboutStats = () => {
  // Stats data
  const statsData = [
    { value: 2015, label: 'FOUNDED', increment: 2015 },
    { value: 1000, label: 'LIVES CHANGED', suffix: '+', increment: 1000 },
    { value: 95, label: 'SUCCESS RATE', suffix: '%', increment: 95 },
    { value: 10, label: 'YEARS EXPERIENCE', suffix: '+', increment: 10 }
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
    
    return () => intervals.forEach(clearInterval);
  }, [isVisible, statsData]);

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={statsRef} 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {statsData.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center transform transition-all duration-700" 
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="text-5xl font-bold mb-2 text-white">
                {Math.floor(counters[index])}{stat.suffix || ''}
              </div>
              <div className="text-white text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
