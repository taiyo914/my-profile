import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-between">
        <div>
          <Link to="/" className="text-lg font-bold">My Portfolio</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
