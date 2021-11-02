import React from 'react';
import { Route } from 'react-router';

const RouteWithSubRoutes = (route) => {
  const { path, exact, routes } = route;

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => <route.component {...props} routes={routes} />}
    />
  );
};

export default RouteWithSubRoutes;
