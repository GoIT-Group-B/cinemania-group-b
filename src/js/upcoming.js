import {
  fetchMovies,
  fetchGenres,
  ENDPOINTS,
  BASE_URL,
  IMG_BASE_URL,
} from './fetchMovies.js';

async function main() {
  const filmContainer = document.getElementById('upcoming-films');
  filmContainer.innerHTML = 'Yükleniyor...';
  try {
    const genres = await fetchGenres();
    const popularData = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
    const movies = popularData.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    const movieDetail = await fetchMovies(
      BASE_URL,
      ENDPOINTS.MOVIE_DETAILS(randomMovie.id)
    );
    filmContainer.innerHTML = '';
    renderMovie(movieDetail, genres);
  } catch (error) {
    filmContainer.innerHTML = `<p>Hata: ${error.message}</p>`;
    console.error(error);
  }
}
function renderMovie(
  {
    id,
    poster_path,
    backdrop_path,
    title,
    overview,
    popularity,
    vote_average,
    vote_count,
    release_date,
    genre_ids,
  },
  genres
) {
  const filmContainer = document.getElementById('upcoming-films');
  filmContainer.innerHTML = '';
  const filmGenres =
    genre_ids && genre_ids.length > 0
      ? genre_ids
          .map(id => genres[id])
          .filter(Boolean)
          .join(', ')
      : 'Bilinmeyen';
  const poster = poster_path
    ? `${IMG_BASE_URL}/w500${poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';
  const overviewText = overview || 'No overview available.';
  const filmElement = document.createElement('div');
  filmElement.classList.add('film-card');
  filmElement.innerHTML = `
    <img src="${poster}" alt="${title}">
    <h2>${title}</h2>
    <p><strong>Release date:</strong> ${release_date || 'Unknown'}</p>
    <p><strong>Vote/Votes:</strong> ${vote_average.toFixed(
      1
    )} / ${vote_count}</p>
    <p><strong>Popularity:</strong> ${popularity}</p>
    <p><strong>Genre:</strong> ${filmGenres}</p>
    <p><strong>ABOUT:</strong> ${overviewText}</p>
    <button class="add-library-btn">Add to my library</button>
  `;
  filmElement
    .querySelector('.add-library-btn')
    .addEventListener('click', () => {
      console.log(`"${title}" kütüphaneye eklendi!`);
    });
  filmContainer.appendChild(filmElement);
}
document.addEventListener('DOMContentLoaded', main);
