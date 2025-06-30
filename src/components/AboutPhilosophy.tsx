import React from 'react';

const AboutPhilosophy = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* The Steel Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">The Steel Philosophy</h2>
            
            <p className="text-lg leading-relaxed text-gray-300">
              We believe fitness isn't about suffering through workouts you hate. It's about 
              building a body and mind that serve you for life.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              Founded by Kunal Gir in 2015, Steel emerged from a simple observation: most 
              fitness approaches fail because they focus on short-term results instead of 
              lasting transformation.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              We built Steel to be different. Every program, every coach, every piece of 
              equipment is designed around one goal — your long-term success.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden h-80">
            <img 
              src="https://res.cloudinary.com/drxykwg61/image/upload/v1744377705/zwz2cvnhglsql5bgslyn.jpg" 
              alt="Kunal Gir - Founder of Steel PT" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Our Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden h-80 order-last lg:order-first">
            <img 
              src="https://res.cloudinary.com/drxykwg61/image/upload/v1744717242/wybnc301uoqdzkpsdyz1.webp" 
              alt="Steel PT Mission" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            
            <p className="text-lg leading-relaxed text-gray-300">
              To educate, motivate, and transform through rigorous training, expert coaching, 
              and relentless pursuit of excellence.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              We're not here to give you a workout. We're here to give you a system that 
              works: knowledge that lasts, and results that compound over time.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              Located in Jubilee Hills, we've become the destination for serious transformation 
              in Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
