import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <header>
      <div class="w-screen fixed z-50 top-0 bg-blue-500">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;