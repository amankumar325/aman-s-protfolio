
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add enhanced smooth scroll effect when component mounts
  useEffect(() => {
    // Add smooth reveal animations for sections with enhanced effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animation to child elements
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
                (child as HTMLElement).classList.remove('opacity-0');
              }, index * 100); // Staggered delay based on element index
            });
            
            // Main section animation
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            
            // Add 3D perspective effect
            entry.target.classList.add('transform-active');
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    // Observe all sections for animation with enhanced 3D effect
    document.querySelectorAll('section:not(#home)').forEach((section) => {
      section.classList.add('opacity-0', 'transform-gpu', 'transition-all', 'duration-700');
      observer.observe(section);
    });
    
    // Add parallax scroll effect to certain elements
    const handleParallax = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax').forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.1');
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
