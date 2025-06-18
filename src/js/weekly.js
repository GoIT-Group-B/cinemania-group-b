import {
  BASE_URL,
  IMG_BASE_URL,
  ENDPOINTS,
  fetchMovies,
  fetchGenres,
} from './fetchMovies.js';

export async function loadWeeklyTrends() {
  const container = document.getElementById('trends-container');
  const seeAllBtn = document.getElementById('see-all-trends');
  const genresMap = await fetchGenres();
  const data = await fetchMovies(BASE_URL, ENDPOINTS.TRENDING_WEEK);
  const movies = data.results;

  const initialMovies = movies.slice(0, 3);
  container.innerHTML = initialMovies
    .map(movie => renderMovieCard(movie, genresMap))
    .join('');

  seeAllBtn.addEventListener('click', () => {
    const remainingMovies = movies.slice(3);
    container.innerHTML += remainingMovies
      .map(movie => renderMovieCard(movie, genresMap))
      .join('');
    seeAllBtn.style.display = 'none';
  });
}

function renderMovieCard(movie, genresMap) {
  const genres = movie.genre_ids.map(id => genresMap[id]).join(', ');
  return `
    <div class="trend-card" data-id="${movie.id}">
      <img src="${IMG_BASE_URL}${ENDPOINTS.IMG_W500}${
    movie.poster_path
  }" alt="${movie.title}">
      <div class="trend-info">
        <h3>${movie.title}</h3>
        <p>${genres}</p>
        <p>${movie.release_date?.split('-')[0] || 'N/A'}</p>
      </div>
    </div>
  `;
}
