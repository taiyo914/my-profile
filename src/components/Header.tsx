import React from 'react';
// import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
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
