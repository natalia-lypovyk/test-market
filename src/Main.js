import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import RenderRoutes from './components/RenderRoutes';
import Layout from './layout/Layout';
import routes from './routes';
import './styles/Main.scss';

const getLibrary = (provider) => new Web3Provider(provider);

const Main = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  </Web3ReactProvider>
);

export default Main;
