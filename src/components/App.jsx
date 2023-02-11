import React from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Navbar, Profile } from '.';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
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
