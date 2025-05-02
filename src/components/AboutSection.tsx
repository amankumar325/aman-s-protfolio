
import React from 'react';
import { Construction, Building, Ruler, Map } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-skyblue">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            Passionate civil engineering student with a focus on sustainable infrastructure and innovative design solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="heading-md">Hey there, I'm <span className="text-brown">Alex Morgan</span></h3>
            <p className="text-gray-600">
              I'm a final-year civil engineering student at MIT with a passion for 
              sustainable urban development and innovative structural design. My journey 
              in civil engineering began with a fascination for how structures shape our 
              daily lives and communities.
            </p>
            <p className="text-gray-600">
              Through internships at leading firms like Foster + Partners and AECOM,
              I've gained hands-on experience in structural analysis, BIM modeling, and 
              sustainable design practices. I believe the future of civil engineering lies 
              in the integration of smart technologies with traditional construction methods.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-brown flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Education
                </h4>
                <p className="text-sm mt-1">
                  MIT, Civil Engineering<br />
                  Class of 2024<br />
                  GPA: 3.92/4.0
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-skyblue flex items-center gap-2">
                  <Construction className="w-5 h-5" />
                  Experience
                </h4>
                <p className="text-sm mt-1">
                  AECOM - Intern<br />
                  Foster + Partners<br />
                  Research Assistant
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Civil Engineer Student"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 bg-brown/10 w-3/4 h-3/4 rounded-3xl -z-10"></div>
            <div className="absolute -top-16 right-8 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3">
              <Ruler className="w-8 h-8 text-skyblue" />
              <span className="font-semibold">Structural Design</span>
            </div>
            <div className="absolute -left-12 top-1/3 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3">
              <Map className="w-8 h-8 text-brown" />
              <span className="font-semibold">Site Planning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
