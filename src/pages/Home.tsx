import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio</h1>
      <p className="text-lg mt-4 text-gray-700">This is the home page.</p>
    </div>
  );
};

export default Home;
