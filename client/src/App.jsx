import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainDeck from './MainDeck/MainDeck';
import CreateDeck from './CreateDeck/CreateDeck';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDeck />} />
        <Route path="/createdeck" element={<CreateDeck />} />
      </Routes>
    </Router>
  );
}

export default App;
