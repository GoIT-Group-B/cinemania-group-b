import { fetchMovies, ENDPOINTS, BASE_URL, IMG_BASE_URL } from './fetchMovies';
import { createStarRating } from './stars';
import { attachMovieClickListener } from './library.js';

const input = document.getElementById("search");
const warningMessage = document.getElementById("warning");
const moviesContainer = document.getElementById("movies");
const clearButton = document.querySelector(".clear-button");
const searchButton = document.querySelector(".search-button");
const yearInput = document.getElementById("year");
const movieListSection = document.getElementById("movieList");

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

  const genreMap = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
    80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
    9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction',
    10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western',
  };

const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1900; y--) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearInput.appendChild(option);
}

async function search() {
  const {
    trendCard, posterWrapper, moviePoster, movieMeta,
    trendInfo, trendTitle, movieDetails, trendStars, movieRating
  } = classList;

  const query = input.value.trim();
  const selectedYear = yearInput.value;

  moviesContainer.innerHTML = "";

  if (movieListSection) {
    movieListSection.style.display = "none";
  }

  if (query === "" && selectedYear === "") {
    alert("Please enter a search term or select a year.");
    return;
  }

  let endpoint = '';
  const params = {};

  if (query !== "") {
    endpoint = ENDPOINTS.SEARCH_MOVIES;
    params.query = query;
    if (selectedYear !== "") params.year = selectedYear;
  } else {
    endpoint = ENDPOINTS.DISCOVER_MOVIES;
    params['primary_release_year'] = selectedYear;
  }
  

  try {
    const data = await fetchMovies(BASE_URL, endpoint, params);
    const movies = data.results.filter(movie => {
    const releaseYear = movie.release_date?.split('-')[0];
    return releaseYear === selectedYear;
  });

    if (!Array.isArray(movies) || movies.length === 0) {
      warningMessage.style.display = "block";
      return;
    }

    warningMessage.style.display = "none";

    const markup = movies.map(movie => {
      const {
        title, poster_path, release_date,
        vote_average, genre_ids, id
      } = movie;

      const year = release_date ? release_date.split('-')[0] : 'N/A';
      console.log(year)
      const genres = genre_ids?.slice(0, 2).map(id => genreMap[id] || 'Unknown').join(', ');
      const starRating = createStarRating(vote_average);

      return `
        <div class="${trendCard}" data-id="${id}">
          <div class="${posterWrapper}">
            <img 
              src="${poster_path ? IMG_BASE_URL + ENDPOINTS.IMG_W500 + poster_path : 'https://placehold.co/300x450?text=No+Image'}" 
              alt="${title}" 
              class="${moviePoster}" 
            />
            <div class="${trendInfo}">
              <div class="${movieMeta}">
                <h3 class="${trendTitle}">${title}</h3>
                <p class="${movieDetails}">${genres} | ${year}</p>
              </div>
              <div class="${trendStars}">
                <div class="${movieRating}">${starRating}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    moviesContainer.innerHTML = markup;
    moviesContainer.scrollIntoView({ behavior: "smooth" });

  } catch (error) {
    console.error("Error fetching movies:", error);
    warningMessage.style.display = "block";
  }
}


input.addEventListener("input", () => {
    yearInput.style.display = input.value.trim() !== "" ? "block" : "none";

    if (input.value.trim() !== "" || yearInput.value !== "") {
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }

    if (input.value.trim() === "") {
        clearSearch();
    }
});

yearInput.addEventListener("change", () => {
    if (input.value.trim() !== "" || yearInput.value !== "") {
        clearButton.style.display = "block";
        search();
    } else {
        clearButton.style.display = "none";
    }
});

function clearSearch() {
    input.value = "";
    yearInput.value = "";
    clearButton.style.display = "none";
    yearInput.style.display = "none";
    warningMessage.style.display = "none";
    moviesContainer.innerHTML = "";

    if (movieListSection) {
        movieListSection.style.display = "grid";
    }
    input.focus();
}

clearButton.addEventListener("click", clearSearch);

searchButton.addEventListener("click", async () => {
  await search();
});

document.addEventListener('DOMContentLoaded', () => {
    if (moviesContainer) attachMovieClickListener(moviesContainer);

});
