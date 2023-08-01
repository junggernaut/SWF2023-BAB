import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import WalletConnect from './WalletConnect';
import { useContractRead } from 'wagmi';
import { grtAbi } from '@/abis/grt';
import { ethers, BigNumber } from 'ethers';
import { useState } from 'react';

interface Page {
  page: number;
}

const TopBar = (props: Page) => {
  const { page } = props;

  return (
    <div className="fixed w-full bg-white z-40">
      <div className="max-w-[1440px] mx-auto px-[60px] py-[10px] flex justify-between items-center">
        <Link href="/">
          <Image src="/grlogo.png" alt="grlogo" width={136} height={36} />
        </Link>
        <div className="flex items-center gap-x-[24px]">
          <Link href="/get">
            <div
              className={clsx(
                'cursor-pointer py-[4px] font-semibold text-[16px] leading-[20px]',
                page == 0 ? 'text-[#07D1D3]' : 'text-black'
              )}
            >
              탄소배출권 얻기
            </div>
          </Link>
          <Link href="https://app.bancof.io" target="_blank" rel="noreferrer">
            <div className="cursor-pointer ">pricing</div>
          </Link>
        </div>
        <WalletConnect />
      </div>
    </div>
  );
};
export default TopBar;
