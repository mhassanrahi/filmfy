import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/tmdb';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});

export default store;
