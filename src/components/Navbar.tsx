
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Construction } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Highlight the current section in the navbar
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset to trigger earlier
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(itemId.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "py-3 bg-white/80 backdrop-blur-md shadow-md" 
        : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Construction className="h-8 w-8 text-skyblue transition-transform group-hover:rotate-12 duration-300" />
          <span className="font-bold text-lg md:text-xl">
            <span className="text-skyblue">Aman's</span>
            <span className="text-brown">Profile</span>
          </span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={cn(
                    "font-medium transition-colors relative py-2",
                    activeSection === item.toLowerCase() 
                      ? "text-skyblue"
                      : "text-gray-600 hover:text-skyblue",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-skyblue after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                    activeSection === item.toLowerCase() && "after:scale-x-100 after:origin-bottom-left"
                  )}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button 
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300 animate-fade-in">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, item.toLowerCase())}
                      className={cn(
                        "block py-2 px-4 rounded-md font-medium transition-colors",
                        activeSection === item.toLowerCase() 
                          ? "bg-skyblue/10 text-skyblue" 
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
