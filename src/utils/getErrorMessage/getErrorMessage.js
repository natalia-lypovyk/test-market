import { UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError,
} from '@web3-react/injected-connector';

const getErrorMessage = (error) => {
  if (
    error instanceof NoEthereumProviderError ||
    error.name === 'NoEthereumProviderError'
  ) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from dApp on mobile.';
  }
  if (
    error instanceof UnsupportedChainIdError ||
    error.name === 'UnsupportedChainIdError'
  ) {
    return 'You are connected to an unsupported network.';
  }
  if (
    error instanceof UserRejectedRequestError ||
    error.name === 'UserRejectedRequestErrorInjected'
  ) {
    return 'Please authorize this website to access your Ethereum account.';
  }

  console.error(
    'Unrecognized error. Check the console for more details',
    error,
  );
  return error.message;
};

export default getErrorMessage;
