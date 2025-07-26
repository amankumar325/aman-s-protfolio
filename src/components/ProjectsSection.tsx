
import React, { useState } from 'react';
import { Building, Construction, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

// Project category types
type ProjectCategory = 'all' | 'structural' | 'transportation' | 'environmental';

// Project interface
interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  image: string;
  icon: React.ReactNode;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 'p1',
    title: 'G+7 Residential Building',
    description: 'Design and construction of a modern residential building with sustainable features.',
    category: 'structural',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Building className="h-5 w-5" />
  },
  {
    id: 'p2',
    title: 'Electricity Generation from Solid Waste',
    description: 'Engineering project for generating electricity from solid waste using advanced technologies.',
    category: 'environmental',
    image: 'https://images.unsplash.com/photo-1565429520965-13f526df0206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Layers className="h-5 w-5" />
  },
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // List of categories for filter buttons
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'structural', label: 'Structural' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'environmental', label: 'Environmental' },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-brown">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore my portfolio of civil engineering projects spanning various disciplines and challenges.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-skyblue text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {project.category}
                  </span>
                  <Link 
                    to={`/project/${project.id}`}
                    className="text-skyblue font-medium flex items-center gap-1 text-sm hover:underline"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
            See All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
