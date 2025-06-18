import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL, fetchGenres } from './fetchMovies';
import { generateStars } from './generate-stars';

async function fetchTrendingMovie() {
  const response = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
  const data = await response.results;

  let index = 0;
  const heroContainer = document.querySelector('.hero-container');

  // İlk film
  updateHero(data[index]);

  setInterval(() => {
    // Opaklığı sıfırla (kaybolsun)
    heroContainer.style.opacity = '0';

    // Bekle ve sonra değiştir
    setTimeout(() => {
      index = (index + 1) % data.length;
      updateHero(data[index]);
      
      // Yeni film geldiğinde tekrar görünür yap
      heroContainer.style.opacity = '1';
    }, 500); // Geçiş efekti süresi
  }, 5000);
}


function updateHero(movie) {
  
  const heroContainer = document.querySelector('.hero-container');
  console.log(movie);

  const backgroundUrl = `${IMG_BASE_URL}${ENDPOINTS.IMG_W1280}${movie.backdrop_path}`;
    heroContainer.style.backgroundImage = `url('${backgroundUrl}')`;

const starsHTML = generateStars(movie.vote_average);

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
}

async function fetchCategories() {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
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
