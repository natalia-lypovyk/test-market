import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import injected from '../connector';

const useInactiveListener = (suppress) => {
  const { active, activate, error } = useWeb3React();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log('Handling "connect" event');
        activate(injected);
      };

      const handleChainChanged = (chainId) => {
        console.log('Handling "chainChanged" event with payload', chainId);
        activate(injected);
      };

      const handleAccountChanged = (accounts) => {
        console.log('Handling "accountChanged" event with payload', accounts);
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
};

export default useInactiveListener;
