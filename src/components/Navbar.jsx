
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="ml-3 text-xl font-bold text-blue-600">
            Praveen<span className="text-gray-800">Kumar</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-blue-600">
            <Bell size={20} />
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </button>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2">
          <div className="flex flex-col space-y-2 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
