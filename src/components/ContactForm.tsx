import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-black rounded-xl p-8 border border-zinc-800 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Take the first step towards your fitness goals
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF1A] focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF1A] focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF1A] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF1A] focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="goals" className="block text-gray-300 mb-2">Your Fitness Goals</label>
              <textarea 
                id="goals" 
                rows={4}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF1A] focus:border-transparent"
                placeholder="Tell us about your fitness goals and what you hope to achieve"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="bg-white hover:bg-[#00FF1A] text-black font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
