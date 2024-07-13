import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/category/tech">Tech</Link></li>
        <li><Link className="text-white" to="/category/lifestyle">Lifestyle</Link></li>
        <li><Link className="text-white" to="/category/mobile">Mobile</Link></li>
        <li><Link className="text-white" to="/category/laptop">Laptop</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
