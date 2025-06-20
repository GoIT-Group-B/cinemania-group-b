import { BASE_URL, IMG_BASE_URL, ENDPOINTS, fetchMovies, fetchGenres } from './fetchMovies.js';
import { createStarRating } from './stars';

let isExpanded = false;
let allMovies = [];
let genresMap = {};

export async function loadWeeklyTrends() {
  const trendsContainer = document.getElementById('trends-container');
  const seeAllBtn = document.getElementById('see-all-trends');

  genresMap = await fetchGenres();
  const data = await fetchMovies(BASE_URL, ENDPOINTS.TRENDING_WEEK);
  allMovies = data.results;

  // İlk yüklemede ekran genişliğine göre render et
  const initialCount = window.innerWidth < 768 ? 1 : 3;
  renderMovies(trendsContainer, allMovies.slice(0, initialCount));

  // Butona tıklama olayı
  seeAllBtn.addEventListener('click', () => {
    const isCurrentlyExpanded =
      trendsContainer.classList.contains('is-expanded');

    if (!isCurrentlyExpanded) {
      renderMovies(trendsContainer, allMovies); // tümünü göster
      trendsContainer.classList.add('is-expanded');
      seeAllBtn.textContent = 'Show Less';
      isExpanded = true;
    } else {
      const count = window.innerWidth < 768 ? 1 : 3;
      renderMovies(trendsContainer, allMovies.slice(0, count)); // sadece ilk film(ler)
      trendsContainer.classList.remove('is-expanded');
      seeAllBtn.textContent = 'See All';
      isExpanded = false;
    }
  });

  // Ekran boyutu değiştiğinde kart sayısını güncelle
  window.addEventListener('resize', () => {
    if (!isExpanded) {
      const count = window.innerWidth < 768 ? 1 : 3;
      renderMovies(trendsContainer, allMovies.slice(0, count));
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
  const starRating = createStarRating(movie.vote_average);

  return `
    <div class="trend-card" data-id="${movie.id}">
      <img src="${IMG_BASE_URL}${ENDPOINTS.IMG_W500}${movie.poster_path}" alt="${movie.title}">
      <div class="trend-info">
        <div class="movie-meta trend-info-left">
          <h3 class="trend-title">${movie.title}</h3>
          <p class="movie-details">${genres} | ${movie.release_date?.split('-')[0] || 'N/A'}</p>
        </div>
        <div class="trend-stars">${starRating}</div>
      </div>
    </div>
  `;
}
