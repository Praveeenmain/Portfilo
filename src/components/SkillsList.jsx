
import React from 'react';

const SkillsList = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className={`p-2 rounded-full ${skill.bgColor}`}>
            {skill.icon}
          </div>
          <span className="ml-3 text-sm font-medium text-gray-700">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
