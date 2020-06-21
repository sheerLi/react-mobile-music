import './index.less';

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import AppContainer from '@/containers/app';
import Home from '@/pages/Home';

const App = () => (
  <Router>
    <AppContainer>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </AppContainer>
  </Router>
);

export default hot(App);
