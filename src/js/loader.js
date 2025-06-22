export function setupLoadMore({
  movies,
  renderCallback,
  containerSelector,
  btnSelector,
  moviesPerPage = 9,
}) {
  let currentPage = 1;
  const loadMoreBtn = document.querySelector(btnSelector);
  const container = document.querySelector(containerSelector);

  if (!loadMoreBtn || !container) return;

  function showPage() {
    const start = 0;
    const end = currentPage * moviesPerPage;
    const currentMovies = movies.slice(start, end);

    container.innerHTML = ''; // önceki filmleri temizle
    renderCallback(currentMovies);

    if (end >= movies.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }

  // İlk sayfayı göster
  showPage();

  loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    showPage();
  });
}
