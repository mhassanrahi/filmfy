import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import MovieList from './MovieList';
import { useGetMoviesQuery } from '../../services/tmdb';

function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex">
        <Typography variant="h4">
          No movies found.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return 'Something went wrong. Please try again.';
  }

  return (
    <div>
      <MovieList movies={data?.results} />
    </div>
  );
}

export default Movies;
