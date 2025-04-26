
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Youtube, Calendar, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  
  const project = projectsData.find(p => p.id === projectId);
  
  // Find next and previous projects
  const nextProject = projectsData.find(p => p.id === projectId + 1) || projectsData[0];
  const prevProject = projectsData.find(p => p.id === projectId - 1) || projectsData[projectsData.length - 1];
  
  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Project not found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for does not exist.</p>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
        <div className="relative h-[300px]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
            {project.category}
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{project.title}</h1>
          
          <p className="text-gray-600 text-lg mb-6">
            {project.longDescription}
          </p>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={18} className="mr-2" />
                View Source Code
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            )}
            
            {project.video && (
              <a 
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Youtube size={18} className="mr-2" />
                Watch Demo Video
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <Link to={`/projects/${prevProject.id}`} className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft size={16} className="mr-2" />
          <span>
            <span className="block text-xs text-gray-500">Previous</span>
            {prevProject.title}
          </span>
        </Link>
        
        <Link to={`/projects/${nextProject.id}`} className="flex items-center text-blue-600 hover:text-blue-800">
          <span>
            <span className="block text-xs text-gray-500 text-right">Next</span>
            {nextProject.title}
          </span>
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
