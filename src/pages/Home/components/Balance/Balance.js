import React from 'react';
import { formatEther } from '@ethersproject/units';

import useBalance from '../../../../utils/useBalance';

const Balance = () => {
  const balance = useBalance();

  return balance ? (
    <div className="balance">
      <span>Balance</span>

      <span role="img" aria-label="gold">
        💰
      </span>

      <span>
        {balance ? `Ξ${parseFloat(formatEther(balance)).toPrecision(4)}` : ''}
      </span>
    </div>
  ) : (
    <></>
  );
};

export default Balance;
