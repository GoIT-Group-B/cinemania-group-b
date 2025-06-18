window.addEventListener('DOMContentLoaded', () => {
    const themeToggleItem = document.getElementById('theme-switcher');
    const body = document.body;
  
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme === 'light') {
      body.classList.add('light-theme');

      body.classList.toggle('light-theme');
    }
  
    themeToggleItem.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-theme');
      localStorage.setItem('theme', isLight ? 'light-mode' : 'dark-mode');
    });
  });