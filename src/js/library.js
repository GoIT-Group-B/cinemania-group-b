import { createStarRating } from './stars';
import { BASE_URL, IMG_BASE_URL, ENDPOINTS, fetchMovies } from './fetchMovies';

const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const invertedGenreMap = Object.entries(genreMap).reduce((acc, [id, name]) => {
  acc[name.toLowerCase()] = parseInt(id);
  return acc;
}, {});

function populateGenreDropdown() {
  const selectElement = document.querySelector('.library-gallery .dropdown select');
  if (!selectElement) return;

  selectElement.innerHTML = `
  <option class="hidden-option" value="Genre" selected disabled>Genre</option>
  <option value="all">All</option>
  `;

  Object.values(genreMap)
    .sort()
    .forEach(genreName => {
      const option = document.createElement('option');
      option.value = genreName.toLowerCase();
      option.textContent = genreName;
      selectElement.appendChild(option);
    });
}

export function loadLibrary(filterGenre = null) {
  const mainContainer = document.querySelector('.library-gallery');
  const listContainer = mainContainer?.querySelector('.library-gallery-list');

  if (!mainContainer || !listContainer) {
    if (window.location.pathname.endsWith('library.html')) {
      console.warn('library-gallery veya library-gallery-list bulunamadı.');
    }
    return;
  }

  const allMovies = JSON.parse(localStorage.getItem('myLibrary')) || [];
  let moviesToRender = allMovies;

  if (filterGenre && filterGenre !== 'Genre' && filterGenre !== 'all') {
    const targetGenreId = invertedGenreMap[filterGenre];
    if (targetGenreId) {
      moviesToRender = allMovies.filter(movie =>
        movie.genre_ids?.includes(targetGenreId)
      );
    }
  }

  listContainer.innerHTML = '';

  if (moviesToRender.length === 0) {
    const noMoviesMarkup = `
      <div class="my-library-no-movies">
        <p class="my-library-oops-message">
          OOPS...<br />
          We are very sorry! <br />
          ${
            filterGenre && filterGenre !== 'Genre'
              ? `No movies found for '${filterGenre}' genre.`
              : `You don't have any movies at your library.`
          }
        </p>
        <button>
          <a href="./catalog.html" class="my-library-search-link button">Search movie</a>
        </button>
      </div>
    `;

    mainContainer.innerHTML = noMoviesMarkup;

    return;
  }

  let genreDropdownElement = mainContainer.querySelector('.dropdown select');

  if (!genreDropdownElement) {
    const dropdownMarkup = `
      <div class="dropdown">
        <select>
          <option class="hidden-option" value="Genre" selected disabled>Genre</option>
        </select>
      </div>
    `;
    mainContainer.insertAdjacentHTML('afterbegin', dropdownMarkup);
    populateGenreDropdown();
    genreDropdownElement = mainContainer.querySelector('.dropdown select');
  } else {
    genreDropdownElement.classList.remove('visually-hidden');
  }

  if (filterGenre && genreDropdownElement.options.length > 1) {
    genreDropdownElement.value = filterGenre;
  }

  const markup = moviesToRender
    .map(movie => {
      const { id, title, poster_path, release_date, vote_average, genre_ids } = movie;
      const year = release_date ? release_date.split('-')[0] : 'N/A';
      const movieGenres = genre_ids?.map(id => genreMap[id]).filter(Boolean).join(', ') || '';
      const starRating = createStarRating(vote_average);

      return `
        <div class="trend-card" data-id="${id}">
          <div class="poster-wrapper">
            <img src="${IMG_BASE_URL}/w500${poster_path}" alt="${title}" class="movie-poster" />
            <div class="trend-info">
              <div class="movie-meta">
                <h3 class="trend-title">${title}</h3>
                <p class="movie-details">${movieGenres} | ${year}</p>
              </div>
              <div class="trend-stars">${starRating}</div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  listContainer.insertAdjacentHTML('beforeend', markup);

  document.addEventListener('DOMContentLoaded', () => {
    // library sayfası için
    const libraryContainer = document.querySelector('.library-gallery-list');
    if (libraryContainer) attachMovieClickListener(libraryContainer);
  });

  genreDropdownElement?.addEventListener('change', event => {
    const selectedGenre = event.target.value;
    loadLibrary(selectedGenre);
  });
}

export function attachMovieClickListener(container) {
  if (!container) return;

  container.addEventListener('click', async event => {
    const target = event.target.closest('.trend-card');
    if (!target) return;

    const movieId = target.dataset.id;
    let allMovies = JSON.parse(localStorage.getItem('myLibrary')) || [];
    let movie = allMovies.find(m => m.id === Number(movieId));

    if (!movie) {
      // Eğer localStorage'da yoksa API'den çek
      try {
        movie = await fetchMovies(BASE_URL, ENDPOINTS.MOVIE_DETAILS(movieId));
        movie.genre_ids = movie.genres?.map(g => g.id) || [];
      } catch (err) {
        console.error('API fetch error:', err);
        return;
      }
    }

    const { showDetailsModal } = await import('./modal.js');
    const genreNames = movie.genre_ids?.map(id => genreMap[id]).filter(Boolean) || [];
    showDetailsModal(movie, genreNames);
  });
}

loadLibrary();
