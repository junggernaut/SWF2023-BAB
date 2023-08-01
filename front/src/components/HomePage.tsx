import Image from 'next/image';
import Total from 'public/total.svg';
import Bike from 'public/bike.svg';
import Company from 'public/company.svg';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const HomePage = () => {
  const [category, setCategory] = useState(0);
  return (
    <div className="pt-[70px] w-full overflow-x-hidden">
      <div className="w-full h-[180px] bg-[#F3F8F7] relative">
        <span className="absolute left-[150px] bottom-[20px] text-gradient-down text-[40px] font-bold">
          탄소배출권 얻기
        </span>
      </div>
      <div className="w-full bg-white h-[500px] px-[150px]">
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
        <div className="mt-[40px]">
          <span className="text-[24px] font-bold text-[#1E1E1E]">
            {['전체', '자전거', '기업바운티'].at(category)}
          </span>
          <ListItem category={category} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;

interface ListItemProps {
  category: number;
}
const ListItem = (props: ListItemProps) => {
  const { category } = props;
  if (category == 0) {
    return (
      <div className="flex gap-x-[40px]">
        <Link href="/bike">
          <div className="mt-[30px] flex flex-col gap-y-[12px] cursor-pointer">
            <div className="h-[220px] w-[400px] border-[1px] rounded-[10px] border-[#ADB5BD]  bg-contain relative overflow-hidden">
              <Image
                src="/ttareungee.png"
                alt="tta"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex items-center gap-x-[9px]">
              <span className="text-gradient-right font-bold text-[22px]">
                상시오픈
              </span>
              <span className="text-[#ADB5BD] font-medium text-[14px] ">
                120명 참여중
              </span>
            </div>
            <span className="font-bold text-[22px] text-[#1E1E1E]">따릉이</span>
          </div>
        </Link>
        <div className="mt-[30px] flex flex-col gap-y-[12px]">
          <div className="h-[220px] w-[400px] border-[1px] rounded-[10px] border-[#ADB5BD]"></div>
          <div className="flex items-center gap-x-[9px]">
            <span className="text-gradient-right font-bold text-[22px]">
              40% 달성
            </span>
            <span className="text-[#ADB5BD] font-medium text-[14px] ">
              400/1000 명
            </span>
          </div>
          <span className="font-bold text-[22px] text-[#1E1E1E]">삼성전자</span>
        </div>
      </div>
    );
  } else if (category == 1) {
    return (
      <Link href="/bike">
        <div className="mt-[30px] flex flex-col gap-y-[12px] cursor-pointer">
          <div className="h-[220px] w-[400px] border-[1px] rounded-[10px] border-[#ADB5BD]  bg-contain relative overflow-hidden">
            <Image
              src="/ttareungee.png"
              alt="tta"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center gap-x-[9px]">
            <span className="text-gradient-right font-bold text-[22px]">
              상시오픈
            </span>
            <span className="text-[#ADB5BD] font-medium text-[14px] ">
              120명 참여중
            </span>
          </div>
          <span className="font-bold text-[22px] text-[#1E1E1E]">따릉이</span>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="mt-[30px] flex flex-col gap-y-[12px]">
        <div className="h-[220px] w-[400px] border-[1px] rounded-[10px] border-[#ADB5BD]"></div>
        <div className="flex items-center gap-x-[9px]">
          <span className="text-gradient-right font-bold text-[22px]">
            40% 달성
          </span>
          <span className="text-[#ADB5BD] font-medium text-[14px] ">
            400/1000 명
          </span>
        </div>
        <span className="font-bold text-[22px] text-[#1E1E1E]">삼성전자</span>
      </div>
    );
  }
};
