import shortenAddress from '@/utils/shortenAddres';
import Image from 'next/image';
import { useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import { grtAbi } from '@/abis/grt';
import { ethers, BigNumber } from 'ethers';
import Link from 'next/link';

const MyPage = () => {
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
    <div className="w-full h-[807px] bg-[#F3F8F7] relative">
      <div className="absolute top-[130px] left-[200px] flex flex-col ">
        <span className="text-gradient-down font-bold text-[40px]">
          마이페이지
        </span>
        <div className="bg-white mt-[20px] rounded-[16px] border-[3px] border-[#F0F0F0] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)] px-[50px] py-[20px] flex w-[72vw] justify-between items-center">
          <div className="flex items-center">
            <div className="rounded-[50%] h-[50px] w-[50px] bg-[#DADADA]" />
            <div className="ml-[16px] text-[#161616] font-semibold text-[22px]">
              {shortenAddress(address as `0x${string}`, 3, 3)}
            </div>
          </div>

          <Image
            src="/profileEdit.png"
            width={96}
            height={32}
            alt="profileEdit"
          />
        </div>
        <div className="flex items-start mt-[40px] w-[72vw] justify-between">
          <div className="bg-white rounded-[16px] border-[3px] border-[#F0F0F0] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)] px-[30px] py-[20px] flex flex-col gap-y-[30px]">
            <span className="text-[#1E1E1E] text-[32px] font-bold">
              나의 GRT
            </span>
            <div className="flex items-center">
              <span className="text-[60px] font-medium text-[#07D1D3]">
                {balance.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <span className="ml-[10px] text-[#ADB5BD] text-[24px] font-medium">
                GRT
              </span>
            </div>
            <div className="flex justify-between">
              <Link href="/swap">
                <div className=" items-center cursor-pointer rounded-[8px] py-[16px] px-[20px] bg-gradient-to-r from-[#01E99D] to-[#07D1D3]">
                  <span className="text-white text-[16px] font-bold">
                    Swap to USDC
                  </span>
                </div>
              </Link>
              <Link href="/leaderboard">
                <div className="items-center cursor-pointer rounded-[8px] py-[12px] px-[20px] border-[#07D1D3] border-[3px]">
                  <span className="text-[#07D1D3] text-[16px] font-bold">
                    그린 리더보드 가기
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <Image
            src="/myInfo.png"
            width={555}
            height={280}
            alt="myInfo"
            className="ml-[30px] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)]"
          />
        </div>
      </div>
    </div>
  );
};
export default MyPage;
