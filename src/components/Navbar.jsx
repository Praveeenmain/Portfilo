import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-400 text-white px-4 lg:px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="ml-3 text-xl font-bold text-Red-600">
          Kasiralla <span className="text-gray-800">PraveenKumar</span>
          </Link>
        </div>

        {/* Center Logo for large screens */}
        <div className="hidden lg:block">
          <Link to="/" className="text-2xl font-bold text-blue-600">
           Kasiralla <span className="text-gray-800">PraveenKumar</span>
          </Link>
        </div>

        {/* Right side - Bell and Profile */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-blue-600">
            <Bell size={20} />
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </button>
          <div className="flex items-center">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIXTDtsUnurYju24AsrV7CupP55ru6EslnOn1VhGFQ1jqwDWyxr=s576-c-no"
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
