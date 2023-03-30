import React, { useState } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/tmdb';
// eslint-disable-next-line import/no-cycle
import { MovieList, Pagination } from '..';

function Movies() {
  const [page, setPage] = useState(1);
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const moviesToShow = lg ? 16 : 18;
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory,
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20">
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
      <MovieList movies={data?.results?.slice(0, moviesToShow)} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </div>
  );
}

export default Movies;
