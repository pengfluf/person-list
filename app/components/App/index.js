/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage';

function App() {
  return (
    <Switch>
      <Route path="/person/:personId" component={MainPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
