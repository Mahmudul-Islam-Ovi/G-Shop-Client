import React from 'react';
import img from '../../assets/boy2.png'

const TeamMember = ({ name, position, description }) => {
  return (
    <div className="flex">
      <img
        className="h-10 w-10 rounded-full"
        src={img}
        alt={`${name} profile`}
      />
      <div className="ml-4">
        <h4 className="text-lg font-bold text-gray-900">{name}</h4>
        <p className="text-gray-500">{position}</p>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
