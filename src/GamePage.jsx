import React from 'react';

function GamePage() {
  return (
    <> 
    <main>
      <section id="game-information">
        <div id="game-upper-section">
          <div id="game-image-section">
          <img id="game-image" src="/Red_Dead_Redemption_2.png" alt="Imagem do jogo" />
            <div id="game-summary" className="game-summary"></div>
          </div>
          <div id="game-details-section">
            <h2 id="game-title"></h2>
            <p id="game-release-date"></p>
            <p id="game-developer"></p>
            <p id="game-genre"></p>
            <p id="game-platforms"></p>
            <p id="game-summary"></p>
          </div>
        </div>
        <div id="rating-form-section">
          <div className="rating-form-container">
            <div className="rating-form-block">
              <h2>NOS CONTE SUA EXPERIÊNCIA COM O JOGO!</h2>
              <form id="rating-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="score">Sua nota para o jogo:</label>
                <input type="number" id="score" name="score" min="1" max="10" required />
                <div id="stars-display"></div>
              </form>
            </div>
            <div className="rating-form-block">
              <h2 id="rating-desc">DESCRIÇÃO</h2>
              <textarea id="review" name="review" rows="10" cols="50" required></textarea>
              <button id="submit-review" className="submit-button">Avaliar</button>
            </div>
          </div>
        </div>
        <div id="game-reviews-section">
          <h2>Avaliações de outros usuários</h2>
          <div id="reviews"></div>
          <nav>
            <ul id="pagination">
              {/* paginação adicionada dinamicamente */}
            </ul>
          </nav>
        </div>
      </section>
    </main>
    </>
  );
}

export default GamePage;
