// js/hero.js
import axios from 'axios';
import { fetchMovies, BASE_URL, ENDPOINTS, API_KEY } from './fetchMovies.js';
import { createStarRating } from './stars.js';
import { showTrailerModal, showDetailsModal, showErrorModal } from './modal.js';

const hero = document.querySelector('.home-hero');
let movieOfDay = null;
let genreMap = null;

displayTrendingMovie();

async function displayTrendingMovie() {
  try {
    const { results } = await fetchMovies(BASE_URL, ENDPOINTS.TRENDING_DAY, { page: 1 });
    if (!results?.length) return createFallbackHero();

    movieOfDay = results[Math.floor(Math.random() * results.length)];
    createTrendingMarkup(movieOfDay);
    preloadGenres();

    document.getElementById('trailer-btn').addEventListener('click', onTrailer);
    document.getElementById('details-btn').addEventListener('click', onDetails);
  } catch (err) {
    console.error('Trend film alınamadı:', err);
    createFallbackHero();
  }
}

async function onTrailer() {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieOfDay.id}/videos`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    const trailer = data.results.find(v => v.site === 'YouTube' && v.type === 'Trailer');

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
  const ratingStars = createStarRating(movie.vote_average);
  hero.innerHTML = `
    <div class="hero-wrap">
      <div class="thumb">
        <div class="background-image">
          <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"
               alt="${movie.title} backdrop" class="backend" loading="lazy"/>
        </div>
        <div class="hero-wrap__content">
          <h1 class="title">${movie.title || movie.name}</h1>
          <div class="star-rate__hero">${ratingStars}</div>
          <p class="description">${movie.overview}</p>
          <button class="watch-trailer__btn" id="trailer-btn">Watch trailer</button>
          <button class="more-details__btn" id="details-btn">More details</button>
        </div>
      </div>
    </div>`;
}

function createFallbackHero() {
  hero.innerHTML = `
    <div class="hero-wrap">
      <div class="thumb">
        <picture class="background-image">
          <img src="./images/hero-desktop.jpg" alt="Default hero" class="backend" loading="lazy" />
        </picture>
        <div class="hero-wrap__content">
          <h1 class="title-fallback">Let’s Make Your Own Cinema</h1>
          <p class="description-fallback">Is a guide to creating a personalized movie theater experience.</p>
          <button class="getstarted-btn">Get Started</button>
        </div>
      </div>
    </div>`;
  document.querySelector('.getstarted-btn')
          .addEventListener('click', () => location.href = 'catalog.html');
}

async function preloadGenres() {
  if (genreMap) return;
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  const { genres } = await res.json();
  genreMap = Object.fromEntries(genres.map(g => [g.id, g.name]));
}
