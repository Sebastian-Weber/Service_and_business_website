import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-500">
            Navbar
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Themenseite1">Themenseite1</Link></li>
        <li><Link to="/Themenseite2">Themenseite2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;