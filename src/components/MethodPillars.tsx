import React from 'react';

const MethodPillars = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The 7 Pillars of Steel
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Steel Strength Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/1_upn9nj.png" alt="Steel Strength" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Strength</h3>
            <p className="text-gray-300 text-sm text-center">
              Build functional power that serves your life, not just your ego.
            </p>
          </div>
          
          {/* Steel Endurance Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/2_egdd0p.png" alt="Steel Endurance" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Endurance</h3>
            <p className="text-gray-300 text-sm text-center">
              Cardiovascular health that adds years to your life and life to your years.
            </p>
          </div>
          
          {/* Steel Movement Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/3_yjfszl.png" alt="Steel Movement" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Movement</h3>
            <p className="text-gray-300 text-sm text-center">
              Pain-free mobility that keeps you active well into your golden years.
            </p>
          </div>
          
          {/* Steel Mind Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/4_bniisp.png" alt="Steel Mind" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Mind</h3>
            <p className="text-gray-300 text-sm text-center">
              Mental resilience and cognitive optimization for peak performance.
            </p>
          </div>
          
          {/* Steel Recovery Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/5_nu0q1v.png" alt="Steel Recovery" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Recovery</h3>
            <p className="text-gray-300 text-sm text-center">
              Rest and regeneration protocols that maximize your training adaptations.
            </p>
          </div>
          
          {/* Steel Nutrition Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/6_nm0dgv.png" alt="Steel Nutrition" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Nutrition</h3>
            <p className="text-gray-300 text-sm text-center">
              Sustainable eating strategies that fuel your goals.
            </p>
          </div>
          
          {/* Steel Assessment Card */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-[#00FF1A]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drxykwg61/image/upload/v1750739251/7_o966tf.png" alt="Steel Assessment" className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Steel Assessment</h3>
            <p className="text-gray-300 text-sm text-center">
              Data-driven tracking to ensure you're always progressing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodPillars;
