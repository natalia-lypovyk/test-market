import React from 'react';

import RenderRoutes from './components/RenderRoutes';
import Layout from './layout/Layout';
import routes from './routes';
import './styles/Main.scss';

const Main = () => (
  <Layout>
    <RenderRoutes routes={routes} />
  </Layout>
);

export default Main;
