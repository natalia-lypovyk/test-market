import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const useTransferEther = () => {
  const { library } = useWeb3React();

  const transferEther = async (to, amount) => {
    const signer = library.getSigner();
    signer.sendTransaction({
      to,
      value: ethers.utils.parseEther(amount),
    });
  };

  return { transferEther };
};

export default useTransferEther;
