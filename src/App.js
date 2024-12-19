import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Research from './components/Research';
import Projects from './components/Projects';
import Nonprofit from './components/Nonprofit';
import Contact from './components/Contact';
import './App.css';


function App() {

  return (
    <Router>
      <Header />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/nonprofit" element={<Nonprofit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
