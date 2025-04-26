import { Link } from 'react-router-dom';
import { Github, ExternalLink, Youtube } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden project-card border border-gray-100 flex flex-col">
      <div className="relative aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover max-h-[200px]"
        />
        <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-green-400 text-white px-2 py-1 text-xs font-medium rounded-bl-lg">
          {project.category}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <Link 
            to={`/projects/${project.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            View Details
          </Link>
          
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="View GitHub repository"
              >
                <Github size={18} />
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="View live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            
            {project.video && (
              <a 
                href={project.video} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Watch demo video"
              >
                <Youtube size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
