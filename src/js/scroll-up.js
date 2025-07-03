document.addEventListener('DOMContentLoaded', () => {
  const scrollUpButtonElement = document.querySelector('.scroll-up-button');
  if (!scrollUpButtonElement) return; // Buton yoksa işlemi durdur

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollY > 200) {
      scrollUpButtonElement.style.display = 'flex';
    } else {
      scrollUpButtonElement.style.display = 'none';
    }
  });

  scrollUpButtonElement.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
