import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

const useBalance = () => {
  const { account, library, chainId } = useWeb3React();
  const [accountBalance, setAccountBalance] = useState();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setAccountBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setAccountBalance(null);
          }
        });

      return () => {
        stale = true;
        setAccountBalance(undefined);
      };
    }
  }, [account, library, chainId]);

  return accountBalance;
};

export default useBalance;
