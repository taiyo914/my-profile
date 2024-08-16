import React from 'react';
// import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">My Portfolio</div >
        <ul className="flex space-x-4">
          <li>Home </li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
