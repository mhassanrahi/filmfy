import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  // ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import useStyles from './styles';
import RedLogo from '../../assets/images/filmflyRed.png';
import BlueLogo from '../../assets/images/filmFlyBlue.png';
import { useGetGenresQuery } from '../../services/tmdb';
import genreIcons from '../../assets/icons';

const categories = [
  {
    label: 'Popular',
    value: 'popular',
  },
  {
    label: 'Top Rated',
    value: 'top rated',
  },
  {
    label: 'Upcoming',
    value: 'upcoming',
  },
];

function Sidebar() {
  const theme = useTheme();
  const classes = useStyles();
  const isDarkMode = theme.palette.mode === 'dark';
  const { data, isFetching } = useGetGenresQuery();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          alt="Filmfly "
          src={isDarkMode ? RedLogo : BlueLogo}
        />
      </Link>
      <Divider />

      <List>
        <ListSubheader> Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  src={genreIcons[value?.toLowerCase()]}
                  className={classes.genreImage}
                  height="30"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader> Genres</ListSubheader>
        {
          isFetching ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress size="4rem" />
            </Box>
          )
            : data.genres.map(({ name, id }) => (
              <Link key={id} className={classes.links} to="/">
                <ListItem onClick={() => {}} button>
                  <ListItemIcon>
                    <img
                      src={genreIcons[name?.toLowerCase()]}
                      className={classes.genreImage}
                      height="30"
                    />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </Link>
            ))
}
      </List>
    </>
  );
}

export default Sidebar;
