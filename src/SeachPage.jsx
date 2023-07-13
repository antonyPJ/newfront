import React, { useEffect, useState } from 'react';
import GameBox from './GameBox';
import { useParams } from 'react-router-dom';

function SearchPage({  }) {
  const { genre } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/genre/${genre}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.log('Error fetching game data:', error);
      }
    };

    fetchData();
  }, [genre]);

  return (
    <div>
      <h2 className='search-result'>Search Results for {genre}</h2>
      <div className="game-boxes">
      {games.map((game, index) => (
        <GameBox key={index} game={game}/>
      ))}
      </div>
    </div>
  );
}

export default SearchPage;
