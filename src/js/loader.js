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
    const start = (currentPage - 1) * moviesPerPage;
    const end = currentPage * moviesPerPage;
    const currentMovies = movies.slice(start, end);

    renderCallback(currentMovies);

    if (end >= movies.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }

  // İlk sayfa
  showPage();

  loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    showPage();
  });
}
