import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import GamePage from './GamePage';
import SearchPage from './SeachPage'
import UserSearchPage from './UserSearchPage';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `/search/${searchQuery}`;
      setSearchQuery('');
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" id='search-button'>Pesquisar</button>
          </form>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/search/:searchQuery" element={<UserSearchPage />} />
          <Route path="/search/:category" element={<SearchPage />} />
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
