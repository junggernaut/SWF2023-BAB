import TopBar from '@/components/TopBar';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import BikeIcon from 'public/bikeSmall.svg';
import MintModal from '@/components/MintModal';

export default function LeaderBoard() {
  return (
    <>
      <TopBar page={0} setPage={null} />
      <div className="h-[807px] bg-[#F3F8F7] pt-[130px] px-[210px] ">
        <span className="text-gradient-right text-[40px] font-bold">
          그린 리더보드
        </span>
        <div className="flex mt-[40px] gap-x-[50px]">
          <div className="bg-white rounded-[16px] border-[3px] border-[#F0F0F0] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)] px-[30px] py-[20px] flex flex-col gap-y-[30px]">
            <Image src="/burn.png" width={200} height={600} alt="burn" />
          </div>
          <Image
            src="/ranking.png"
            width={600}
            height={600}
            alt="ranking"
            className="shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)]"
          />
        </div>
      </div>
    </>
  );
}
