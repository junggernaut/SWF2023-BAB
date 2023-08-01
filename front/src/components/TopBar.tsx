import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import WalletConnect from './WalletConnect';
import { useContractRead } from 'wagmi';
import { grtAbi } from '@/abis/grt';
import { ethers, BigNumber } from 'ethers';
import { useState } from 'react';

interface PageProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const TopBar = (props: PageProps) => {
  const { page, setPage } = props;

  return (
    <div className="fixed w-full bg-white z-40">
      <div className="max-w-[1440px] mx-auto px-[60px] py-[10px] flex justify-between items-center">
        <Link href="/">
          <Image src="/grlogo.png" alt="grlogo" width={136} height={36} />
        </Link>
        <div className="flex items-center gap-x-[24px]">
          <div
            className={clsx(
              'cursor-pointer py-[4px] font-semibold text-[16px] leading-[20px]',
              page == 0 ? 'text-[#07D1D3]' : 'text-black'
            )}
            onClick={() => setPage(0)}
          >
            HOME
          </div>
          <div
            className={clsx(
              'cursor-pointer py-[4px] font-semibold text-[16px] leading-[20px]',
              page == 1 ? 'text-[#07D1D3]' : 'text-black'
            )}
            onClick={() => setPage(1)}
          >
            MYPAGE
          </div>
        </div>
        <WalletConnect />
      </div>
    </div>
  );
};
export default TopBar;
