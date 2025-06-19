window.addEventListener('DOMContentLoaded', () => {
    const themeToggleItem = document.getElementById('theme-switcher');
    const root = document.documentElement; // <html>
  
    const savedTheme = localStorage.getItem('theme');
  
    // Sayfa ilk açıldığında tema ayarlanır
    if (savedTheme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  
    // Toggle butonu ile tema değişir
    themeToggleItem.addEventListener('click', () => {
      const isLight = root.classList.toggle('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  });