import axios from 'axios';

const API_KEY = "52238d7fab5c2c01b99e751619dd16ec";
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p';

export { BASE_URL, IMG_BASE_URL };

    
export const ENDPOINTS = {
  POPULAR_MOVIES: '/movie/popular',
  UPCOMING_MOVIES: '/movie/upcoming',
  TRENDING_WEEK: '/trending/movie/week',
  TRENDING_DAY: '/trending/movie/day',
  SEARCH_MOVIES: '/search/movie',
  GENRE_LIST: '/genre/movie/list',
  MOVIE_DETAILS: movieId => `/movie/${movieId}`,
  MOVIE_VIDEOS: movieId => `/movie/${movieId}/videos`,
  IMG_ORIGINAL: '/original',
  IMG_W500: '/w500',
  IMG_W780: '/w780',
  IMG_W1280: '/w1280',
};

export async function fetchMovies(baseUrl, endpoint, params = {}) {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchGenres() {
  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.GENRE_LIST}`, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    const map = {};
    response.data.genres.forEach(g => {
      map[g.id] = g.name;
    });
    return map;
  } catch (err) {
    console.error('Error fetching genres:', err);
    return {};
  }
}