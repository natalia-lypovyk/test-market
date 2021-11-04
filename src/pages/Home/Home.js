import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import getErrorMessage from '../../utils/getErrorMessage';
import Balance from './components/Balance';

import injected from '../../connector';

const Home = () => {
  const { activate, deactivate, active, library, error } = useWeb3React();

  return (
    <>
      <h1>Home</h1>

      <Balance />

      {error && (
        <>
          <p>{getErrorMessage(error)}</p>
        </>
      )}

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

          <Link to="/send-tokens">Send tokens</Link>
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
