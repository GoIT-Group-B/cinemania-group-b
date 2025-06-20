
import { createStarRating } from './stars';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p';

const mainContainer = document.querySelector('.library-gallery');

const genreMap = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
};

const invertedGenreMap = Object.entries(genreMap).reduce((acc, [id, name]) => {
    acc[name.toLowerCase()] = parseInt(id);
    return acc;
}, {});


function populateGenreDropdown() {
    const selectElement = mainContainer.querySelector('.dropdown select');
    if (!selectElement) return;

    selectElement.innerHTML = `<option class="hidden-option" value="Genre" selected disabled>Genre</option>`;

    Object.values(genreMap).sort().forEach(genreName => {
        const option = document.createElement('option');
        option.value = genreName.toLowerCase(); 
        option.textContent = genreName;
        selectElement.appendChild(option);
    });
}

export function loadLibrary(filterGenre = null) {
  const allMovies = JSON.parse(localStorage.getItem('myLibrary')) || [];
  let moviesToRender = allMovies;

  console.log("--- loadLibrary Çağrısı ---");
  console.log("Mevcut Tüm Filmler (localStorage'dan):", allMovies);
  console.log("Seçilen Filtre Türü (filterGenre):", filterGenre); 
  
  if (filterGenre && filterGenre !== 'Genre') {
      
      const targetGenreId = invertedGenreMap[filterGenre]; 
      
      console.log(`Filtreleme için ID: ${targetGenreId} (Türe göre: ${filterGenre})`);

      if (targetGenreId) {
          moviesToRender = allMovies.filter(movie => {
              const hasGenre = movie.genre_ids?.includes(targetGenreId);
              console.log(`Film: ${movie.title}, Genre ID'leri: ${movie.genre_ids}, Hedef ID: ${targetGenreId}, Sonuç: ${hasGenre}`);
              return hasGenre;
          });
          console.log(`Filtrelenmiş filmler (${filterGenre}):`, moviesToRender);
      } else {
          console.warn(`"${filterGenre}" için geçerli bir tür ID'si bulunamadı. Filtreleme yapılmadı.`);
          moviesToRender = allMovies;
      }
  }

  mainContainer.innerHTML = '';

  if (moviesToRender.length === 0) {
    const noMoviesMarkup = `
      <div class="my-library-no-movies">
        <p class="my-library-oops-message">
          OOPS...<br />
          We are very sorry! <br />
          ${filterGenre && filterGenre !== 'Genre' ? `No movies found for '${filterGenre}' genre.` : `You don't have any movies at your library.`}
        </p>
        <button>
          <a href="../catalog.html" class="my-library-search-link button">Search movie</a>
        </button>
      </div>
    `;
    mainContainer.innerHTML = noMoviesMarkup;
    const genreDropdown = mainContainer.querySelector('.dropdown select');
    if(genreDropdown) {
        genreDropdown.classList.add('visually-hidden');
    }
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
    genreDropdownElement = mainContainer.querySelector('.dropdown select');
    populateGenreDropdown();
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
        <div class="movie-card" data-id="${id}">
          <div class="poster-wrapper">
            <img src="${IMG_BASE_URL}/w500${poster_path}" alt="${title}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${title}</h3>
                <p class="movie-details">${movieGenres} | ${year}</p>
              </div>
              <div class="movie-rating">${starRating}</div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  mainContainer.insertAdjacentHTML('beforeend', markup);

  mainContainer.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', async () => {
      const id = Number(card.dataset.id);
      const data = JSON.parse(localStorage.getItem('myLibrary')) || [];
      const movie = data.find(m => m.id === id);

      if (movie) {
        const { showDetailsModal } = await import('./modal.js');
        const genreNames = movie.genre_ids?.map(id => genreMap[id]).filter(Boolean) || [];
        showDetailsModal(movie, genreNames);
      }
    });
  });

  const currentGenreDropdown = mainContainer.querySelector('.dropdown select');
  if (currentGenreDropdown) {
      currentGenreDropdown.onchange = (event) => {
          const selectedGenre = event.target.value; 
          loadLibrary(selectedGenre);
      };
  }
}

loadLibrary();