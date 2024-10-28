// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>The Pub</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
