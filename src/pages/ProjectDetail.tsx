import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Building, Construction, Layers, ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Same project interface as in ProjectsSection
interface Project {
  id: string;
  title: string;
  description: string;
  category: 'structural' | 'transportation' | 'environmental';
  image: string;
  icon: React.ReactNode;
  // Additional details for project detail page
  fullDescription?: string;
  client?: string;
  completionDate?: string;
  duration?: string;
  challenges?: string[];
  solutions?: string[];
  technologies?: string[];
}

// Sample projects data with extended information
const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'G+7 Residential Building',
    description: 'Design and construction of a modern residential building with sustainable features.',
    category: 'structural',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Building className="h-5 w-5" />,
    fullDescription: 'The G+7 Residential Building project involved the design and construction of a modern residential complex that emphasizes sustainability and community living. The building features advanced structural systems, energy-efficient technologies, and a focus on occupant comfort.',
    client: 'Urban Housing Development Corp',
    completionDate: 'July 2025',
    duration: '1 months',
    challenges: [
      'High wind loads due to location',
      'Limited space for construction',
      'Incorporating sustainable materials',
      'Ensuring structural integrity with modern design',
      'Meeting local building codes and regulations'
    ],
    solutions: [
      'Utilized advanced structural analysis software',
      'Incorporated wind-resistant design features',
      'Used prefabricated components to reduce site congestion',
      'Implemented green building materials and technologies',
      'Conducted thorough site analysis and planning'
    ],
    technologies: ['Structural Analysis Software', 'BIM (Building Information Modeling)', 'Energy Simulation Tools']
  },
  {
    id: 'p2',
    title: 'Electricity Genereation from solid waste',
    description: 'Engineering project for generating electricity from solid waste using advanced technologies.',
    category: 'Environmental',
    image: 'https://images.unsplash.com/photo-1565429520965-13f526df0206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Layers className="h-5 w-5" />,
    fullDescription: 'This project focuses on the engineering and implementation of a system that converts solid waste into electricity. By utilizing advanced technologies, the project aims to address waste management challenges while providing a sustainable energy source.',
    completionDate: 'April 2025',
    duration: '1 months',
    challenges: [
      'High volume of solid waste generation',
      'Ensuring efficient waste sorting and processing',
      'Integrating with existing waste management systems',
      'Maintaining environmental standards',
      'Public acceptance and community engagement'
    ],
    solutions: [
      'Developed automated waste sorting systems',
      'Implemented anaerobic digestion technology',
      'Designed energy recovery facilities',
      'Conducted environmental impact assessments',
      'Engaged with community stakeholders through workshops and information sessions'
    ],
    technologies: ['Anaerobic Digestion', 'Waste-to-Energy Systems', 'Advanced Sorting Technologies', 'Environmental Monitoring Systems']
  },
  // Other projects would follow the same pattern
  
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const project = projectsData.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <div className="container mx-auto">
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{project.title}</h1>
              <p className="text-white/80 mt-2 max-w-2xl">{project.description}</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {project.challenges?.map((challenge, index) => (
                    <li key={index} className="text-gray-700">{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solutions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {project.solutions?.map((solution, index) => (
                    <li key={index} className="text-gray-700">{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-skyblue/10 p-2 rounded-md">
                      <User className="h-5 w-5 text-skyblue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Client</h4>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-skyblue/10 p-2 rounded-md">
                      <Calendar className="h-5 w-5 text-skyblue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Completion Date</h4>
                      <p className="text-gray-600">{project.completionDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-skyblue/10 p-2 rounded-md">
                      <Clock className="h-5 w-5 text-skyblue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Project Duration</h4>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span key={index} className="bg-skyblue/5 text-skyblue px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Category</h4>
                    <span className="bg-brown/5 text-brown px-3 py-1 rounded-full text-sm capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
