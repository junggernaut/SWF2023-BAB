import Image from 'next/image';
import Total from 'public/total.svg';
import Bike from 'public/bike.svg';
import Company from 'public/company.svg';
import { useState } from 'react';
import clsx from 'clsx';

const MainPage1 = () => {
  const [category, setCategory] = useState(0);
  return (
    <div className="pt-[90px] w-full overflow-x-hidden">
      <div className="w-full h-[200px] bg-[#F3F8F7] relative">
        <span className="absolute left-[150px] bottom-[20px] text-gradient text-[40px] font-bold">
          탄소배출권 얻기
        </span>
      </div>
      <div className="w-full bg-white h-[1000px] px-[150px]">
        <div className="mt-[40px] ml-[30px] flex gap-x-[31px]">
          <div className="flex flex-col justify-between items-center h-[73px] ">
            <div
              className={clsx(
                'rounded-[10px] bg-[#F2F4F6] cursor-pointer',
                category == 0
                  ? 'border-[#07D1D3] border-[2px] py-[8px] px-[26px]'
                  : ' py-[9px] px-[28px]'
              )}
              onClick={() => setCategory(0)}
            >
              <Total />
            </div>
            <span> 전체</span>
          </div>
          <div className="flex flex-col justify-between items-center h-[73px] ">
            <div
              className={clsx(
                'rounded-[10px] bg-[#F2F4F6] cursor-pointer',
                category == 1
                  ? 'border-[#07D1D3] border-[2px] py-[4px] px-[20px]'
                  : ' py-[6px] px-[22px]'
              )}
              onClick={() => setCategory(1)}
            >
              <Bike />
            </div>
            <span> 자전거</span>
          </div>
          <div className="flex flex-col justify-between items-center h-[73px] ">
            <div
              className={clsx(
                'rounded-[10px] bg-[#F2F4F6] cursor-pointer',
                category == 2
                  ? 'border-[#07D1D3] border-[2px] py-[8px] px-[24px]'
                  : ' py-[10px] px-[26px]'
              )}
              onClick={() => setCategory(2)}
            >
              <Company />
            </div>
            <span> 기업바운티</span>
          </div>
        </div>
        <div className="mt-[80px]">hi</div>
      </div>
    </div>
  );
};
export default MainPage1;

const list = [
  {
    title: '따릉이',
    limit: null,
    participants: 120,
  },
  {
    title: '삼성전자',
    limit: 1000,
    participants: 400,
  },
];
