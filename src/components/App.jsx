import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';

import { Actors, MovieInfo, Movies, Navbar, Profile } from '.';
import useStyles from './styles';
import useAlan from './Alan';

function App() {
  const classes = useStyles();
  const alanButtonContainer = useRef();
  useAlan();
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
      <div ref={alanButtonContainer} />
    </div>
  );
}

export default App;
