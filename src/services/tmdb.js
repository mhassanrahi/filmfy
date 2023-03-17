import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    // Get movies by type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&api_key=${apiKey}&page=${page}`;
        }
        // Get movies by category
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'string'
        ) {
          return `movie/${genreIdOrCategoryName}?api_key=${apiKey}&page=${page}`;
        }
        // Get movies by genres
        return `discover/movie?with_genres=${genreIdOrCategoryName}&api_key=${apiKey}&page=${page}`;
      },
    }),

    // Get genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${apiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
