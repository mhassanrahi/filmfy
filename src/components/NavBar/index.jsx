import React from 'react';
import { AppBar, Avatar, Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isAuthenticated = false;

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {
          isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{
                outline: 'none',
              }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )
        }

        <IconButton
          color="inherit"
          sx={{
            ml: 1,
          }}
          onClick={() => {}}
        >
          {
          isDarkMode
            ? <Brightness7 />
            : <Brightness4 />
        }
        </IconButton>
        Search...
        <div>
          {
            !isAuthenticated
              ? (
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  {
                    !isMobile && <>My Movies &nbsp;</>
                  }
                  <Avatar
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    alt="Profile Photo"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </Button>
              )
              : (
                <Button color="inherit" onClick={() => {}}>
                  Login &nbsp; <AccountCircle />
                </Button>
              )
          }
        </div>
      </Toolbar>

    </AppBar>
  );
}

export default Navbar;
