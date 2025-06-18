import {
  BASE_URL,
  IMG_BASE_URL,
  ENDPOINTS,
  fetchMovies,
  fetchGenres,
} from './fetchMovies.js';

let isExpanded = false;
let allMovies = [];
let genresMap = {};

export async function loadWeeklyTrends() {
  const container = document.getElementById('trends-container');
  const seeAllBtn = document.getElementById('see-all-trends');

  genresMap = await fetchGenres();
  const data = await fetchMovies(BASE_URL, ENDPOINTS.TRENDING_WEEK);
  allMovies = data.results;

  renderMovies(container, allMovies.slice(0, 3));

  seeAllBtn.addEventListener('click', () => {
    if (!isExpanded) {
      renderMovies(container, allMovies); // tümünü göster
      seeAllBtn.textContent = 'Show Less';
      isExpanded = true;
    } else {
      renderMovies(container, allMovies.slice(0, 3)); // sadece ilk 3
      seeAllBtn.textContent = 'See All';
      isExpanded = false;
    }
  });
}

function renderMovies(container, movieList) {
  container.innerHTML = movieList
    .map((movie, index) => {
      const delay = index >= 3 ? (index - 2) * 100 : 0; // 4. karttan itibaren gecikmeli
      return renderMovieCard(movie, delay);
    })
    .join('');
}

function renderMovieCard(movie, delay = 0) {
  const genres = movie.genre_ids.map(id => genresMap[id]).join(', ');
  const stars = renderStars(movie.vote_average);

  return `
    <div class="trend-card" data-id="${
      movie.id
    }" style="animation-delay: ${delay}ms;">
      <img src="${IMG_BASE_URL}${ENDPOINTS.IMG_W500}${
    movie.poster_path
  }" alt="${movie.title}">
      <div class="trend-info">
        <h3>${movie.title}</h3>
        <p>${genres} | ${movie.release_date?.split('-')[0] || 'N/A'}</p>
        <div class="trend-stars">${stars}</div>
      </div>
    </div>
  `;
}

function renderStars(vote) {
  const rating = vote / 2; // 10 üzerinden 5’e indiriyoruz
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += '★';
    } else if (rating >= i - 0.5) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }

  return stars;
}
