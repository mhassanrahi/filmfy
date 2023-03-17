import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetMovieQuery } from '../../../services/tmdb';
import useStyles from './styles';
import genreIcons from '../../../assets/icons';
import { selectGenreOrCategory } from '../../../features/currentGenreOrCategory';

function MovieInfo() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();

  if (isFetching) {
    return (
      <Box
        display="flex"
        justifyContent="content"
        alignItems="center"
      >
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="content"
        alignItems="center"
      >
        <Link to="/">
          Something has gone wrong. Please go back.
        </Link>
      </Box>
    );
  }
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt="Movie Poster"
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg={7}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
        >
          {data?.title} ({data.release_date.split('-')[0]})
        </Typography>

        <Typography
          variant="h5"
          align="center"
          gutterBottom
        >
          {data?.tagline}
        </Typography>

        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" alignItems="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{
                marginLeft: 10,
              }}
            >
              {data?.vote_average} /10
            </Typography>
          </Box>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
          >
            {data?.runtime} min
            {
            data?.spoken_languages.length ? ` / ${data.spoken_languages[0].name}` : ''
          }
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {
            data?.genres?.map((genre, index) => (
              <Link
                className={classes.links}
                to="/"
                key={index}
                onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              >
                <img
                  src={genreIcons[genre?.name?.toLowerCase()]}
                  className={classes.genreImage}
                  height="30"
                />
                <Typography
                  color="textPrimary"
                  variant="subtitle1"
                >
                  {
                    genre?.name
                }
                </Typography>
              </Link>
            ))
        }
        </Grid>

      </Grid>
    </Grid>
  );
}

export default MovieInfo;
