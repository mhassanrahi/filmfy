import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function Movie({ movie, index }) {
  const classes = useStyles();
  const timeout = (index + 1) * 250;
  const movieImage = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'https://fillmurray.com/200/300';
  return (
    <Grid item sm={12} lg={3} xl={2} className={classes.movie}>
      <Grow in key={index} timeout={timeout}>
        <Link className={classes.link} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={movieImage}
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
