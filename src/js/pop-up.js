import { IMG_BASE_URL, ENDPOINTS } from './fetchMovies.js';

const modal = document.getElementById('movieDetailModal');
const poster = document.getElementById('detailPoster');
const title = document.getElementById('detailTitle');
const votes = document.getElementById('detailVotes');
const popularity = document.getElementById('detailPopularity');
const genresSpan = document.getElementById('detailGenres');
const overview = document.getElementById('detailOverview');
const closeBtn = document.getElementById('closeDetailModal');

export function openMovieDetailModal(movie, genreMap) {
  try {
    // Görsel
    poster.src = `${IMG_BASE_URL}${ENDPOINTS.IMG_W500}${movie.poster_path}`;
    poster.alt = movie.title;

    // Metin verileri
    title.textContent = movie.title;
    votes.textContent = `${movie.vote_average} / ${movie.vote_count}`;
    popularity.textContent = Math.floor(movie.popularity);

    // Genre id'lerini alma (hem genre_ids hem de genres dizisi varsa kontrol et)
    const genreIds = movie.genre_ids || (movie.genres ? movie.genres.map(g => g.id) : []);

    // Genre map boş mu kontrolü
    if (!genreMap || Object.keys(genreMap).length === 0) {
      console.warn("Genre map boş veya tanımsız! Genre verileri henüz yüklenmemiş.");
      genresSpan.textContent = 'Unknown';
    } else {
      genresSpan.textContent = genreIds
        .map(id => genreMap[id] || 'Unknown')
        .join(', ');
    }

    overview.textContent = movie.overview || 'No description available.';

    // Modal'ı göster
    modal.classList.add('active');
  } catch (error) {
    console.error("openMovieDetailModal hatası:", error);
  }
}

// Modal kapatma
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
