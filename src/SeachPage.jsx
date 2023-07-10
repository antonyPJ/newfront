// ChatGPT puro só pra ter alguma coisa
// Dps vcs q entendem melhor do que eu corrigem

import React, { useState } from 'react';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // logica
    console.log('Search term:', searchTerm);
    // resetar o termo
    setSearchTerm('');
  };

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {/* Renderizar */}
    </div>
  );
}

export default SearchPage;