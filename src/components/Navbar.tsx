
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'METHOD', href: '/method' },
    { label: 'RESULTS', href: '/results' },
    { label: 'FACILITIES', href: '/facilities' },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className={cn(
      " top-0 left-0 right-0 z-50 w-full px-4 md:px-6 py-3 font-poppins transition-all duration-300",
      scrolled ? "bg-black shadow-lg" : "bg-black/90"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img 
              src="https://res.cloudinary.com/drxykwg61/image/upload/v1744708797/id1uphljem8ktzs8ws0s.webp" 
              alt="Steel PT Logo" 
              className="h-10 md:h-12 w-auto" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider"
            >
              {item.label}
            </a>
          ))}
          
          {/* Get Started Button */}
          <a href="/get-started">
            <Button
              variant="outline"
              className={cn(
                "bg-white text-black hover:bg-gray-200 border-white font-medium px-6 lg:px-8 py-2 text-sm tracking-wider",
                "rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105",
                "font-semibold"
              )}
            >
              Schedule A Visit
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/95 z-40 md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-8 py-8">
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-white text-xl font-medium tracking-wider hover:text-[#00FF1A] transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Get Started Button */}
            <a 
              href="/get-started"
              onClick={closeMenu}
              className="mt-4 bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md font-semibold tracking-wider transition-all duration-300"
            >
              Schedule A Visit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
