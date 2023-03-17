import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
// eslint-disable-next-line import/no-cycle
import { Search, Sidebar } from '..';
import { createSessionId, fetchToken, getUserData } from '../../utils';
import { setUser } from '../../features/auth';

function Navbar() {
  const [mobileOpen, setMobilePhone] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  // const isAuthenticated = false;
  const token = localStorage.getItem('token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        let userData;
        if (sessionIdFromLocalStorage) {
          userData = await getUserData();
        } else {
          await createSessionId();
          userData = await getUserData();
        }
        dispatch(setUser(userData));
      }
    };

    loginUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{
                outline: 'none',
              }}
              onClick={() => setMobilePhone((prevState) => !prevState)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton
            color="inherit"
            sx={{
              ml: 1,
            }}
            onClick={() => { }}
          >
            {isDarkMode
              ? <Brightness7 />
              : <Brightness4 />}
          </IconButton>
          {
            !isMobile && <Search />
          }
          <div>
            {isAuthenticated
              ? (
                <Button
                  color="inherit"
                  component={Link}
                  to={`/profile/${user.id}`}
                  className={classes.linkButton}
                  onClick={() => { }}
                >
                  {!isMobile && <>My Movies &nbsp;</>}
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
                <Button color="inherit" onClick={fetchToken}>
                  Login &nbsp; <AccountCircle />
                </Button>
              )}
          </div>
          {
            isMobile && <Search />
          }
        </Toolbar>

      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobilePhone((prevState) => !prevState)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobilePhone={setMobilePhone} />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              open
              classes={{ paper: classes.drawerPaper }}
            >
              <Sidebar setMobilePhone={setMobilePhone} />
            </Drawer>
          )}

        </nav>
      </div>
    </>
  );
}

export default Navbar;
