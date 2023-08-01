import shortenAddress from '@/utils/shortenAddres';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { useContractRead } from 'wagmi';
import { grtAbi } from '@/abis/grt';
import { BigNumber, ethers } from 'ethers';
import GRT from 'public/grt.svg';

const WalletConnect = () => {
  const grtAddress = process.env.NEXT_PUBLIC_GRT_ADDRESS as `0x${string}`;

  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState('0');

  useContractRead({
    address: grtAddress,
    abi: grtAbi,
    functionName: 'balanceOf',
    args: [address],
    enabled: isConnected && !!address,
    onSuccess(data: BigNumber) {
      setBalance(ethers.utils.formatUnits(data, 0));
    },
  });

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const connected = mounted && account && chain;
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <div
                    className="items-center cursor-pointer rounded-[8px] py-[12px] px-[30px] bg-gradient-to-r from-[#01E99D] to-[#07D1D3]"
                    onClick={openConnectModal}
                  >
                    <span className="text-white text-[16px] font-bold">
                      Connect Wallet
                    </span>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <div
                    className="flex px-[24px] items-center w-[230px] justify-around text-black text-b-l"
                    onClick={openChainModal}
                  >
                    Wrong Network
                  </div>
                );
              }
              return (
                <div className="flex items-center">
                  <GRT />
                  <div className="ml-[8px] text-gradient-right font-bold text-[16px] ">
                    {`${balance} GRT`}
                  </div>
                  <div
                    className="ml-[8px] items-center cursor-pointer rounded-[8px] py-[12px] px-[20px] bg-gradient-to-r from-[#01E99D] to-[#07D1D3]"
                    onClick={openAccountModal}
                  >
                    <span className="text-white text-[16px] font-bold">
                      {shortenAddress(address as `0x${string}`, 3, 3)}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletConnect;
