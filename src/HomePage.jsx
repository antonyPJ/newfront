import React from 'react';

function HomePage() {
  return (
    <>
    <main>
        <section id="featured-games" className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide slide1">Slide 1</li>
              <li className="glide__slide slide2">Slide 2</li>
              <li className="glide__slide slide3">Slide 3</li>
            </ul>
          </div>
        </section>

        <h2 className="section-title">Principais Categorias</h2>
        <section id="game-categories">
          <div className="category category1">FPS</div>
          <div className="category category2">LUTA</div>
          <div className="category category3">CORRIDA</div>
          <div className="category category4">ESPORTES</div>
          <div className="category category5">INDIE</div>
          <div className="category category6">AVENTURA</div>
          <div className="category category7">TERROR</div>
          <div className="category category8">SUSPENSE</div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
