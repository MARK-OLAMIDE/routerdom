import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Task from './Task';
import Button from './components/Button';

function App() {
  return (
    <>  
      <Nav />
      <h1>Welcome Home</h1>
      <Task myHeader='Task Tracker'/>
      <Button text='Add'/>
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
