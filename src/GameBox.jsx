import { Link } from 'react-router-dom';

function GameBox({ game }) {
  return (
    <div className="game-box">
      <Link
        to={{
          pathname: `/game/${game.id}`,
          state: { game },
        }}
      >
        <img src={game.image} alt={game.name} />
        <p>{game.name}</p>
      </Link>
    </div>
  );
}

export default GameBox;
