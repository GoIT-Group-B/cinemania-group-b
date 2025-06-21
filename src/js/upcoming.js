import {
  fetchMovies,
  fetchGenres,
  ENDPOINTS,
  BASE_URL,
  IMG_BASE_URL,
} from './fetchMovies.js';
import { showDetailsModal } from './modal.js';

// Genres dizisini id => name objesine çeviren yardımcı fonksiyon
function convertGenresToMap(genresArray) {
  return genresArray.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});
}

async function main() {
  const filmContainer = document.getElementById('upcoming-films');
  filmContainer.innerHTML = 'Yükleniyor...';
  try {
    const genres = await fetchGenres(); // Zaten map olarak geliyor
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
    genres: genreObjects,
  },
  genresMap
) {
  const filmContainer = document.getElementById('upcoming-films');
  filmContainer.innerHTML = '';

  let filmGenres = 'Bilinmeyen';

  if (Array.isArray(genre_ids) && genre_ids.length > 0) {
    filmGenres = genre_ids
      .map(id => genresMap[id])
      .filter(Boolean)
      .join(', ');
  } else if (Array.isArray(genreObjects) && genreObjects.length > 0) {
    filmGenres = genreObjects.map(g => g.name).join(', ');
  }

  const poster = poster_path
    ? `${IMG_BASE_URL}/w1280${backdrop_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  const overviewText = overview || 'No overview available.';

  const filmElement = document.createElement('div');
  filmElement.classList.add('film-card');
  filmElement.innerHTML = `
    <img class="upcom-img" src="${poster}" alt="${title}"">
    <div class="upcom">
      <h2>${title}</h2>
      <p class="release-info"><strong>Release date:</strong> ${
        release_date || 'Unknown'
      }</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${vote_average.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${vote_count}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${popularity}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${filmGenres}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${overviewText}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `;

  // filmElement
  //   .querySelector('.add-library-btn')
  //   .addEventListener('click', () => {
  //     console.log(`"${title}" kütüphaneye eklendi!`);
  //   });

  filmContainer.appendChild(filmElement);

  filmElement.querySelector('.add-library-btn').addEventListener('click', () => {
    const movieForModal = {
      id,
      title,
      poster_path,
      release_date,
      vote_average,
      vote_count,
      popularity,
      overview,
      genre_ids,
      genres: genreObjects,
    };

    let genreNames = [];
    if (Array.isArray(genre_ids) && genre_ids.length > 0) {
      genreNames = genre_ids.map(id => genresMap[id]).filter(Boolean);
    } else if (Array.isArray(genreObjects) && genreObjects.length > 0) {
      genreNames = genreObjects.map(g => g.name);
    }

    showDetailsModal(movieForModal, genreNames);
  });
}

document.addEventListener('DOMContentLoaded', main);
