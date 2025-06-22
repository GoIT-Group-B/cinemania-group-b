import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from './fetchMovies.js';
import { createStarRating } from './stars';
import { renderPagination } from './pagination.js';
import { attachMovieClickListener } from './library.js';

const classList = {
  trendCard: 'trend-card',
  posterWrapper: 'poster-wrapper',
  moviePoster: 'movie-poster',
  movieMeta: 'movie-meta',
  trendInfo: 'trend-info',
  trendTitle: 'trend-title',
  movieDetails: 'movie-details',
  trendStars: 'trend-stars',
  movieRating: 'movie-rating',
};
const movieList = document.getElementById('movieList');
let currentPage=1;
let totalPages=20;

export async function fetchFirstPageMovies(crntPage=1) {
  const response = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES, {page:crntPage});
  const data = await response.results;
  currentPage = crntPage
  totalPages = response.total_pages;
  
  renderMovieCards(data);
  renderPagination(currentPage, totalPages, "first");
}

function renderMovieCards(movies) {
  const { trendCard, posterWrapper, moviePoster, movieMeta, trendInfo, trendTitle, movieDetails, trendStars, movieRating } = classList;

  movieList.innerHTML = movies
    .map(movie => {
      const { title, poster_path, release_date, vote_average, genre_ids } = movie;
      const year = release_date ? release_date.split('-')[0] : 'N/A';
      const genres = genre_ids.slice(0, 2).map(id => genreMap[id]).join(', '); // Genre mapping gerekir
      const starRating = createStarRating(vote_average)

      return `
        <div class="${ trendCard }" data-id=${movie.id}>
          <div class="${ posterWrapper }">
            <img src="${IMG_BASE_URL}/w500${poster_path}" alt="${title}" class="${ moviePoster }" />
            <div class="${ trendInfo }">
              <div class="${ movieMeta }">
                <h3 class="${ trendTitle }">${title}</h3>
                <p class="${ movieDetails }">${genres} | ${year}</p>
              </div>
              <div class="${ trendStars }">
                <div class="${ movieRating }">${starRating}</div>
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

document.addEventListener('DOMContentLoaded', () => {
  // catalog sayfası için pop-up
  if (movieList) attachMovieClickListener(movieList);
});


fetchFirstPageMovies();
