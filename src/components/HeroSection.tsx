
import React from 'react';
import { cn } from '@/lib/utils';
import { HardHat, Map, Ruler } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-skyblue/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -left-10 w-60 h-60 rounded-full bg-brown/10 blur-3xl animate-pulse-slow animation-delay-200"></div>
      
      {/* Floating icons */}
      <div className="hidden lg:block absolute top-1/3 right-20 animate-float animation-delay-200">
        <HardHat className="w-16 h-16 text-brown/40" />
      </div>
      <div className="hidden lg:block absolute bottom-1/4 left-24 animate-float animation-delay-400">
        <Ruler className="w-14 h-14 text-skyblue/60" />
      </div>
      <div className="hidden lg:block absolute top-2/3 right-1/4 animate-float">
        <Map className="w-12 h-12 text-brown/30" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-skyblue font-semibold">Civil Engineer Student</h2>
              <h1 className="heading-xl mt-2">
                <span className="text-brown block mb-2">Aman Kumar</span>
                Building The 
                <span className="text-skyblue relative ml-3 inline-block">
                  Future
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-skyblue" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path 
                      d="M0,5 Q40,0 80,5 T160,5 T200,5" 
                      strokeWidth="3" 
                      stroke="currentColor" 
                      fill="none" 
                      className="animate-draw" 
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
                Dedicated civil engineering student from Excel Engineering College India. Passionate about sustainable infrastructure, 
                innovative design solutions, and creating structures that leave a lasting impact on communities.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn-primary smooth-scroll">
                View Projects
              </a>
              <a href="#contact" className="border-2 border-skyblue text-skyblue px-6 py-[10px] rounded-md font-medium transition-all duration-300 hover:bg-skyblue/10 smooth-scroll">
                Contact Me
              </a>
            </div>
            
            <div className="pt-8 flex gap-8 items-center">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-10 h-10 rounded-full border-2 border-white flex items-center justify-center",
                      i === 0 ? "bg-skyblue" : i === 1 ? "bg-brown" : "bg-gray-800"
                    )}
                  >
                    <span className="text-xs font-bold text-white">{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">10+ Projects</span> completed with excellence
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-white">
              <div className="relative overflow-hidden rounded-xl h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Aman Kumar - Civil Engineering Student"
                  className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-xl">Aman Kumar</p>
                  <p className="text-sm">Civil Engineering Student</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-lg border-4 border-brown/30 -z-10"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-lg border-4 border-skyblue/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
