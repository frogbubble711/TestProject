import React, { FunctionComponent, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: FunctionComponent<{}> = () => {
  const DashBoard = lazy(() => import('./pages/Dashboard'));
  return (
    <Switch>
      <Route exact={true} path="/" component={DashBoard} />
    </Switch>
  );
};

export default Routes;
