import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest exact path="/" component={Login} />
      <Private exact path="/orders" component={Dashboard} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
