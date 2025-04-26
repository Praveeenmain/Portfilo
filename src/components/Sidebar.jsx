
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderGit2, User, Mail, Github, Linkedin, Youtube,Instagram } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'About Me', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="px-6 py-6">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">
            PK
          </div>
          <span className="ml-3 text-xl font-bold">Praveen Kumar</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              } group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200`}
            >
              <item.icon className={`${
                isActive(item.path) ? 'text-blue-600' : 'text-gray-500'
              } mr-3 h-5 w-5`} />
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="px-3 py-4 border-t border-gray-200">
        <div className="flex justify-around">
          <a href="https://github.com/Praveeenmain" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kasiralla-praveenkumar-b201a9241/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="https://www.youtube.com/@PraveenUnfiltered-11" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
            <Youtube size={20} />
          </a>
          <a href="https://www.instagram.com/praveenunflitered/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
