import {
  fetchMovies,
  BASE_URL,
  ENDPOINTS,
  IMG_BASE_URL,
  fetchGenres,
} from './fetchMovies';
import { createStarRating } from './stars';
import { showDetailsModal, showTrailerModal, showErrorModal } from './modal.js';

async function fetchTrendingMovie() {
  const response = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
  const data = await response.results;

  let index = 0;
  const heroContainer = document.querySelector('.hero-container');

  updateHero(data[index]);

  setInterval(() => {
    heroContainer.style.opacity = '0';

    setTimeout(() => {
      index = (index + 1) % data.length;
      updateHero(data[index]);

      heroContainer.style.opacity = '1';
    }, 500);
  }, 5000);
}

function updateHero(movie) {
  const heroContainer = document.querySelector('.hero-container');

  // Eğer ekran genişliği 480px'den küçükse poster_path kullan
  function setHeroBackground(movie) {
    const isMobile = window.innerWidth < 480;
    const imagePath = isMobile
      ? `${ENDPOINTS.IMG_W500}${movie.poster_path}`
      : `${ENDPOINTS.IMG_W1280}${movie.backdrop_path}`;

    const backgroundUrl = `${IMG_BASE_URL}${imagePath}`;
    heroContainer.style.backgroundImage = `url('${backgroundUrl}')`;
    heroContainer.style.backgroundSize = 'cover';
    heroContainer.style.backgroundPosition = 'center';
    heroContainer.style.backgroundRepeat = 'no-repeat';
  }

  // Sayfa yüklendiğinde ve yeniden boyutlandırıldığında çalıştır
  window.addEventListener('load', () => setHeroBackground(movie));
  window.addEventListener('resize', () => setHeroBackground(movie));

  const starsHTML = createStarRating(movie.vote_average);

  heroContainer.innerHTML = `
    <div class="hero-content">
      <h1 class="hero-title">${movie.title}</h1>
      <div class="hero-rating">${starsHTML}</div>
      <p class="hero-description">${movie.overview}</p>
      <div class="hero-buttons">
        <button class="watch-trailer-btn">Watch trailer</button>
        <button class="more-details-btn">More details</button>
      </div>
    </div>
  `;

  const watchBtn = document.querySelector('.watch-trailer-btn');
  watchBtn.addEventListener('click', () => handleTrailerClick(movie.id));

  const moreBtn = document.querySelector('.more-details-btn');
  moreBtn.addEventListener('click', () => showDetailsModal(movie));
}

async function fetchCategories() {
  const data = await fetchMovies(BASE_URL, ENDPOINTS.GENRE_LIST);
  renderCategories(data.genres);
}

function renderCategories(genres) {
  const categorySection = document.getElementById('category');
  if (!categorySection) return;

  categorySection.innerHTML = genres
    .map(
      genre => `
        <div class="category-card">${genre.name}</div>
      `
    )
    .join('');
}

fetchTrendingMovie();
fetchCategories();

export { fetchTrendingMovie, updateHero, fetchCategories, renderCategories };

async function handleTrailerClick(movieId) {
  try {
    const res = await fetchMovies(BASE_URL, ENDPOINTS.MOVIE_VIDEOS(movieId));
    const trailer = res.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );

    if (trailer) {
      showTrailerModal(trailer.key);
    } else {
      showErrorModal();
    }
  } catch (error) {
    console.error('Trailer fetch error:', error);
    showErrorModal();
  }
}

document.getElementById('closeTrailer').addEventListener('click', () => {
  const modal = document.getElementById('trailerModal');
  const iframe = document.getElementById('trailerIframe');

  modal.style.display = 'none';
  iframe.src = '';
});
