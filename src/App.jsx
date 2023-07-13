import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import GamePage from './GamePage';
import SearchPage from './SeachPage'
import UserSearchPage from './UserSearchPage';

import './App.css';

function App() {
  const [gamename, setgamename] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (gamename.trim() !== '') {
      window.location.href = `/search/${gamename}`;
      setgamename('');
    }
  };

  return (
    <Router>
      <div>
        <header>
          <form onSubmit={handleSearch} className='search-container'>
            <input
              type="text"
              id="search-input"
              placeholder="Pesquisar..."
              value={gamename}
              onChange={(e) => setgamename(e.target.value)}
            />
            <button type="submit" id='search-button'>Pesquisar</button>
          </form>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
          <Route path="/search/:gamename" element={<UserSearchPage />} />
          <Route path="/genre/:category" element={<SearchPage />} />
          <Route path="*" element={<Outlet />} />
        </Routes>
        <footer>
          <p>&copy; aVAlie seus jogos favoritos</p>
          <p>&copy; 2023 grupo 4 Ltda | unifei | itajubá-MG</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
