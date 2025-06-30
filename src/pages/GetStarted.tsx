import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetStartedHero from '@/components/GetStartedHero';

// Import shadcn UI components
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
        <GetStartedHero />
        
      {/* Calendly Widget */}
      <section className="py-12 px-4 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <div className="w-full">
            <div
              className="calendly-inline-widget w-full h-[500px] md:h-[700px]"
              data-url="https://calendly.com/info-vcn?background_color=000000&text_color=ffffff&primary_color=11a211"
              id="calendly-widget"
            ></div>
            {/* Add a fallback message in case widget doesn't load */}
            <div id="calendly-fallback" className="hidden text-center py-8">
              <p className="text-white mb-4">If the scheduling widget doesn't appear, please click the button below:</p>
              <a 
                href="https://calendly.com/info-vcn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-black py-3 px-6 rounded-md font-semibold"
              >
                Open Scheduling Page
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 mt-4">
        <div className="container mx-auto max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Connect With Steel</h1>
                <p className="text-gray-300 mb-8">
                  Whether you have questions about our programs, want to tour our facility, or are
                  ready to begin your transformation, we're here to help.
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-wider">Location</h2>
                <p className="text-gray-300">1355, Nehanta Jubilee One</p>
                <p className="text-gray-300">Jubilee Hills Road No.1 and Road 45 Junction</p>
                <p className="text-gray-300">Adjacent to HDFC Bank, Nandagiri Hills</p>
                <p className="text-gray-300">Jubilee Hills, Hyderabad 500033</p>
              </div>
              
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-wider">Phone</h2>
                <p className="text-gray-300">+91 9542999999</p>
              </div>
              
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-wider">Email</h2>
                <p className="text-gray-300">support@steelpt.in</p>
              </div>
              
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-wider">Hours</h2>
                <p className="text-gray-300">Monday - Sunday: 6:00 AM - 10:00 PM</p>
                <p className="text-gray-300">Free consultations available</p>
                <p className="text-gray-300">Advance booking recommended</p>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <Card className="bg-zinc-900 border-zinc-800 shadow-lg mt-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Connect With Steel</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-300">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Full Name" 
                      className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#00FF1A] focus-visible:ring-offset-zinc-900"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      placeholder="Email" 
                      className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#00FF1A] focus-visible:ring-offset-zinc-900"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      placeholder="Phone" 
                      className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#00FF1A] focus-visible:ring-offset-zinc-900"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="programInterest" className="text-gray-300">Program Interest</Label>
                    <Select required>
                      <SelectTrigger 
                        id="programInterest" 
                        className="bg-zinc-800 border-zinc-700 text-white focus:ring-[#00FF1A] focus:ring-offset-zinc-900"
                      >
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectItem value="advanced">Advanced Trainer - ₹50,000/month</SelectItem>
                        <SelectItem value="master">Master Coach - ₹85,000/month</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="tour">Facility Tour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fitnessExperience" className="text-gray-300">Fitness Experience</Label>
                    <Select required>
                      <SelectTrigger 
                        id="fitnessExperience" 
                        className="bg-zinc-800 border-zinc-700 text-white focus:ring-[#00FF1A] focus:ring-offset-zinc-900"
                      >
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="athlete">Competitive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goals" className="text-gray-300">Your Goals</Label>
                    <Textarea 
                      id="goals" 
                      placeholder="Tell us about your fitness goals and what you want to achieve..." 
                      rows={4} 
                      className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#00FF1A] focus-visible:ring-offset-zinc-900"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-white hover:bg-[#00FF1A] text-black font-bold transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </section>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
