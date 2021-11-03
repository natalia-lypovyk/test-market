import React from 'react';
import { useWeb3React } from '@web3-react/core';

import injected from '../../connector';

const Home = () => {
  const { activate, deactivate, active, library } = useWeb3React();

  return (
    <>
      <h1>Home</h1>

      {active ? (
        <>
          <p>Connected with {library.connection.url}</p>

          <button
            className="connect-button"
            onClick={() => deactivate()}
            type="button"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          className="connect-button"
          onClick={() => activate(injected)}
          type="button"
        >
          Connect to wallet
        </button>
      )}
    </>
  );
};

export default Home;
