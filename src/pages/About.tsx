import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-green-600">About Me</h1>
      <p className="text-lg mt-4 text-gray-800">This is the about page.</p>
    </div>
  );
};

export default About;
