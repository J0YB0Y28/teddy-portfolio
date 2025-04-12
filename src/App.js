import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TerminalIntro from './TerminalIntro';
import MainInterface from './MainInterface';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalIntro />} />
        <Route path="/home" element={<MainInterface />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
