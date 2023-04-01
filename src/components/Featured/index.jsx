import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function Featured({
  movie,
}) {
  const classes = useStyles();

  if (!movie) return null;
  return (
    <Box
      component={Link}
      to={`/movies/${movie.id}`}
      className={classes.container}
      px={2}
    >
      <Card
        className={classes.card}
        classes={{
          root: classes.cardRoot,
        }}
      >
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box
          padding="20"
        >
          <CardContent
            className={classes.cardContent}
            classes={{
              root: classes.cardContentRoot,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
            >
              {movie.title}
            </Typography>
            <Typography variant="body2">
              {movie.overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default Featured;
