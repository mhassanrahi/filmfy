import { Grid } from '@mui/material';
import React from 'react';
import Movie from '../Movie';
import useStyles from './styles';

function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <Grid className={classes.movieContainer}>
      {
        movies.map((movie, index) => (
          <Movie key={index} movie={movie} index={index} />
        ))
      }
    </Grid>
  );
}

export default MovieList;
