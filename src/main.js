import { fetchTrendingMovie } from './js/hero.js';
import { loadHTML } from './js/loader.js';





loadHTML("header", "./partials/header.html");
document.addEventListener('DOMContentLoaded', async () => {
    
    await loadHTML("hero", "./partials/hero.html");
    await fetchTrendingMovie();
    await fetchCategories();
});
