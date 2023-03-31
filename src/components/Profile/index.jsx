import React, { useEffect } from 'react';
import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetListQuery } from '../../services/tmdb';
// eslint-disable-next-line import/no-cycle
import { RatedCard } from '..';

function Profile() {
  const { user } = useSelector((state) => state);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    name: 'favorite/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({
    name: 'watchlist/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlist();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom pl={2}> My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {/* Favorite Movies */}

      {
        !favoriteMovies?.results.length && watchlistMovies?.results.length
          ? <Typography> Add favorites or watchlist some videos to see them here!</Typography>
          : (
            <Box pl={2}>
              <RatedCard
                title="Favorite Movies"
                data={favoriteMovies}
              />
              <RatedCard
                title="Watchlist Movies"
                data={watchlistMovies}
              />
            </Box>
          )
      }
    </Box>
  );
}

export default Profile;
