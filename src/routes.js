import React from 'react';

import Home from './pages/Home';
import SendTokens from './pages/SendTokens';
import Layout from './layout/Layout';

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
    component: () => (
      <Layout>
        <SendTokens />
      </Layout>
    ),
  },
];

export default routes;
