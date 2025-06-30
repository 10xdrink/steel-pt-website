import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FacilitiesFeatures: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: "Elite Equipment",
      description: "Custom-designed tools and world-class machines for every aspect of your training journey.",
      icon: (
        <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1751206000/1_cuwhl8.png" alt="Elite Equipment" className="h-10 w-10" />
      )
    },
    {
      title: "DEXA Scanning",
      description: "Gold-standard body composition analysis for precision tracking and programming.",
      icon: (
        <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1751206000/2_xajcut.png" alt="DEXA Scanning" className="h-10 w-10" />
      )
    },
    {
      title: "Recovery Suite",
      description: "Steam, sauna, and advanced recovery modalities to optimize your training adaptations.",
      icon: (
        <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1751206000/3_lkrowx.png" alt="Recovery Suite" className="h-10 w-10" />
      )
    },
    {
      title: "Valet Parking",
      description: "Focus on your workout, not finding parking. We handle the details.",
      icon: (
        <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1751206000/4_sr22nz.png" alt="Valet Parking" className="h-10 w-10" />
      )
    },
    {
      title: "Nutrition Center",
      description: "On-site cafeteria with performance-focused meals and supplements.",
      icon: (
        <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1751206000/5_bq0d73.png" alt="Nutrition Center" className="h-10 w-10" />
      )
    },
    {
      title: "Premium Amenities",
      description: "Fresh towels, luxury showers, and all the conveniences of a world-class facility.",
      icon: (
        <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1751206000/6_biwds9.png" alt="Premium Amenities" className="h-10 w-10" />
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Innovation Meets Function
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                We don't just buy equipment — we design it. Understanding that every body is different, we've created custom training tools that adapt to your specific needs.
              </p>
              
              <p className="text-gray-300">
                Our Jubilee Hills facility spans thousands of square feet of open training space, giving you the freedom to move, grow, and transform without limitations.
              </p>
              
              <p className="text-gray-300">
                This isn't just a gym. It's a laboratory for human performance.
              </p>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-lg overflow-hidden flex items-center">
            <img 
              src="https://res.cloudinary.com/drxykwg61/image/upload/v1744717242/ljiinvzlwjbkex7ou3qg.webp" 
              alt="Facility Overview" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl group transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-zinc-800/30"
            >
              {/* Card background with subtle border */}
              <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Card content */}
              <div className="relative z-10 bg-zinc-900 m-[1px] rounded-[11px] p-8 h-full flex flex-col">
                {/* Icon with circular background */}
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-zinc-800 text-white">
                  {feature.icon}
                </div>
                
                {/* Title with underline on hover */}
                <h3 className="text-xl font-bold text-white mb-4 relative inline-block group-hover:text-white transition-colors duration-300">
                  {feature.title}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesFeatures;
