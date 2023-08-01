import Image from 'next/image';
import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  useAccount,
  useContractRead,
  useContractReads,
  useEnsName,
  useNetwork,
} from 'wagmi';
import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { nonceMembershipABI } from '../abis/nonceMembership';
import ArrowForwardWhite from 'public/icons/arrowForwardWhite.svg';
import ArrowForwardBlack from 'public/icons/arrowForwardBlack.svg';
import Switch from 'public/icons/switch.png';
import Etherscan from 'public/logos/etherscan.png';
import Setting from 'public/icons/setting.png';
import Link from 'next/link';
import { BigNumber, ethers } from 'ethers';
import { debounce } from 'lodash';
import useTokenInfo from './hooks/useTokenInfo';
import shortenAddress from './utils/shortenAddress';
import clsx from 'clsx';
import { useMint } from './hooks/useMint';
import SpinnerIcon from 'public/icons/spinner.svg';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MintModal = (props: ModalProps) => {
  const { modalOpen, setModalOpen } = props;

  const [membershipMintingPrice, setMembershipMintingPrice] = useState<
    string | null
  >(null);
  const [tokenId, setTokenId] = useState<string | null>(null);
  const [mintFinished, setMintFinished] = useState(false);

  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { chain } = useNetwork();
  const { openChainModal } = useChainModal();

  const {
    tokenInfoLoading,
    tokenImage,
    tokenWhiteList,
    tokenOwner,
    mintLoading,
    mintError,
    mintSuccess,
    mintWrite,
    mintTx,
  } = useMint(tokenId, setMintFinished);

  useContractRead({
    address: process.env.NEXT_PUBLIC_MEMBERSHIP_CONTRACT_ADDRESS,
    abi: nonceMembershipABI,
    functionName: 'price',
    onSuccess(data: BigNumber) {
      setMembershipMintingPrice(ethers.utils.formatEther(data));
    },
  });

  const debouncedTokenIdChange = debounce((text: string) => {
    setTokenId(text);
    setMintFinished(false);
  }, 500);
  const onChangeTokenId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(0|[1-9][0-9]{0,})$/;
    if (e.target.value == '' || regex.test(e.target.value)) {
      debouncedTokenIdChange(e.target.value), 1000;
    }
  };

  return (
    <Transition appear show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={() => {
          setTokenId(null);
          setMintFinished(false);
          setModalOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col max-w-lg h-[330px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="flex text-t-l text-black">
                  Mint Nonce Membership
                </Dialog.Title>

                <div className="w-full flex-1 relative">
                  {!isConnected ? (
                    <div className="div absolute w-[60%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3  border rounded-md border-black">
                      <div className="relative w-full">
                        <div
                          className="cursor-pointer flex px-[24px] gap-x-[8px] h-[50px] items-center justify-between"
                          onClick={openConnectModal}
                        >
                          <span className="text-black text-t-l">
                            Connect Wallet
                          </span>
                          <div className="p-[4px]">
                            <Image
                              src={ArrowForwardBlack}
                              alt={'arrowForward'}
                            />
                          </div>
                        </div>
                        <span className="absolute text-center top-[100%] pt-[5px] left-1/2 -translate-x-1/2 text-t-s w-full">
                          You should connect your wallet first
                        </span>
                      </div>
                    </div>
                  ) : chain?.unsupported ? (
                    <div className="div absolute w-[60%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3  border rounded-md border-black">
                      <div
                        className="cursor-pointer flex px-[24px] gap-x-[8px] h-[50px] items-center justify-between"
                        onClick={openChainModal}
                      >
                        <span className="text-black text-t-l">
                          Wrong Network
                        </span>
                        <div className="p-[4px]">
                          <Image
                            alt="DropDown"
                            src={Switch}
                            width={18}
                            height={18}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full pt-[20px] flex flex-col items-start gap-y-[10px]">
                      <div className="flex flex-col w-full text-b-l text-black">
                        <div className="flex gap-x-2 ">
                          <span>
                            Contract:{' '}
                            {shortenAddress(
                              process.env
                                .NEXT_PUBLIC_MEMBERSHIP_CONTRACT_ADDRESS,
                              4,
                              4
                            )}
                          </span>
                          <div className="self-center cursor-pointer">
                            <Link
                              href={`https://goerli.etherscan.io/address/${process.env.NEXT_PUBLIC_MEMBERSHIP_CONTRACT_ADDRESS}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Image
                                alt="etherscan"
                                src={Etherscan}
                                width={18}
                                height={18}
                              />
                            </Link>
                          </div>
                        </div>
                        <span>
                          {`Minting Price: ${membershipMintingPrice}ETH`}
                        </span>
                      </div>

                      <div className="grow w-full flex text-b-m">
                        <div className="w-[30%] relative h-full flex flex-col">
                          <div className="relative top-0 h-[75%] w-full">
                            {tokenInfoLoading ? (
                              <Image
                                alt="loading"
                                src={SpinnerIcon}
                                width={20}
                                height={20}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                              />
                            ) : (
                              <Image
                                alt="nftImage"
                                src={
                                  tokenImage
                                    ? tokenImage
                                    : '/images/nonceNftReplace.png'
                                }
                                fill
                                className="object-scale-down"
                              />
                            )}
                          </div>
                          <div className="pt-[8%] bottom-0 h-[25%] w-full">
                            <div className="relative h-full w-full">
                              <input
                                type="text"
                                pattern="^(0|[1-9][0-9]{0,})$"
                                placeholder=" Token Id"
                                onChange={onChangeTokenId}
                                className="peer absolute top-0 w-full h-[30px] outline-0 inline-block overflow-y-hidden border-2 rounded border-black"
                              />
                              <span className="invisible peer-invalid:visible absolute w-full pl-[5%] bottom-0 left-0 text-[10px] text-red">
                                invalid token id
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-[70%] pl-[10%] h-full flex flex-col items-center justify-around">
                          <div className="w-full h-[75%] flex flex-col justify-around items-center p-[5%]">
                            <span className="self-start">
                              {`WhiteList Address: ${
                                tokenId && !tokenInfoLoading
                                  ? tokenWhiteList !=
                                    ethers.constants.AddressZero
                                    ? `${shortenAddress(
                                        tokenWhiteList as `0x${string}`,
                                        4,
                                        4
                                      )}`
                                    : 'Not in WhiteList'
                                  : ''
                              }`}
                            </span>
                            <span className="self-start">
                              {`Owner Address: ${
                                tokenId && !tokenInfoLoading
                                  ? tokenOwner
                                    ? `${shortenAddress(
                                        tokenOwner as `0x${string}`,
                                        4,
                                        4
                                      )}`
                                    : 'Not Minted'
                                  : ''
                              }`}
                            </span>
                          </div>
                          <div className="w-full h-[18%] relative ">
                            {mintFinished ? (
                              <div className="text-center text-h-s">
                                Mint Success!
                              </div>
                            ) : (
                              <button
                                className={clsx(
                                  'absolute h-full w-[30%] flex gap-x-[10px] items-center justify-center top-1/2 left-[32%] -translate-y-1/2 border border-black rounded-md bg-black ',
                                  'hover:bg-white hover:text-black',
                                  'disabled:border-gray disabled:bg-gray disabled:text-white',
                                  mintLoading
                                    ? 'bg-white text-black'
                                    : 'text-white'
                                )}
                                disabled={
                                  tokenInfoLoading ||
                                  (tokenOwner as string)?.toLowerCase() ==
                                    address?.toLowerCase() ||
                                  (tokenWhiteList as string)?.toLowerCase() !=
                                    address?.toLowerCase() ||
                                  !mintWrite
                                }
                                onClick={() => mintWrite?.()}
                              >
                                <span>Mint</span>
                                {!tokenInfoLoading &&
                                  (tokenWhiteList as string)?.toLowerCase() ==
                                    address?.toLowerCase() &&
                                  (tokenOwner as string)?.toLowerCase() !=
                                    address?.toLowerCase() &&
                                  mintLoading && (
                                    <Image
                                      alt="loading"
                                      src={SpinnerIcon}
                                      width={20}
                                      height={20}
                                    />
                                  )}
                              </button>
                            )}
                          </div>

                          <div className="w-full h-[7%] text-center text-[10px] text-red">
                            {address &&
                              !tokenOwner &&
                              (tokenWhiteList as string)?.toLowerCase() ==
                                address?.toLowerCase() &&
                              mintError?.substring(0, 12) == 'insufficient' && (
                                <span>Insufficient Wallet Balance</span>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MintModal;
