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
      stars += '<span class="star full">★</span>';
    } else if (rating >= i - 0.5) {
      stars += '<span class="star half">★</span>';
    } else {
      stars += '<span class="star">☆</span>';
    }
  }

  return stars;
}
