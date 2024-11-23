import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorMatch from './ColorMatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/color-match" element={<ColorMatch />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="title">Welcome to Kids Game Zone!</h1>
      <div className="game-card" onClick={() => window.location.href = '/color-match'}>
        <div className="card-content">
          <img src="https://via.placeholder.com/200" alt="Color Match Game" className="game-card-image" />
          <h2>Color Match Game</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
