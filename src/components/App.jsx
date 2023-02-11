import React from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Navbar, Profile } from '.';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies/:id" exact component={MovieInformation} />
          <Route path="/actors/:id" exact component={Actors} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
