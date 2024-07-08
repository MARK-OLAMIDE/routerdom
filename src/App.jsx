import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <>  
      <Nav />
      <h1>Welcome Home</h1>
      <Routes>
        <Route path="/" element={App} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
