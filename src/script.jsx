import React, { useEffect, useState } from 'react';

function GameInformation() {
  const [totalReviews, setTotalReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;

  useEffect(() => {
    // Event Listeners
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton) {
      searchInput.addEventListener('input', showSearchSuggestions);
      searchButton.addEventListener('click', performSearch);
    }

    document.querySelectorAll('.category').forEach(category => {
      category.addEventListener('click', () => {
        const categoryName = category.textContent;
        window.location.href = `search-results.html?category=${categoryName}`;
      });
    });

    // Carousel
    const featuredGames = new Glide('#featured-games', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
    });

    if (document.getElementById('featured-games')) {
      featuredGames.mount();
    }

    return () => {
      // Cleanup: Remove event listeners when component unmounts
      if (searchInput && searchButton) {
        searchInput.removeEventListener('input', showSearchSuggestions);
        searchButton.removeEventListener('click', performSearch);
      }

      document.querySelectorAll('.category').forEach(category => {
        category.removeEventListener('click', () => {
          const categoryName = category.textContent;
          window.location.href = `search-results.html?category=${categoryName}`;
        });
      });
    };
  }, []);

  useEffect(() => {
    // Fetch game information
    const gameId = getGameIdFromURL();

    fetchGameInformation(gameId)
      .then(game => {
        // Update game details and reviews on page
        const gameDetailsHTML = `
          <h2>${game.title}</h2>
          <p>Nota: <span class="game-info">${game.userRating}/10</span></p>
          <p>Categorias: <span class="game-info">${game.genre}</span></p>
          <p>Custo médio: <span class="game-info">${game.averagePrice}</span></p>
          <p>Plataformas: <span class="game-info">${game.platforms}</span></p>
          <p>Produtoras: <span class="game-info">${game.developer}</span></p>
          <p>Lançamento: <span class="game-info">${game.releaseDate}</span></p>
        `;

        document.getElementById('game-details-section').innerHTML = gameDetailsHTML;
        document.getElementById('game-summary').innerHTML = `<p class="game-info-p">${game.summary}</p>`;
        setTotalReviews(game.reviews);
      })
      .catch(error => {
        console.error('Erro ao buscar informações do jogo:', error);
      });
  }, []);

  useEffect(() => {
    displayReviews();
    displayPagination();
  }, [currentPage, totalReviews]);

  function getGameIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('gameId');
  }

  function fetchGameInformation(gameId) {
    // Simulating asynchronous API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const game = {
          title: 'Jogo A',
          releaseDate: '1 de Janeiro, 2023',
          developer: 'Desenvolvedor A',
          genre: 'Ação',
          platforms: 'PS4, Xbox One, PC',
          averagePrice: '100R$',
          userRating: '8.6',
          reviews: [
            { user: 'Usuario1', rating: 8, content: 'Ótimo jogo!', date: '2023-01-01' },
            { user: 'Usuario2', rating: 9, content: 'Mauris lobortis luctus augue et pharetra. Sed pellentesque luctus massa in congue. Curabitur tincidunt sapien lectus, vel dignissim eros scelerisque imperdiet. Nulla placerat lectus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec interdum tellus sed ante suscipit, at efficitur purus commodo. Donec aliquet, tellus ut tempor porttitor, dolor nisi facilisis dui, id ultricies mi massa nec enim. Quisque molestie tristique nisi aliquet tempor. Vivamus quis porta nisi, a molestie sapien.', date: '2023-01-02' },
            { user: 'Usuario3', rating: 7, content: 'Gostei.', date: '2023-01-03' },
          ],
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis luctus augue et pharetra. Sed pellentesque luctus massa in congue. Curabitur tincidunt sapien lectus',
        };
        resolve(game);
      }, 1000);
    });
  }

  function showSearchSuggestions() {
    const searchQuery = searchInput.value;
    const suggestions = performSearchSuggestions(searchQuery);
    searchSuggestions.innerHTML = '';

    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.addEventListener('click', () => {
        searchInput.value = suggestion;
        searchSuggestions.style.display = 'none';
      });
      searchSuggestions.appendChild(li);
    });

    searchSuggestions.style.display = 'block';
  }

  function performSearch() {
    const searchQuery = searchInput.value;
    // Redirect to search results page or update content dynamically
    window.location.href = `search-results.html?query=${searchQuery}`;
  }

  function performSearchSuggestions(query) {
    // Simulating search suggestions logic
    const suggestions = ['Jogo A', 'Jogo B', 'Jogo C'];
    return suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
  }

  function displayReviews() {
    const start = (currentPage - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    const currentReviews = totalReviews.slice(start, end);

    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';

    currentReviews.forEach(review => {
      const starRating = createStarRating(review.rating);
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');

      reviewElement.innerHTML = `
        <div class="review-header">
          <span class="review-user">${review.user}</span>
          <span class="review-rating">${starRating}</span>
        </div>
        <p class="review-content">${truncateContent(review.content, 40)}
        </p>
        <div class="review-footer">
          <span class="review-date">${review.date}</span>
        </div>
      `;

      reviewsContainer.appendChild(reviewElement);
    });
  }

  function displayPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalReviews.length / reviewsPerPage);
    for (leti = 1; i <= totalPages; i++) {
      const pageElement = document.createElement('li');
      pageElement.textContent = i;
      pageElement.addEventListener('click', () => {
        setCurrentPage(i);
      });

      if (i === currentPage) {
        pageElement.classList.add('active');
      }

      paginationContainer.appendChild(pageElement);
    }
  }

  function createStarRating(rating) {
    let fullStars = Math.floor(rating / 2);
    let halfStars = rating % 2;
    let emptyStars = 5 - fullStars - halfStars;

    let starHTML = '';

    for (let i = 0; i < fullStars; i++) {
      starHTML += '<img src="../projeto_web/public/starf.png" alt="Full star">';
    }

    for (let i = 0; i < halfStars; i++) {
      starHTML += '<img src="../projeto_web/public/star_half.png" alt="Full star">';  // This can be changed to your half-star character
    }

    for (let i = 0; i < emptyStars; i++) {
      starHTML += '<img src="../projeto_web/public/star_empty.png" alt="Full star">';
    }

    return starHTML;
  }

  function truncateContent(content, maxLength) {
    if (content.length <= maxLength) {
      return content;
    } else {
      let brokenContent = '';
      for (let i = 0; i < content.length; i++) {
        if (i !== 0 && i % maxLength === 0) {
          brokenContent += '<br>';
        }
        brokenContent += content[i];
      }
      return brokenContent;
    }
  }

  function expandContent(link) {
    const fullContent = link.parentElement.textContent.replace('Leia mais', '');
    link.parentElement.innerHTML = fullContent;
  }

  const scoreInput = document.getElementById('score');
  const starDisplay = document.getElementById('stars-display');

  if (scoreInput) {
    scoreInput.addEventListener('input', updateStarRating);

    function updateStarRating() {
      let score = scoreInput.value;

      // Check if the score is within the allowed range
      if (score < 0) score = 0;
      if (score > 10) score = 10;

      const starHTML = createStarRating(score);
      starDisplay.innerHTML = starHTML;
    }

    updateStarRating();
  }

}

export default GameInformation;
