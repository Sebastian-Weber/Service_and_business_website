import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <div class="w-full fixed top-0 bg-blue-500">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;