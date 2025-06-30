import React, { useEffect, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
}

const ResultsStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add intersection observer to trigger animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    return () => observer.disconnect();
  }, []);
  const stats: StatItem[] = [
    {
      value: "2015",
      label: "FOUNDED"
    },
    {
      value: "1000+",
      label: "LIVES CHANGED"
    },
    {
      value: "95%",
      label: "SUCCESS RATE"
    },
    {
      value: "10+",
      label: "YEARS EXPERIENCE"
    }
  ];

  return (
    <section id="stats-section" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-3 relative group">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {stat.value}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF1A] group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsStats;
