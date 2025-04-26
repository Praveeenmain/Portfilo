
import React from 'react';

const TimelineItem = ({ year, title, subtitle, description }) => {
  return (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200"></div>
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow"></div>
      <div className="pt-1">
        <span className="text-sm font-semibold text-blue-600">{year}</span>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
        <p className="text-sm font-medium text-gray-600">{subtitle}</p>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
