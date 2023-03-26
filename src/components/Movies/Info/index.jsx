import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Modal,
  Rating,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ArrowBack,
  Favorite,
  FavoriteBorderOutlined,
  Language,
  Movie as MovieIcon,
  PlusOne,
  Remove,
  Theaters,
} from '@mui/icons-material';
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from '../../../services/tmdb';
import useStyles from './styles';
import genreIcons from '../../../assets/icons';
import { selectGenreOrCategory } from '../../../features/currentGenreOrCategory';
import MovieList from '../MovieList';

function MovieInfo() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { data: recommendations } = useGetRecommendationsQuery({
    id,
    list: '/recommendations',
  });
  const isMovieFavorited = true;
  const isMovieWatchListed = true;

  const addToFavorites = () => {};

  const addToWatchList = () => {};

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="content" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="content" alignItems="center">
        <Link to="/">Something has gone wrong. Please go back.</Link>
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
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split('-')[0]})
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
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
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime} min
            {data?.spoken_languages.length
              ? ` / ${data.spoken_languages[0].name}`
              : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre, index) => (
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
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>

        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
          }}
        >
          Overview
        </Typography>

        <Typography
          style={{
            marginBottom: 10,
          }}
        >
          {data?.overview}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>

        <Grid item container spacing={2}>
          {data?.credits?.cast
            ?.map(
              (character, index) => character.profile_path && (
              <Grid
                item
                xs={4}
                md={2}
                component={Link}
                key={index}
                to={`/actors/${character.id}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <img
                  className={classes.castImage}
                  src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                  alt={character.name}
                />

                <Typography color="textPrimary">
                  {character.name}
                </Typography>

                <Typography color="textSecondary">
                  {character.character.split('/')[0]}
                </Typography>
              </Grid>
              ),
            )
            .slice(0, 6)}
        </Grid>
        <Grid
          item
          container
          style={{
            marginTop: '2rem',
          }}
        >
          <div className={classes.buttonsContainer}>
            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup size="medium" variant="outlined">
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  Website
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button
                  onClick={() => setOpen(true)}
                  href="#"
                  endIcon={<Theaters />}
                >
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup size="medium" variant="outlined">
                <Button
                  onClick={addToFavorites}
                  endIcon={
                    isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />
                  }
                >
                  {isMovieFavorited ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button
                  onClick={addToWatchList}
                  endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}
                >
                  Watchlist
                </Button>
                <Button
                  onClick={addToWatchList}
                  endIcon={<ArrowBack />}
                  sx={{
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="subtitle2"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* Recommended Movies */}
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" align="center" gutterBottom>
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList
            movies={recommendations.results?.slice(0, 12)}
            noOfMoives={12}
          />
        ) : (
          <Box>Sorry, nothing found.</Box>
        )}
      </Box>

      {data?.videos?.results?.length
        && typeof data.videos.results[0].key === 'string' && (
          <Modal
            closeAfterTransition
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
          >
            <iframe
              autoPlay
              className={classes.video}
              title="Trailer"
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allow="autoplay"
            />
          </Modal>
      )}
    </Grid>
  );
}

export default MovieInfo;
