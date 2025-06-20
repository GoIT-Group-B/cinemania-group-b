import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from './fetchMovies';
import { createStarRating } from './stars';
import { openMovieDetailModal } from './pop-up.js'


const movieList = document.getElementById('movieList');

async function fetchFirstPageMovies() {
  const response = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
  const data = await response.results;
  console.log(data)
  renderMovieCards(data);
}

function renderMovieCards(movies) {
  movieList.innerHTML = movies
    .map(movie => {
      const { title, poster_path, release_date, vote_average, genre_ids, id } = movie;
      const year = release_date ? release_date.split('-')[0] : 'N/A';
      const genres = genre_ids.slice(0, 2).map(id => genreMap[id]).join(', ');
      const starRating = createStarRating(vote_average);

      return `
        <div class="movie-card" data-id="${id}">
          <div class="poster-wrapper">
            <img src="${IMG_BASE_URL}/w500${poster_path}" alt="${title}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${title}</h3>
                <p class="movie-details">${genres} | ${year}</p>
              </div>
              <div class="movie-rating">${starRating}</div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  // ⭐️ TIKLAMA EVENTLERİNİ EKLE
  const cards = document.querySelectorAll('.movie-card');
  cards.forEach(card => {
    const id = card.dataset.id;
    const movie = movies.find(m => m.id == id);
    if (movie) {
      card.addEventListener('click', () => openMovieDetailModal(movie));
    }
  });
}

// Genre ID to Name eşleşmesi
const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};

fetchFirstPageMovies();


