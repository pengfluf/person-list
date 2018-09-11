/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import MainPage from 'containers/MainPage';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/person/:personId" component={MainPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
