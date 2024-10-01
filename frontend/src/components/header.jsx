import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <header>
      <div class="w-full fixed z-20 top-0 bg-blue-500">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;