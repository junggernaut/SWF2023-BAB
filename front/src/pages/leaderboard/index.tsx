import TopBar from '@/components/TopBar';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import BikeIcon from 'public/bikeSmall.svg';
import Up from 'public/triangle.svg';
import MintModal from '@/components/MintModal';
import { useBurn } from '@/hooks/useBurn';

export default function LeaderBoard() {
  const { burnLoading, burnError, burnSuccess, burnWrite, burnTx } = useBurn();

  return (
    <>
      <TopBar page={0} setPage={null} />
      <div className="h-[807px] bg-[#F3F8F7] pt-[130px] px-[210px] ">
        <span className="text-gradient-right text-[40px] font-bold">
          그린 리더보드
        </span>
        <div className="flex mt-[40px] gap-x-[50px] items-start">
          <div className="bg-white rounded-[16px] border-[3px] border-[#F0F0F0] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)] px-[30px] py-[20px] flex flex-col gap-y-[15px]">
            <Image
              src={burnSuccess ? '/reduceGraphAfter.png' : '/reduceGraph.png'}
              width={200}
              height={600}
              alt="burn"
            />
            <div className="flex justify-between items-center">
              <span className="text-[#161616] text-[15px] font-semibold">
                상쇄 가능
              </span>
              <div>
                <span className="text-[#07D1D3] text-[8px] font-bold">
                  {burnSuccess ? '0GRT' : '60GRT'}
                </span>
                <div className="flex items-center gap-x-[3px]">
                  <Up />
                  <span className="text-[#07D1D3] text-[8px] font-bold">
                    {burnSuccess ? '0%' : '20%'}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="text-center cursor-pointer rounded-[8px] py-[10px] px-[20px] bg-gradient-to-r from-[#01E99D] to-[#07D1D3]"
              onClick={() => burnWrite?.()}
            >
              <span className="text-white text-[16px] font-bold"> 상쇄 </span>
            </div>
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
