
import { Link } from 'react-router-dom';
import { FolderGit2, Award, Code, BrainCircuit } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Dashboard = () => {
  const featuredProjects = projectsData.slice(0, 3);
  
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="gradient-bg rounded-xl p-6 md:p-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Hello, I'm Praveen Kumar Kasiralla</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Full Stack Developer & Machine Learning Enthusiast
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              View Projects
            </Link>
            <Link to="/contact" className="bg-blue-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Projects" 
          value="10" 
          icon={<FolderGit2 className="h-6 w-6 text-blue-500" />} 
          color="bg-blue-50" 
        />
        <StatsCard 
          title="ML Projects" 
          value="5" 
          icon={<BrainCircuit className="h-6 w-6 text-purple-500" />} 
          color="bg-purple-50" 
        />
        <StatsCard 
          title="Technologies" 
          value="15+" 
          icon={<Code className="h-6 w-6 text-green-500" />} 
          color="bg-green-50" 
        />
        <StatsCard 
          title="Achievement" 
          value="9 Projects in 16 Days" 
          icon={<Award className="h-6 w-6 text-yellow-500" />} 
          color="bg-yellow-50" 
        />
      </section>
      
      {/* Featured projects section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Projects</h2>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* Quick intro section */}
      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              I'm a dynamic Full Stack Developer with experience at Mobishaala, specializing in machine learning and API integration.
              I have proven ability to enhance educational platforms through innovative solutions and responsive design.
            </p>
            <p className="text-gray-600 mb-4">
              My passion is building AI-powered applications that solve real problems. I recently completed 9 projects in just 16 days,
              showcasing my dedication and quick learning abilities.
            </p>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 font-medium inline-block">
              Learn more about me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
