import React, { useState } from 'react';

const PrecisionAssessment: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    "https://res.cloudinary.com/drxykwg61/image/upload/v1751207139/dufuskkczplmemgzn675_saoztv.webp",
    "https://res.cloudinary.com/drxykwg61/image/upload/v1751207139/b9ayp0duad3skordpol3_xqmahg.webp",
    "https://res.cloudinary.com/drxykwg61/image/upload/v1751207139/lsauhqzucangwidtsss4_afxfbf.webp",
    "https://res.cloudinary.com/drxykwg61/image/upload/v1751207139/upuxhfffslktprfaqs0e_kvjjnu.webp"
  ];
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image Gallery */}
          <div className="space-y-4">
            {/* Main image display */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <img 
                src={images[activeImage]} 
                alt={`DEXA Technology ${activeImage + 1}`} 
                className="h-64 md:h-96 w-full object-contain p-4"
              />
            </div>
            
            {/* Thumbnail navigation */}
            <div className="flex space-x-2 justify-center">
              {images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-16 w-16 rounded-md overflow-hidden border-2 transition-all ${activeImage === index ? 'border-white scale-105' : 'border-transparent opacity-70'}`}
                >
                  <img 
                    src={image} 
                    alt={`DEXA Technology thumbnail ${index + 1}`} 
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Precision Assessment
            </h2>
            
            <p className="text-gray-300">
              Our DEXA scan technology provides the most accurate body composition 
              analysis available. Track muscle gain, fat loss, and bone density with medical-
              grade precision.
            </p>
            
            <p className="text-gray-300">
              Combined with comprehensive blood work and movement assessments, we 
              leave nothing to chance in understanding your starting point and tracking your 
              progress.
            </p>
            
            <p className="text-gray-300">
              Data-driven decisions lead to better results. Always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionAssessment;
