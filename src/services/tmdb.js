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

    // Get movie by id
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${apiKey}`,
    }),

    // Get user specific lists
    getList: builder.query({
      query: ({ name, accountId, sessionId, page }) => `/account/${accountId}/${name}?api_key=${apiKey}&session_id=${sessionId}&page=${page}`,
    }),

    getRecommendations: builder.query({
      query: ({ id, list }) => `/movie/${id}/${list}?api_key=${apiKey}`,
    }),

    // Get actor details
    getActorDetails: builder.query({
      query: (id) => `/person/${id}?api_key=${apiKey}`,
    }),

    // Get movies for a specific actor
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${apiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
