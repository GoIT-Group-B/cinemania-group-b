// js/hero.js

import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from './fetchMovies.js';
import { createStarRating } from './stars.js';
import { showTrailerModal, showDetailsModal, showErrorModal } from './modal.js';

const homeHeroClassList = {
  homeHeroClass: '.home-hero',
  trailerButtonId: 'trailer-btn',
  detailsButtonId: 'details-btn',
  heroWrap: 'hero-wrap',
  thumb: 'thumb',
  backgroundImage: 'background-image',
  backend: 'backend',
  heroWrapContent: 'hero-wrap__content',
  movieTitle: 'title',
  starRating: 'star-rate__hero',
  movieDescription: 'description',
  trailerButton: 'watch-trailer__btn',
  moreDetailsButton: 'more-details__btn',
  titleFallback: 'title-fallback',
  descriptionFallback: 'description-fallback',
  getStartedButtonClass: '.getstarted-btn',
  getStartedButton: 'getstarted-btn',
}

const homeHeroIdList = {
  trailerButtonId: 'trailer-btn',
  detailsButtonId: 'details-btn',
}

const hero = document.querySelector(homeHeroClassList.homeHeroClass);
let movieOfDay = null;
let genreMap = null;

displayTrendingMovie();

async function displayTrendingMovie() {
  const { trailerButtonId, detailsButtonId } = homeHeroIdList;

  try {
    const { results } = await fetchMovies(BASE_URL, ENDPOINTS.TRENDING_DAY, { page: 1 });
    if (!results?.length) return createFallbackHero();

    movieOfDay = results[Math.floor(Math.random() * results.length)];
    createTrendingMarkup(movieOfDay);
    preloadGenres();

    document.getElementById(trailerButtonId).addEventListener('click', () => onTrailer(movieOfDay));
    document.getElementById(detailsButtonId).addEventListener('click', onDetails);

  } catch (err) {
    console.error('Trend film alınamadı:', err);
    createFallbackHero();
  }
}

async function onTrailer(movie) {
  try {
    const data = await fetchMovies(BASE_URL, ENDPOINTS.MOVIE_VIDEOS(movie.id));

    const trailer = data.results.find(
      v => v.site === 'YouTube' && v.type === 'Trailer'
    );

    if (!trailer) {
      showErrorModal('OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.');
    } else {
      showTrailerModal(trailer.key);
    }
  } catch (err) {
    console.error('Trailer API hatası:', err);
    showErrorModal('Trailer yüklenirken bir hata oluştu.');
  }
}


function onDetails() {
  const genres = movieOfDay.genre_ids?.map(id => genreMap?.[id]).filter(Boolean) || [];
  showDetailsModal(movieOfDay, genres);
}

function createTrendingMarkup(movie) {
  const { heroWrap, thumb, backgroundImage, backend, heroWrapContent, movieTitle, starRating, movieDescription, trailerButton, moreDetailsButton } = homeHeroClassList;
  const { trailerButtonId, detailsButtonId } = homeHeroIdList;

  const ratingStars = createStarRating(movie.vote_average);
  hero.innerHTML = `
    <div class="${heroWrap}">
      <div class="${thumb}">
        <div class="${backgroundImage}">
          <img src="${IMG_BASE_URL}/original${movie.backdrop_path}"
               alt="${movie.title} backdrop" class="${backend}" loading="lazy"/>
        </div>
        <div class="${heroWrapContent}">
          <h1 class="${movieTitle}">${movie.title || movie.name}</h1>
          <div class="${starRating}">${ratingStars}</div>
          <p class="${movieDescription}">${movie.overview}</p>
          <button class="${trailerButton}" id="${trailerButtonId}">Watch trailer</button>
          <button class="${moreDetailsButton}" id="${detailsButtonId}">More details</button>
        </div>
      </div>
    </div>`;
}

function createFallbackHero() {
  const { getStartedButtonClass, heroWrap, thumb, backgroundImage, backend, heroWrapContent, titleFallback, descriptionFallback, getStartedButton } = homeHeroClassList;

  const getStartedButtonElement = document.querySelector(getStartedButtonClass);

  hero.innerHTML = `
    <div class="${heroWrap}">
      <div class="${thumb}">
        <picture class="${backgroundImage}">
          <img src="./images/hero-desktop.jpg" alt="Default hero" class="${backend}" loading="lazy" />
        </picture>
        <div class="${heroWrapContent}">
          <h1 class="${titleFallback}">Let’s Make Your Own Cinema</h1>
          <p class="${descriptionFallback}">Is a guide to creating a personalized movie theater experience.</p>
          <button class="${getStartedButton}">Get Started</button>
        </div>
      </div>
    </div>`;

    getStartedButtonElement.addEventListener('click', () => location.href = '/catalog.html');
}

async function preloadGenres() {
  if (genreMap) return;

  try {
    const data = await fetchMovies(BASE_URL, ENDPOINTS.GENRE_LIST);
    const genres = data.genres || [];
    genreMap = Object.fromEntries(genres.map(g => [g.id, g.name]));
  } catch (error) {
    console.error('Türler yüklenemedi:', error);
    genreMap = {};
  }
}

