function themeLoader() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    }
  }

themeLoader();