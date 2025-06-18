import { fetchFromAPI } from './fetchMovies.js';

const filmListContainer = document.querySelector('.library-list'); 
const searchInput = document.querySelector('.search-input'); 
const searchForm = document.querySelector('.search-form'); 
const paginationContainer = document.querySelector('.pagination'); 

let currentPage = 1;
let currentSearchQuery = '';

async function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card'); 

 
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : 'https://via.placeholder.com/200x300?text=No+Image';

  const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A';

  movieCard.innerHTML = `
    <img src="${imageUrl}" alt="${movie.title}" class="movie-poster">
    <h3 class="movie-title">${movie.title}</h3>
    <p class="movie-info">${releaseYear}</p>
  `;

  movieCard.addEventListener('click', () => {
    console.log('Film detayı açıldı:', movie.title);
   
  });

  return movieCard;
}


function renderMovieList(movies) {
  filmListContainer.innerHTML = ''; 

  if (movies.length === 0) {
    filmListContainer.innerHTML = '<p class="no-results-message">Sonuç bulunamadı.</p>'; 
    return;
  }

  movies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    filmListContainer.appendChild(movieCard);
  });
}


export async function loadMovies(page = 1, query = '') {
  try {
    let endpoint = '/discover/movie'; 
    let params = { page: page };

    if (query) {
      endpoint = '/search/movie'; 
      params.query = query;
    }

    const data = await fetchFromAPI(endpoint, params); 
    const movies = data.results;  
    const totalPages = data.total_pages;

    renderMovieList(movies);  
    renderPagination(totalPages, page); // Sayfalama bileşenini güncelle (Fatih'in görevi) 
    currentPage = page;

  } catch (error) {
    console.error('Filmler yüklenirken bir hata oluştu:', error);
    filmListContainer.innerHTML = '<p class="error-message">Filmler yüklenemedi. Lütfen daha sonra tekrar deneyin.</p>';
  }
}

// Sayfalama olay dinleyicisi (Fatih'in görevi)
if (paginationContainer) { 
  paginationContainer.addEventListener('click', (event) => {
    const targetButton = event.target.closest('button[data-page]');
    if (targetButton) {
      const newPage = parseInt(targetButton.dataset.page);
      loadMovies(newPage, currentSearchQuery);
    
      if (currentSearchQuery && newPage !== 1) {
        
      }
    }
  });
}


// Arama formu gönderildiğinde (Selin'in görevi)
if (searchForm) { 
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    currentSearchQuery = searchInput.value.trim();
    loadMovies(1, currentSearchQuery);  
  });
}


if (searchInput) {
  searchInput.addEventListener('input', () => {
      
  });
}


document.addEventListener('DOMContentLoaded', async () => {
  await loadMovies();
});
