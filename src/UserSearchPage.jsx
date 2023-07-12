import React, { useEffect, useState } from 'react';
import GameBox from './GameBox';

function UserSearchPage({ searchQuery }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/search/${searchQuery}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.log('Error fetching game data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <h2 className='search-result'>Search Results for "{searchQuery}"</h2>
      <div className="game-boxes">
        {games.map((game, index) => (
          <GameBox key={index} name={game.name} image={game.image} />
        ))}
      </div>
    </div>
  );
}

export default UserSearchPage;
