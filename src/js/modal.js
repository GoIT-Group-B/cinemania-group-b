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

function removeExistingModal() {
  const old = document.querySelector('.custom-modal');
  if (old) old.remove();
  document.body.style.overflow = '';
}

function baseMarkup(innerHTML) {
  removeExistingModal();

  const modal = document.createElement('div');
  modal.className = 'custom-modal';
  modal.innerHTML = `
    <div class="modal-content" tabindex="0">
      <button class="close-btn" aria-label="Close modal">×</button>
      ${innerHTML}
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  modal
    .querySelector('.close-btn')
    .addEventListener('click', removeExistingModal);
  document.addEventListener('keydown', handleKey); // ESC tuşu
  modal.addEventListener('click', e => {
    // Dış tıklama
    if (e.target === modal) {
      removeExistingModal();
      document.removeEventListener('keydown', handleKey);
    }
  });

  function handleKey(e) {
    if (e.key === 'Escape') {
      removeExistingModal();
      document.removeEventListener('keydown', handleKey);
    }
  }
}

export function showTrailerModal(videoKey) {
  const iframe = `
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${videoKey}"
      frameborder="0" allowfullscreen loading="lazy" class="trailer-iframe"></iframe>`;
  baseMarkup(iframe);
}

export function showErrorModal() {
  const html = `
    <div class="error-modal-content">
      <p class="error-title">OOPS...</p>
      <p class="error-text">We are very sorry!<br>But we couldn’t find the trailer.</p>
      <img src="./images/trailer-error.png" alt="Error image" class="error-image" />
    </div>
  `;
  baseMarkup(html);
}

export function showDetailsModal(movie, genreNames = []) {
  const saved = JSON.parse(localStorage.getItem('myLibrary')) || [];
  const isSaved = saved.some(item => item.id === movie.id);
  const buttonLabel = isSaved ? 'Remove from Library' : 'Add to My Library';

  const displayGenreNames =
    genreNames.length > 0
      ? genreNames.join(' ')
      : movie.genre_ids
        ?.map(id => genreMap[id])
        .filter(Boolean)
        .join(' ') || '';

  const html = `
    <div class="movie-modal">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path
    }" class="movie-poster" alt="${movie.title}" />
      <div class="movie-info">
        <h2 class="movie-title">${movie.title || movie.name}</h2>

        <ul class="movie-stats">
          <li>
            <strong>Vote / Votes</strong>
            <div class="movie-stats-value">
              <span>
                <b class="vote-average">${movie.vote_average}</b>
                <span class="vote-divider">/</span>
                <b class="vote-count">${movie.vote_count}</b>
              </span>
            </div>
          </li>
          <li>
            <strong>Popularity</strong>
            <div class="movie-stats-value">
              <span>${Math.round(movie.popularity)}</span>
            </div>
          </li>
          <li>
            <strong>Genre</strong>
            <div class="movie-stats-value">
              <span>${displayGenreNames}</span>
            </div>
          </li>
        </ul>

        <h3 class="about-heading">ABOUT</h3>
        <p class="about-text">${movie.overview || 'No description available.'}</p>

        <div class="add-to-library-gradient-border">
          <button class="add-to-library-btn">${buttonLabel}</button>
        </div>
      </div>
    </div>
  `;

  baseMarkup(html);

  document.querySelector('.add-to-library-btn')?.addEventListener('click', async () => {
    let saved = JSON.parse(localStorage.getItem('myLibrary')) || [];

    if (isSaved) {
      saved = saved.filter(item => item.id !== movie.id);
      alert('Film kütüphaneden kaldırıldı.'); // Küçük bir uyarı
    } else {
      saved.push(movie);
      alert('Film kütüphaneye eklendi.'); // Küçük bir uyarı
    }

    localStorage.setItem('myLibrary', JSON.stringify(saved));
    removeExistingModal();

    try {
      const { loadLibrary } = await import('./library.js');
      if (loadLibrary) {
        loadLibrary();
      }
    } catch (error) {
      console.error('loadLibrary yüklenirken hata oluştu:', error);
    }
  });
}
