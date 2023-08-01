import { grtAbi } from '@/abis/grt';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { ethers, BigNumber } from 'ethers';

export const useBurn = () => {
  const { address, isConnected } = useAccount();
  const grtAddress = process.env.NEXT_PUBLIC_GRT_ADDRESS as `0x${string}`;
  const prepareWriteBurn = usePrepareContractWrite({
    address: grtAddress,
    functionName: 'burn',
    abi: grtAbi,
    enabled: isConnected && !!address,
    args: ['60'],
  });
  const writeBurn = useContractWrite(prepareWriteBurn.config);

  const txBurn = useWaitForTransaction({
    hash: writeBurn.data?.hash,
  });

  const burnLoading = writeBurn.isLoading || txBurn.isLoading;

  return {
    burnLoading,
    burnError: prepareWriteBurn.error?.message,
    burnSuccess: txBurn.isSuccess && !!txBurn.data,
    burnWrite: writeBurn.write,
    burnTx: txBurn.data?.transactionHash,
  };
};
