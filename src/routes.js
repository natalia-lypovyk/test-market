import React from 'react';

import Home from './pages/Home';
import SendTokens from './pages/SendTokens';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/send-tokens',
    key: 'ROOT',
    exact: true,
    component: () => <SendTokens />,
  },
];

export default routes;
