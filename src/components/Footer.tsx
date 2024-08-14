import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
