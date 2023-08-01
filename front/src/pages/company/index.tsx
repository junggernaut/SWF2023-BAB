import MainPage1 from '@/components/MainPage1';
import TopBar from '@/components/TopBar';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import CompanyIcon from 'public/companylogo.svg';

export default function Company() {
  return (
    <>
      <TopBar page={0} setPage={null} />
      <div className="w-full h-[100vh] px-[150px] flex items-center justify-between gap-x-[20px]">
        <div className="overflow-hidden bg-contain w-[550px] h-[400px] relative rounded-[30px]">
          <Image src="/samsung.png" alt="bd" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-[5px]">
            <CompanyIcon />
            <span className="font-semibold text-[14px] text-[#ADB5BD]">
              {'기업바운티>삼성전자'}
            </span>
          </div>
          <span className="mt-[15px] text-[#1E1E1E] font-bold text-[22px]">
            '한강, 한그루' 캠페인
          </span>
          <span className="mt-[8px] text-[#1E1E1E] text-[16px] font-medium">
            삼성전자가 환경의 날을 맞아 '한강, 한그루'캠페인을 진행합니다.
            <br />
            참여방법 - 희망하는 공원, 날짜 시간을 정하고 예약일에 나무를 심는다.
            <br />
            *나무는 행사 장소에 준비되어 있습니다.
          </span>
          <span className="mt-[50px] text-gradient-right text-[24px] font-bold">
            40% 달성
          </span>
          <div className="mt-[3px] flex items-center">
            <span className="font-bold text-[24px] text-[#1E1E1E]">
              400/1000
            </span>
            <span className="ml-[3px] mt-[4px] font-medium text-[#ADB5BD] text-[16px]">
              명 참여중
            </span>
          </div>
          <div className="mt-[10px] border-[0.8px] border-[#ADB5BD] w-full" />
          <div className="mt-[2px] flex gap-x-[20px] items-center">
            <span className="font-bold text-[16px] text-[#ADB5BD]">혜택</span>
            <span className="font-semibold text-[16px] text-[#ADB5BD]">
              아기나무 NFT 🌳
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
    </>
  );
}
