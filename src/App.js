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
import PrecuationaryBasicIncome from './components/articles/Precautionary_Basic_Income.js'
import HackingAuthenticity from './components/articles/Hacking_Authenticity.js'
import ContinuityConsciousnes from './components/articles/Continuity_Consciousness.js'
import AIRights from './components/articles/AI_Rights.js'
import MachineGod from './components/articles/Machine_God.js'
import RomanMasculinity from './components/articles/Roman_Masculinity.js'
import Chat from './components/articles/Chat.js'
import Fluids from './components/articles/Fluids.js'
import Stocks from './components/articles/Stocks.js'
import SparsitySkew from './components/articles/Sparsity_and_Skew.js'
import Riemann from './components/articles/Riemann.js'
import GOSDT from './components/articles/GOSDT.js'


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
            <Route path="/thought-leadership/precautionary-basic-income" element={<PrecuationaryBasicIncome />} />
            <Route path="/thought-leadership/hacking-authenticity" element={<HackingAuthenticity />} />
            <Route path="/thought-leadership/continuity-consciousness" element={<ContinuityConsciousnes />} />
            <Route path="/thought-leadership/ai-rights" element={<AIRights />} />
            <Route path="/thought-leadership/machine-god" element={<MachineGod />} />
            <Route path="/thought-leadership/roman-masculinity" element={<RomanMasculinity />} />
            <Route path="/thought-leadership/chat" element={<Chat />} />
            <Route path="/thought-leadership/fluids" element={<Fluids />} />
            <Route path="/thought-leadership/stocks" element={<Stocks />} />
            <Route path="/thought-leadership/sparsity-skew" element={<SparsitySkew />} />
            <Route path="/thought-leadership/riemann-siegel" element={<Riemann />} />
            <Route path="/thought-leadership/gosdt-efficiency" element={<GOSDT />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
