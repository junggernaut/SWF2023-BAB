import MainPage1 from '@/components/MainPage1';
import TopBar from '@/components/TopBar';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import BikeIcon from 'public/bikeSmall.svg';
import MintModal from '@/components/MintModal';

export default function Bike() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TopBar page={0} />
      <div className="w-full h-[100vh] px-[150px] flex items-center justify-between gap-x-[20px]">
        <div className="overflow-hidden bg-contain w-[550px] h-[400px] relative rounded-[30px]">
          <Image
            src="/bikeDetail.png"
            alt="bd"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-[5px]">
            <BikeIcon />
            <span className="font-semibold text-[14px] text-[#ADB5BD]">
              자전거
            </span>
          </div>
          <span className="mt-[15px] text-[#1E1E1E] font-bold text-[22px]">
            따릉이
          </span>
          <span className="mt-[8px] text-[#1E1E1E] text-[16px] font-medium">
            서울자전거는 누구나, 언제나, 어디서나 쉽고 편리하게 이용할 수 있는
            <br />
            무인대여 시스템 서울시의 교통체증, 대기오염, 고유 문제를 해결하고
            <br />
            건강한 사회 및 시민들의 삶의 질을 높이고자 마련.
          </span>
          <span className="mt-[50px] text-gradient-right text-[24px] font-bold">
            상시오픈
          </span>
          <div className="mt-[3px] flex items-center">
            <span className="font-bold text-[24px] text-[#1E1E1E]">120</span>
            <span className="ml-[3px] mt-[4px] font-medium text-[#ADB5BD] text-[16px]">
              명 참여중
            </span>
          </div>
          <div className="mt-[10px] border-[0.8px] border-[#ADB5BD] w-full" />
          <div className="mt-[2px] flex gap-x-[20px] items-center">
            <span className="font-bold text-[16px] text-[#ADB5BD]">혜택</span>
            <span className="font-semibold text-[16px] text-[#ADB5BD]">
              100km 당 10 GRT
            </span>
          </div>
          <div
            className="mt-[20px] cursor-pointer bg-gradient-to-r from-[#01E99D] to-[#07D1D3] w-full py-[14px] text-white rounded-[16px] text-center text-[20px] font-bold "
            onClick={() => setModalOpen(true)}
          >
            참여하기
          </div>
        </div>
      </div>
      <MintModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
