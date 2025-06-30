import React from 'react';

const MethodPrinciples = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <button className="bg-transparent text-[#00FF1A] text-xs font-medium px-4 py-2 rounded-full uppercase border border-[#00FF1A] mb-6">
            CORE PRINCIPLES
          </button>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Transform Lives
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our approach goes beyond workouts. We rebuild you from the ground up.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Educate Card */}
          <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl p-8 border border-zinc-800 shadow-lg shadow-[#00FF1A]/10 hover:shadow-[#00FF1A]/20 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF1A] to-transparent opacity-70"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-[#00FF1A]/30">
                <svg className="w-6 h-6 text-[#00FF1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 uppercase text-[#00FF1A] text-center">EDUCATE</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Knowledge is power. We teach you the science behind every movement, every program, every principle. When you understand why, consistency follows.
            </p>
            <div className="w-16 h-1 bg-[#00FF1A]/30 mx-auto group-hover:bg-[#00FF1A] transition-all duration-300"></div>
          </div>
          
          {/* Motivate Card */}
          <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl p-8 border border-zinc-800 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 uppercase text-white text-center">MOTIVATE</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              External motivation fades. We build internal drive through achievable goals, constant progress, and celebrating every victory along the way.
            </p>
            <div className="w-16 h-1 bg-white/30 mx-auto group-hover:bg-white transition-all duration-300"></div>
          </div>
          
          {/* Transform Card */}
          <div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl p-8 border border-zinc-800 shadow-lg shadow-[#FFD700]/10 hover:shadow-[#FFD700]/20 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-70"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-[#FFD700]/30">
                <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 uppercase text-[#FFD700] text-center">TRANSFORM</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Real change happens when mind and body work together. We transform your relationship with fitness, not just your appearance.
            </p>
            <div className="w-16 h-1 bg-[#FFD700]/30 mx-auto group-hover:bg-[#FFD700] transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodPrinciples;
