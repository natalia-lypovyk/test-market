import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';

import useBalance from '../../utils/useBalance';
import getErrorMessage from '../../utils/getErrorMessage';

import injected from '../../connector';

const Home = () => {
  const { activate, deactivate, active, library, error } = useWeb3React();
  const balance = useBalance();

  return (
    <>
      <h1>Home</h1>

      {balance && (
        <p>Balance: Ξ {parseFloat(formatEther(balance)).toPrecision(4)}</p>
      )}

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
