
import { Link } from 'react-router-dom';
import { FolderGit2, Award, Code, BrainCircuit } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { 
  SidebarProvider,
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../components/ui/sidebar';

const Dashboard = () => {
  const featuredProjects = projectsData.slice(0, 3);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="px-6 py-4">
            <h2 className="text-xl font-bold text-blue-600">Admin Dashboard</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/projects" className="flex items-center gap-2">
                    <FolderGit2 size={20} />
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/about" className="flex items-center gap-2">
                    <Award size={20} />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Code size={20} />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          {/* Hero section */}
          <section className="bg-gradient-to-r from-blue-600 to-green-400 rounded-xl p-6 md:p-10 text-white mb-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Hello, I'm Praveen Kumar Kasiralla</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Full Stack Developer & Content Creator
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
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Total Projects" 
              value="10" 
              icon={<FolderGit2 className="h-6 w-6 text-blue-500" />} 
              color="bg-blue-50" 
            />
            <StatsCard 
              title="ML Projects" 
              value="5" 
              icon={<BrainCircuit className="h-6 w-6 text-green-500" />} 
              color="bg-green-50" 
            />
            <StatsCard 
              title="Technologies" 
              value="15+" 
              icon={<Code className="h-6 w-6 text-purple-500" />} 
              color="bg-purple-50" 
            />
            <StatsCard 
              title="Achievement" 
              value="9 Projects in 16 Days" 
              icon={<Award className="h-6 w-6 text-yellow-500" />} 
              color="bg-yellow-50" 
            />
          </section>
          
          {/* Featured projects section */}
          <section className="bg-white rounded-xl shadow-sm p-6">
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
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
