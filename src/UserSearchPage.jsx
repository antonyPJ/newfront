import React, { useEffect, useState } from 'react';
import GameBox from './GameBox';
import { useParams } from 'react-router-dom';

function UserSearchPage() {
  const { gamename } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/search/${gamename}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.log('Error fetching game data:', error);
      }
    };
  
    fetchData();
  }, [gamename]);  

  return (
    <div>
      <h2 className='search-result'>Resultado de busca para: "{gamename}"</h2>
      <div className="game-boxes">
        {games.map((game, index) => (
          <GameBox key={index} game={game}/>
        ))}
      </div>
    </div>
  );
}

export default UserSearchPage;
