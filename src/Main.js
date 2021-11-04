import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

import RenderRoutes from './components/RenderRoutes';
import Layout from './layout/Layout';
import routes from './routes';
import './styles/Main.scss';

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;

  return library;
};

const Main = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  </Web3ReactProvider>
);

export default Main;
