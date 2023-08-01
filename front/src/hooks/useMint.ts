import { grtAbi } from '@/abis/grt';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { ethers, BigNumber } from 'ethers';

export const useMint = () => {
  const { address, isConnected } = useAccount();
  const grtAddress = process.env.NEXT_PUBLIC_GRT_ADDRESS as `0x${string}`;
  const prepareWriteMint = usePrepareContractWrite({
    address: grtAddress,
    functionName: 'mint',
    abi: grtAbi,
    enabled: isConnected && !!address,
    args: ['30'],
  });
  console.log(prepareWriteMint);
  const writeMint = useContractWrite(prepareWriteMint.config);

  const txMint = useWaitForTransaction({
    hash: writeMint.data?.hash,
  });

  const mintLoading = writeMint.isLoading || txMint.isLoading;

  return {
    mintLoading,
    mintError: prepareWriteMint.error?.message,
    mintSuccess: txMint.isSuccess && txMint.data,
    mintWrite: writeMint.write,
    mintTx: txMint.data?.transactionHash,
  };
};
