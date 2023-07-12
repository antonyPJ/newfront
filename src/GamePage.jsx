import React, { useEffect, useState } from 'react';

function GamePage() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    // Fetch dados do jogo do backend
    const fetchGameData = async () => {
      try {
        const response = await fetch('BACKEND_URL/game');
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.log('Error fetching game data:', error);
      }
    };

    fetchGameData();
  }, []);

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    const { email, name, score, review } = event.target.elements;

    try {
      const response = await fetch(`http://localhost:3000/review/:gamename`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          name: name.value,
          rating: parseInt(score.value),
          description: review.value,
        }),
      });

      if (response.ok) {
        alert('Review submitted successfully!');
      } else {
        alert('Failed to submit review.');
      }
    } catch (error) {
      console.log('Error submitting review:', error);
    }
  };

  if (!gameData) {
    return <div>Loading...</div>;
  }

  const {
    gameImage,
    gameTitle,
    releaseDate,
    developer,
    genre,
    platforms,
    gameSummary,
    reviews,
  } = gameData;

  return (
    <>
      <main>
        <section id="game-information">
          <div id="game-upper-section">
            <div id="game-image-section">
              <img id="game-image" src={gameImage} alt="Imagem do jogo" />
              <div id="game-summary" className="game-summary">
                {gameSummary}
              </div>
            </div>
            <div id="game-details-section">
              <h2 id="game-title">{gameTitle}</h2>
              <p id="game-release-date">{releaseDate}</p>
              <p id="game-developer">{developer}</p>
              <p id="game-genre">{genre}</p>
              <p id="game-platforms">{platforms}</p>
              <p id="game-summary">{gameSummary}</p>
            </div>
          </div>
          <div id="rating-form-section">
            <div className="rating-form-container">
              <div className="rating-form-block">
                <h2>NOS CONTE SUA EXPERIÊNCIA COM O JOGO!</h2>
                <form id="rating-form" onSubmit={handleSubmitReview}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />

                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" required />

                  <label htmlFor="score">Sua nota para o jogo:</label>
                  <input
                    type="number"
                    id="score"
                    name="score"
                    min="1"
                    max="10"
                    required
                  />
                  <div id="stars-display"></div>
                  <button type="submit" id="submit-review" className="submit-button">
                    Avaliar
                  </button>
                </form>
              </div>
              <div className="rating-form-block">
                <h2 id="rating-desc">DESCRIÇÃO</h2>
                <textarea id="review" name="review" rows="10" cols="50" required></textarea>
              </div>
            </div>
          </div>
          <div id="game-reviews-section">
            <h2>Avaliações de outros usuários</h2>
            <div id="reviews">
              {reviews.map((review) => (
                <div key={review.id}>
                  <p>{review.name}</p>
                  <p>{review.score}</p>
                  <p>{review.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default GamePage;
