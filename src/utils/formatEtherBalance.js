import { formatEther } from '@ethersproject/units';

const formatEtherBalance = (balance) =>
  parseFloat(formatEther(balance)).toPrecision(4);

export default formatEtherBalance;
