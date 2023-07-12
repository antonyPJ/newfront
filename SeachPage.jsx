import React, { useEffect, useState } from 'react';
import GameBox from './GameBox';

function SearchPage({ match }) {
  const { category } = match.params;
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`BACKEND_URL/games?category=${category}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.log('Error fetching game data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className='search-result'>Resultado de busca para: {category}</h2>
      <div className="game-boxes">
        {games.map((game, index) => (
          <GameBox key={index} name={game.name} image={game.image} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
