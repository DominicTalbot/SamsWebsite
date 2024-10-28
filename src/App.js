// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
