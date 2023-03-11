import React from 'react';
import { useGetMoviesQuery } from '../../services/tmdb';

function Movies() {
  const { data } = useGetMoviesQuery();
  console.log('data :', data);

  return (
    <div>Movies</div>
  );
}

export default Movies;
