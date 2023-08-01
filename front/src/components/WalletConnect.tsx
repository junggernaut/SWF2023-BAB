import shortenAddress from '@/utils/shortenAddres';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useEffect } from 'react';
import { useAccount, useEnsName } from 'wagmi';

const WalletConnect = () => {
  const { address } = useAccount();

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
                <div
                  className="items-center cursor-pointer rounded-[8px] py-[12px] px-[30px] bg-gradient-to-r from-[#01E99D] to-[#07D1D3]"
                  onClick={openAccountModal}
                >
                  <span className="text-white text-[16px] font-bold">
                    {shortenAddress(address as `0x${string}`, 3, 3)}
                  </span>
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
