import { Typography, Box } from '@mui/material';
import React from 'react';
import Movie from '../Movies/Movie';

import useStyles from './styles';

function RatedCard({
  title,
  data,
}) {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        className={classes.container}
      >
        {
          data?.results?.map((movie, index) => (
            <Movie
              movie={movie}
              index={index}
              key={index}
            />
          ))
        }
      </Box>
    </Box>
  );
}

export default RatedCard;
