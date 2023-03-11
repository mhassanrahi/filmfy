import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import useStyles from './styles';
import RedLogo from '../../assets/images/filmflyRed.png';
import BlueLogo from '../../assets/images/filmFlyBlue.png';

const categories = [
  {
    label: 'Popular',
    value: 'popular',
  },
  {
    label: 'Top Rated',
    value: 'topRated',
  },
  {
    label: 'Upcoming',
    value: 'upcoming',
  },
];

const demoCategories = [
  {
    label: 'Comedy',
    value: 'comedy',
  },
  {
    label: 'Action',
    value: 'action',
  },
  {
    label: 'Adventure',
    value: 'adventure',
  },
  {
    label: 'Animation',
    value: 'animation',
  },
];

function Sidebar() {
  const theme = useTheme();
  const classes = useStyles();
  const isDarkMode = theme.palette.mode === 'dark';

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
              {/* <ListItemIcon>
                <img
                  src={RedLogo}
                  className={classes.genreImage}
                  height="30"
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader> Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={RedLogo}
                  className={classes.genreImage}
                  height="30"
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
