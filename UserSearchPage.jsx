import React, { useEffect, useState } from 'react';
import GameBox from './GameBox';

function UserSearchPage({ searchQuery }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`BACKEND_URL/games?search=${searchQuery}`);
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
      <h2 className='search-result'>Resultado de busca para: "{searchQuery}"</h2>
      <div className="game-boxes">
        {games.map((game, index) => (
          <GameBox key={index} name={game.name} image={game.image} />
        ))}
      </div>
    </div>
  );
}

export default UserSearchPage;
