import React, { useEffect, useState } from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';

import useEagerConnect from './utils/useEagerConnect';
import useInactiveListener from './utils/useInactiveListener';
import RenderRoutes from './components/RenderRoutes';
import getLibrary from './getLibrary';
import Layout from './layout/Layout';
import routes from './routes';
import './styles/Main.scss';

const Main = () => {
  const { connector } = useWeb3React();

  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <RenderRoutes routes={routes} />
      </Layout>
    </Web3ReactProvider>
  );
};

export default Main;
