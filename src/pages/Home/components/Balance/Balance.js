import React from 'react';

import { useBalance, formatEtherBalance } from '../../../../utils';

const Balance = () => {
  const balance = useBalance();

  return balance ? (
    <div className="balance">
      <span>Balance</span>

      <span role="img" aria-label="gold">
        💰
      </span>

      <span>{balance ? `Ξ${formatEtherBalance(balance)}` : ''}</span>
    </div>
  ) : (
    <></>
  );
};

export default Balance;
