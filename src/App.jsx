import React from 'react';
import HomePage from './HomePage.jsx';
import GamePage from './GamePage.jsx';
import SearchPage from './SeachPage.jsx';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
    <Router>
    <div>
      <header>
      {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
        <div className="search-container">
          <input type="text" id="search-input" placeholder="Pesquisar..." />
          <p id="search-description">DESCUBRA E AVALIE SEUS JOGOS FAVORITOS</p>
          <ul id="search-suggestions"></ul>
          <button id="search-button">Pesquisar</button>
        </div>
      </header>
      <Outlet />
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/search" element={<SearchPage />} />
          
      </Routes>
      <footer>
        <p>&copy; aVAlie seus jogos favoritos</p>
        <p>&copy; 2023 grupo 4 Ltda | unifei | itajubá-MG</p>
      </footer>
    </div>
    
    </Router>
    </>
  );
}

export default App;
