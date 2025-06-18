
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '52238d7fab5c2c01b99e751619dd16ec';

async function fetchTrendingMovie() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  const movie = data.results[0];
  updateHero(movie);
}

function updateHero(movie) {
  
  const heroContainer = document.querySelector('.hero-container');
  console.log(movie);

heroContainer.innerHTML = `
<div class="hero-content">
  <h1 class="hero-title">${movie.title}</h1>
  <div class="hero-rating">
    <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star-empty">★</span> 
  </div>
  <p class="hero-description">${movie.overview}</p>
  <div class="hero-buttons">
    <button class="watch-trailer-btn">Watch trailer</button>
    <button class="more-details-btn">More details</button>
  </div>
</div>
<div class="hero-image-container">
  <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="${movie.title} backdrop" class="hero-backdrop-image">
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
