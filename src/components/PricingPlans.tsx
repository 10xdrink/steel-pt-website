import React from 'react';

const PricingPlans = () => {
  return (
    <section id="pricing" className="bg-black text-white py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#00FF1A] text-black text-xs font-medium px-4 py-1 rounded-full uppercase mb-6 shadow-lg shadow-[#00FF1A]/20 transform hover:scale-105 transition-transform duration-300">
            INVESTMENT PLANS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Two Paths. One Goal.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Choose the approach that matches your commitment level and transformation goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Advanced Trainer Card */}
          <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800 flex flex-col hover:border-[#00FF1A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF1A]/10 transform hover:-translate-y-1 group">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-3 flex items-center">
                Advanced Trainer
                <span className="ml-3 bg-[#00FF1A]/10 text-[#00FF1A] text-xs px-2 py-1 rounded-md">POPULAR</span>
              </h3>
              <div className="text-2xl font-bold text-[#00FF1A] mb-4 flex items-end">
                <span className="text-4xl">₹50,000</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg">For those who need the plan.</p>
              
              <div className="mb-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  These trainers are technicians. They diagnose problems, structure your training, and guide you with precision. They give you the what, the how, and the why — so you stop guessing and start progressing.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="uppercase text-sm font-bold tracking-wider mb-4">PERFECT FOR:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00FF1A] flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">You're self-driven and motivated</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00FF1A] flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">You want clean form, clear programming</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00FF1A] flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">You just need the science — you'll do the work</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a href="/get-started" className="block w-full bg-white text-black py-4 rounded-md font-semibold hover:bg-white transition-colors uppercase mt-auto tracking-wider shadow-md shadow-white/15 hover:shadow-white/30 transform transition-all duration-300 text-center">
              START YOUR JOURNEY
            </a>
          </div>

          {/* Master Coach Card */}
          <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800 flex flex-col hover:border-[#00FF1A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF1A]/10 transform hover:-translate-y-1 group">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-3 flex items-center">
                Master Coach
                <span className="ml-3 bg-[#00FF1A]/10 text-[#00FF1A] text-xs px-2 py-1 rounded-md">PREMIUM</span>
              </h3>
              <div className="text-2xl font-bold text-[#00FF1A] mb-4 flex items-end">
                <span className="text-4xl">₹85,000</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg">For those who need the push.</p>
              
              <div className="mb-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Plans don't change people. Execution does. Master Coaches know when to call you out, when to lift you up, and how to make you do the hard things — especially when you don't feel like it. That's the art. And that's where results happen.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="uppercase text-sm font-bold tracking-wider mb-4">PERFECT FOR:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00FF1A] flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">You've tried before but it didn't stick</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00FF1A] flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">You need accountability and structure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00FF1A] flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">You need someone who won't let you quit</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a href="/get-started" className="block w-full bg-white text-black py-4 rounded-md font-semibold hover:bg-white transition-colors uppercase mt-auto tracking-wider shadow-md shadow-white/15 hover:shadow-white/30 transform transition-all duration-300 text-center">
              TRANSFORM YOUR LIFE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
