import { grSwapPoolAbi } from '@/abis/grSwapPool';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { ethers, BigNumber } from 'ethers';

export const useSwap = (amount: string) => {
  const { address, isConnected } = useAccount();
  const poolAddress = process.env.NEXT_PUBLIC_POOL_ADDRESS as `0x${string}`;
  const usdcAddress = process.env.NEXT_PUBLIC_USDC_ADDRESS as `0x${string}`;

  const prepareWriteSwap = usePrepareContractWrite({
    address: poolAddress,
    functionName: 'swap',
    abi: grSwapPoolAbi,
    enabled: isConnected && !!address && amount != '',
    args: [usdcAddress, ethers.utils.parseUnits(amount, 6)],
  });
  const writeSwap = useContractWrite(prepareWriteSwap.config);

  const txSwap = useWaitForTransaction({
    hash: writeSwap.data?.hash,
  });

  const swapLoading = writeSwap.isLoading || txSwap.isLoading;

  return {
    swapLoading,
    swapError: prepareWriteSwap.error?.message,
    swapSuccess: txSwap.isSuccess && txSwap.data,
    swapWrite: writeSwap.write,
    swapTx: txSwap.data?.transactionHash,
  };
};
