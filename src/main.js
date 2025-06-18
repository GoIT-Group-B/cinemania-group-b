import { fetchTrendingMovie } from './js/hero.js';

document.addEventListener('DOMContentLoaded', async () => {
    
    await fetchTrendingMovie();
    await fetchCategories();
});
