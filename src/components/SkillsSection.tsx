
import React from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number; // 1-10
  category: 'technical' | 'software' | 'soft';
}

const skills: Skill[] = [
  // Technical skills
  { name: 'Structural Analysis', level: 9, category: 'technical' },
  { name: 'Construction Management', level: 8, category: 'technical' },
  { name: 'Site Planning', level: 7, category: 'technical' },
  { name: 'Geotechnical Engineering', level: 6, category: 'technical' },
  { name: 'Environmental Engineering', level: 7, category: 'technical' },
  
  // Software skills
  { name: 'AutoCAD', level: 9, category: 'software' },
  { name: 'Revit', level: 8, category: 'software' },
  { name: 'ETABS', level: 7, category: 'software' },
  { name: 'Civil 3D', level: 8, category: 'software' },
  { name: 'SketchUp', level: 9, category: 'software' },
  
  // Soft skills
  { name: 'Project Management', level: 8, category: 'soft' },
  { name: 'Team Leadership', level: 7, category: 'soft' },
  { name: 'Problem Solving', level: 9, category: 'soft' },
  { name: 'Communication', level: 8, category: 'soft' },
  { name: 'Time Management', level: 7, category: 'soft' },
];

const SkillsSection: React.FC = () => {
  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softwareSkills = skills.filter(skill => skill.category === 'software');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-skyblue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brown/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-skyblue">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive overview of my technical abilities, software proficiency, and professional competencies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-brown flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level * 10}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-skyblue"
                      style={{ width: `${skill.level * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Software Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-skyblue flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Software Proficiency
            </h3>
            
            <div className="space-y-4">
              {softwareSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level * 10}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brown"
                      style={{ width: `${skill.level * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Professional Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className={cn(
                    "px-4 py-2 rounded-full font-medium text-sm",
                    skill.level >= 9 ? "bg-skyblue text-white" :
                    skill.level >= 7 ? "bg-skyblue/20 text-skyblue" :
                    "bg-gray-100 text-gray-700"
                  )}
                >
                  {skill.name}
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-700 mb-3">Certifications</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  EIT Certification
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  LEED Green Associate
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  BIM Certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
