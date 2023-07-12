
import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();
    useEffect(() => {
    const glide = new Glide('.glide');
    glide.mount();
    return () => {
      glide.destroy();
    };
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/search/${category}`);
  };

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
          <div className="category category1" onClick={() => handleCategoryClick('FPS')}>FPS</div>
          <div className="category category2" onClick={() => handleCategoryClick('Luta')}>LUTA</div>
          <div className="category category3" onClick={() => handleCategoryClick('Corrida')}>CORRIDA</div>
          <div className="category category4" onClick={() => handleCategoryClick('Esportes')}>ESPORTES</div>
          <div className="category category5" onClick={() => handleCategoryClick('Indie')}>INDIE</div>
          <div className="category category6" onClick={() => handleCategoryClick('Aventura')}>AVENTURA</div>
          <div className="category category7" onClick={() => handleCategoryClick('Terror')}>TERROR</div>
          <div className="category category8" onClick={() => handleCategoryClick('Suspense')}>SUSPENSE</div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
