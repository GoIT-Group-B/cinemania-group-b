import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from './fetchMovies';
import { createStarRating } from './stars';
import { renderPagination } from './pagination.js';

const movieList = document.getElementById('movieList');
let currentPage=1;
let totalPages=20;

export async function fetchFirstPageMovies(crntPage=1) {
  const response = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES, {page:crntPage});
  const data = await response.results;
  currentPage = crntPage
  totalPages = response.total_pages;
  console.log(response)
  console.log(currentPage)
  console.log(totalPages)
  renderMovieCards(data);
  renderPagination(currentPage,totalPages)
}

function renderMovieCards(movies) {
  movieList.innerHTML = movies
    .map(movie => {
      const { title, poster_path, release_date, vote_average, genre_ids } = movie;
      const year = release_date ? release_date.split('-')[0] : 'N/A';
      const genres = genre_ids.slice(0, 2).map(id => genreMap[id]).join(', '); // Genre mapping gerekir
      const starRating = createStarRating(vote_average)

      return `
        <div class="trend-card">
          <div class="poster-wrapper">
            <img src="${IMG_BASE_URL}/w500${poster_path}" alt="${title}" class="movie-poster" />
            <div class="trend-info">
              <div class="movie-meta">
                <h3 class="trend-title">${title}</h3>
                <p class="movie-details">${genres} | ${year}</p>
              </div>
              <div class="trend-stars">
                <div class="movie-rating">${starRating}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
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
