const scrollUpButtonElement = document.querySelector('.scroll-up-button');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  // Sayfanın ortasına gelinmişse göster
  if (scrollY > (documentHeight - windowHeight) / 6) {
    scrollUpButtonElement.style.display = 'flex';
  } else {
    scrollUpButtonElement.style.display = 'none';
  }
});

scrollUpButtonElement.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
