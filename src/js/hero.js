import { fetchMovies, BASE_URL, ENDPOINTS } from './fetchMovies';
import { emptyStar, fullStar, halfStar } from './star';

const hero = document.querySelector('.home-hero');

async function displayTrendingMovie() {
  try {
    const { results } = await fetchMovies(BASE_URL, ENDPOINTS.TRENDING_DAY, {
      page: 1,
    });
    const movieOfDay = results[Math.floor(Math.random() * results.length)];

    createTrendingMarkup(movieOfDay);

    const trailerBtn = document.getElementById('trailer-btn');
    trailerBtn.addEventListener('click', () => {
      alert('Sorry! We couldn’t find the trailer.');
    });

    const detailsBtn = document.getElementById('details-btn');
    detailsBtn.addEventListener('click', () => {
      alert('Movie details will be shown here.');
    });
  } catch (error) {
    console.error('Trend film alınamadı:', error);
    createFallbackHero();
  }
}

function createFallbackHero() {
  const fallbackMarkup = `
    <div class="hero-wrap">
      <div class="thumb">
        <picture class="background-image">
          <source srcset="./images/hero-mobile.jpg 1x, ./images/hero-mobile-2x.jpg 2x" media="(max-width: 480px)" />
          <source srcset="./images/hero-tablet.jpg 1x, ./images/hero-tablet-2x.jpg 2x" media="(max-width: 768px)" />
          <source srcset="./images/hero-desktop.jpg 1x, ./images/hero-desktop-2x.jpg 2x" media="(min-width: 769px)" />
          <img src="./images/hero-desktop.jpg" alt="Default hero" class="backend" loading="lazy" />
        </picture>

        <div class="hero-wrap__content">
          <h1 class="title-fallback">Let’s Make Your Own Cinema</h1>
          <p class="description-fallback-mobile">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.</p>
          <p class="description-fallback">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.</p>

          <button class="getstarted-btn">Get Started</button>
        </div>
      </div>
    </div>
  `;

  hero.innerHTML = fallbackMarkup;

  const getStartedBtn = document.querySelector('.getstarted-btn');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      location.href = 'catalog.html';
    });
  }
}

function createTrendingMarkup(movie) {
  let ratingStars = '';
  const rating = Math.round(movie.vote_average);

  switch (rating) {
    case 0:
      ratingStars = emptyStar.repeat(5);
      break;
    case 1:
      ratingStars = halfStar + emptyStar.repeat(4);
      break;
    case 2:
      ratingStars = fullStar + emptyStar.repeat(4);
      break;
    case 3:
      ratingStars = fullStar + halfStar + emptyStar.repeat(3);
      break;
    case 4:
      ratingStars = fullStar.repeat(2) + emptyStar.repeat(3);
      break;
    case 5:
      ratingStars = fullStar.repeat(2) + halfStar + emptyStar.repeat(2);
      break;
    case 6:
      ratingStars = fullStar.repeat(3) + emptyStar.repeat(2);
      break;
    case 7:
      ratingStars = fullStar.repeat(3) + halfStar + emptyStar;
      break;
    case 8:
      ratingStars = fullStar.repeat(4) + emptyStar;
      break;
    case 9:
      ratingStars = fullStar.repeat(4) + halfStar;
      break;
    case 10:
      ratingStars = fullStar.repeat(5);
      break;
    default:
      ratingStars = 'N/A';
  }

  const markup = `
    <div class="hero-wrap">
      <div class="thumb">
        <div class="background-image">
          <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path
    }" alt="Hero image" class="backend" loading="lazy" />
        </div>
        <div class="hero-wrap__content">
          <h1 class="title">${movie.title || movie.name}</h1>
          <div class='start-rate__hero'>${ratingStars}</div> 
          <p class="description">${movie.overview}</p>
          <button class="watch-trailer__btn" id="trailer-btn">Watch trailer</button>
          <button class="more-details__btn" id="details-btn">More details</button>
        </div>
      </div>
    </div>
  `;

  hero.innerHTML = markup;
}

displayTrendingMovie();
