import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../features/currentGenreOrCategory';

import useStyles from './styles';

function Search() {
  const [query, setQuery] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== '/') return null;
  return (
    <div className={classes.container}>
      <TextField
        onKeyPress={handleSearch}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
