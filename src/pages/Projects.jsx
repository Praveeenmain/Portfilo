import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ML', name: 'Machine Learning' },
    { id: 'AI', name: 'AI & LLM' },
    { id: 'Full Stack', name: 'Full Stack' },
    { id: 'NLP', name: 'NLP' },
    { id: 'AIAutomation', name: 'AI Automation' },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h1>
        <p className="text-gray-600">
          Explore my portfolio of projects spanning machine learning, AI, and full-stack development
        </p>
      </section>
      
      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects found with the selected filter.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
