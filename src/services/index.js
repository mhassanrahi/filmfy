import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_KEY;
const sessionId = localStorage.getItem('session_id');

export const addToFavorites = (userId, movieId, isMovieFavorited) => axios.post(
  `https://api.themoviedb.org/3/account/${userId}/favorite?api_key=${apiKey}&session_id=${sessionId}`,
  {
    media_type: 'movie',
    media_id: movieId,
    favorite: isMovieFavorited,
  },
);

export const addToWatchList = (userId, movieId, isMovieWatchListed) => axios.post(
  `https://api.themoviedb.org/3/account/${userId}/watchlist?api_key=${apiKey}&session_id=${sessionId}`,
  {
    media_type: 'movie',
    media_id: movieId,
    watchlist: isMovieWatchListed,
  },
);
