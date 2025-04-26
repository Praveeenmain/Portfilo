
import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';

const SocialStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 flex items-center">
        <div className="p-3 rounded-full bg-red-50">
          <Youtube className="h-6 w-6 text-red-500" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">YouTube</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">1.2K</span>
            <span className="ml-1 text-sm text-gray-500">subscribers</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 flex items-center">
        <div className="p-3 rounded-full bg-purple-50">
          <Instagram className="h-6 w-6 text-purple-600" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">Instagram</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">3.4K</span>
            <span className="ml-1 text-sm text-gray-500">followers</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 flex items-center">
        <div className="p-3 rounded-full bg-blue-50">
          <Twitter className="h-6 w-6 text-blue-400" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">Twitter</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">850</span>
            <span className="ml-1 text-sm text-gray-500">followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStats;
