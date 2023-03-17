import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);
  console.log('user: ', user);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom> My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {/* Favorite Movies */}

      {
        !favoriteMovies.length
          ? <Typography> Add favorites or watchlist some videos to see them here!</Typography>
          : (
            <Box>
              Favorite Movies
            </Box>
          )
      }
    </Box>
  );
}

export default Profile;
