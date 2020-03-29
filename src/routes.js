import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyApp from './pages/MyApp';
import MyText from './pages/MyText';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MyApp} />
        <Route path="/text" component={MyText} />

      </Switch>

    </BrowserRouter>
  )
}