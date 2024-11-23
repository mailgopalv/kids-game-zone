import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorMatch from './ColorMatch';
import ColorMatchImage from "./assets/images/colour-match-card.jpg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kids-game-zone/" element={<HomePage />} />
        <Route path="/kids-game-zone/color-match" element={<ColorMatch />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="title">TEST - Welcome to Kids Game Zone!</h1>
      <div className="game-card" onClick={() => window.location.href = '/kids-game-zone/color-match'}>
        <div className="card-content">
          <img src={ColorMatchImage} alt="Color Match Game" className="game-card-image" />
          <h2>Color Match Game</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
