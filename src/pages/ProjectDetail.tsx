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
    title: 'Sky Bridge Design',
    description: 'Innovative pedestrian bridge connecting two downtown buildings with sustainable materials.',
    category: 'structural',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Building className="h-5 w-5" />,
    fullDescription: 'This project involved designing a pedestrian sky bridge that connects two major downtown buildings, providing safe and efficient passage between structures while enhancing the urban skyline. The design focused on using sustainable materials and minimizing the environmental impact during construction and throughout the bridge\'s lifetime.',
    client: 'City Development Corporation',
    completionDate: 'March 2023',
    duration: '8 months',
    challenges: [
      'Limited connection points between existing buildings',
      'Need for lightweight yet strong materials',
      'Aesthetic requirements to complement city skyline',
      'Weather resistance considerations'
    ],
    solutions: [
      'Implemented a tensile structure with carbon fiber reinforced polymers',
      'Used computational fluid dynamics to analyze wind loads',
      'Incorporated transparent materials for natural lighting',
      'Designed modular components for ease of installation'
    ],
    technologies: ['BIM Modeling', 'Structural Analysis Software', 'Wind Load Simulation']
  },
  {
    id: 'p2',
    title: 'Metro Line Extension',
    description: 'Urban transit solution with minimal environmental impact and maximum efficiency.',
    category: 'transportation',
    image: 'https://images.unsplash.com/photo-1565429520965-13f526df0206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Layers className="h-5 w-5" />,
    fullDescription: 'The Metro Line Extension project aimed to expand the existing urban transit system to serve growing residential areas while minimizing environmental impact. The project involved comprehensive planning and engineering to create an efficient, sustainable, and user-friendly transportation solution.',
    client: 'Metropolitan Transit Authority',
    completionDate: 'November 2022',
    duration: '14 months',
    challenges: [
      'Crossing environmentally sensitive areas',
      'Integrating with existing transit infrastructure',
      'Minimizing disruption to current traffic patterns',
      'Meeting strict noise reduction requirements'
    ],
    solutions: [
      'Designed elevated sections to minimize ground impact',
      'Created seamless connection points with existing metro lines',
      'Implemented advanced noise dampening technology',
      'Used prefabricated components to speed up construction'
    ],
    technologies: ['GIS Mapping', 'Transit Flow Simulation', 'Noise Impact Assessment']
  },
  // Other projects would follow the same pattern
  {
    id: 'p3',
    title: 'Green Stormwater System',
    description: 'Sustainable water management system for urban neighborhoods reducing flooding risks.',
    category: 'environmental',
    image: 'https://images.unsplash.com/photo-1625246333195-78d73a99e89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Construction className="h-5 w-5" />,
    fullDescription: 'This innovative stormwater management system was designed to address urban flooding issues while promoting environmental sustainability. The project incorporated green infrastructure elements to manage rainwater at its source, reduce runoff, and improve water quality.',
    client: 'City Environmental Department',
    completionDate: 'July 2023',
    duration: '10 months',
    challenges: [
      'High water table in urban area',
      'Limited space for infrastructure',
      'Integration with existing drainage system',
      'Community aesthetic concerns'
    ],
    solutions: [
      'Implemented permeable pavement in key areas',
      'Designed bioswales along major streets',
      'Created underground water detention systems',
      'Used native plants for beautification and water absorption'
    ],
    technologies: ['Hydrological Modeling', 'GIS', 'Water Quality Analysis']
  },
  {
    id: 'p4',
    title: 'Earthquake Resistant Tower',
    description: 'High-rise building design with advanced seismic protection systems.',
    category: 'structural',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Building className="h-5 w-5" />,
    fullDescription: 'The Earthquake Resistant Tower project focused on creating a high-rise structure capable of withstanding significant seismic activity. The design incorporated cutting-edge engineering principles and technologies to ensure occupant safety and structural integrity during earthquakes.',
    client: 'Urban Development Corporation',
    completionDate: 'January 2023',
    duration: '16 months',
    challenges: [
      'Located in high seismic risk zone',
      'Height requirements from client',
      'Cost constraints on specialized materials',
      'Integration of building systems with seismic design'
    ],
    solutions: [
      'Implemented base isolation system',
      'Used dampers to absorb seismic energy',
      'Designed flexible structural connections',
      'Created redundant load paths throughout the structure'
    ],
    technologies: ['Seismic Analysis Software', 'Structural Dynamics Simulation', 'Building Performance Modeling']
  },
  {
    id: 'p5',
    title: 'Solar Highway System',
    description: 'Highway design incorporating solar panels and efficient traffic management.',
    category: 'transportation',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Layers className="h-5 w-5" />,
    fullDescription: 'The Solar Highway System project combined transportation infrastructure with renewable energy generation. This innovative approach used highway surfaces and adjacent areas to capture solar energy while improving traffic flow and safety.',
    client: 'State Transportation Department',
    completionDate: 'August 2022',
    duration: '12 months',
    challenges: [
      'Integrating solar panels with road surfaces',
      'Ensuring durability under heavy traffic loads',
      'Managing energy storage and distribution',
      'Maintaining safe driving conditions'
    ],
    solutions: [
      'Used special photovoltaic materials for road surfaces',
      'Designed energy storage facilities along the highway',
      'Implemented smart lighting powered by captured energy',
      'Created solar sound barriers with integrated panels'
    ],
    technologies: ['Photovoltaic Engineering', 'Traffic Flow Analysis', 'Energy Management Systems']
  },
  {
    id: 'p6',
    title: 'River Restoration',
    description: 'Urban river rehabilitation project improving water quality and ecosystem health.',
    category: 'environmental',
    image: 'https://images.unsplash.com/photo-1629461461750-ef5b9913522b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Construction className="h-5 w-5" />,
    fullDescription: 'The River Restoration project focused on rehabilitating an urban river that had been degraded due to industrial use and poor planning. The project aimed to improve water quality, restore natural habitats, prevent flooding, and create recreational spaces for the community.',
    client: 'Environmental Protection Agency',
    completionDate: 'May 2023',
    duration: '18 months',
    challenges: [
      'Heavy contamination from historical industrial use',
      'Unstable riverbanks prone to erosion',
      'Urban development constraints along river',
      'Balancing flood control with ecological restoration'
    ],
    solutions: [
      'Implemented natural water filtration systems',
      'Restored native vegetation along riverbanks',
      'Created flood plains in strategic areas',
      'Designed pedestrian-friendly recreation zones'
    ],
    technologies: ['Water Quality Testing', 'Ecological Assessment', 'Hydrological Modeling', 'Landscape Architecture']
  }
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
