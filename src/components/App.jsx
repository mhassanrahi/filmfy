import React from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';

import { Actors, MovieInfo, Movies, Navbar, Profile } from '.';
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
          <Route path={['/', '/approved']} exact component={Movies} />
          <Route path="/movies/:id" exact component={MovieInfo} />
          <Route path="/actors/:id" exact component={Actors} />
          <Route path="/profile/:id" exact component={Profile} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
