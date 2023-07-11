import React from 'react';

function GameBox({ name, image }) {
  return (
    <div className="game-box">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default GameBox;
