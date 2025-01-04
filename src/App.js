import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Research from './components/Research';
import Projects from './components/Projects';
import Nonprofit from './components/Nonprofit';
import ThoughtLeadership from './components/Thought_Leadership';
import Contact from './components/Contact';

// articles
import MachineEthics from './components/articles/Machine_Ethics.js'

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
            <Route path="/thought-leadership" element={<ThoughtLeadership />} />
            <Route path="/contact" element={<Contact />} />
            {/* Articles */}
            <Route path="/thought-leadership/machine-ethics" element={<MachineEthics />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
