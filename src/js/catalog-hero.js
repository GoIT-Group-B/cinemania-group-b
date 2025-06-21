import {
  fetchMovies,
  BASE_URL,
  ENDPOINTS,
  IMG_BASE_URL,
  fetchGenres,
} from './fetchMovies';
import { createStarRating } from './stars';
import { showDetailsModal, showTrailerModal, showErrorModal } from './modal.js';

const heroClassList = {
  container: '.hero-container',
  content: 'hero-content',
  title: 'hero-title',
  rating: 'hero-rating',
  description: 'hero-description',
  buttons: 'hero-buttons',
  trailerBtn: 'watch-trailer-btn',
  detailsBtn: 'more-details-btn',
  trailerBtnClass: '.watch-trailer-btn',
  detailsBtnClass: '.more-details-btn',
  categoryCard : 'category-card',
};

const heroIdList = {
  trailerModal: 'trailerModal',
  trailerIframe: 'trailerIframe',
  trailerCloseBtn: 'closeTrailer',
}

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
  
const { container, content, title, rating, description, buttons, trailerBtn, detailsBtn, trailerBtnClass, detailsBtnClass, trailerCloseBtn } = heroClassList;
  const heroContainer = document.querySelector(container);

  const isMobile = window.innerWidth < 480;
  const imagePath = isMobile
    ? `${ENDPOINTS.IMG_W500}${movie.poster_path}`
    : `${ENDPOINTS.IMG_W1280}${movie.backdrop_path}`;

  const backgroundUrl = `${IMG_BASE_URL}${imagePath}`;
  heroContainer.style.backgroundImage = `url('${backgroundUrl}')`;
  heroContainer.style.backgroundSize = 'cover';
  heroContainer.style.backgroundPosition = 'center';
  heroContainer.style.backgroundRepeat = 'no-repeat';

  const starsHTML = createStarRating(movie.vote_average);

  heroContainer.innerHTML = `
    <div class="${content}">
      <h1 class="${title}">${movie.title}</h1>
      <div class="${rating}">${starsHTML}</div>
      <p class="${description}">${movie.overview}</p>
      <div class="${buttons}">
        <button class="${trailerBtn}">Watch trailer</button>
        <button class="${detailsBtn}">More details</button>
      </div>
    </div>
  `;

  const watchBtn = document.querySelector(trailerBtnClass);
  watchBtn.addEventListener('click', () => handleTrailerClick(movie.id));

  const moreBtn = document.querySelector(detailsBtnClass);
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
        <div class="${categoryCard}">${genre.name}</div>
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

document.getElementById(heroIdList.trailerCloseBtn).addEventListener('click', () => {
  const { trailerModal, trailerIframe } = heroIdList;
  const modal = document.getElementById(trailerModal);
  const iframe = document.getElementById(trailerIframe);

  modal.style.display = 'none';
  iframe.src = '';
});
