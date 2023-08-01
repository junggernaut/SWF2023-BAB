import TopBar from '@/components/TopBar';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import BikeIcon from 'public/bikeSmall.svg';
import Link from 'next/link';
import GrtLogo from 'public/grtl.svg';
import UsdcLogo from 'public/usdc.svg';
import { useContractRead } from 'wagmi';
import { grSwapPoolAbi } from '@/abis/grSwapPool';
import { BigNumber, ethers } from 'ethers';
import GRTShow from 'public/grtTokenShow.svg';
import USDCShow from 'public/usdcTokenShow.svg';
import ArrowDown from 'public/arrowDown.svg';
import { debounce } from 'lodash';
import { useSwap } from '@/hooks/useSwap';

export default function Swap() {
  const grPoolAddress = process.env.NEXT_PUBLIC_POOL_ADDRESS as `0x${string}`;
  const usdcAddress = process.env.NEXT_PUBLIC_USDC_ADDRESS as `0x${string}`;

  const [grt, setGrt] = useState('0');
  const [usdc, setUsdc] = useState('0');
  const [swapAmount, setSwapAmount] = useState('0');
  const [resultAmount, setResultAmount] = useState('0');

  const debouncedSwapAmount = debounce((text: string) => {
    setSwapAmount(text);
  }, 500);
  const onChangeSwapAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(0|[1-9][0-9]{0,})$/;
    if (e.target.value == '' || regex.test(e.target.value)) {
      debouncedSwapAmount(e.target.value), 1000;
    }
  };

  useContractRead({
    address: grPoolAddress,
    abi: grSwapPoolAbi,
    functionName: 'reserve0',
    args: [],
    onSuccess(data: BigNumber) {
      setGrt(ethers.utils.formatUnits(data, 0));
    },
  });

  useContractRead({
    address: grPoolAddress,
    abi: grSwapPoolAbi,
    functionName: 'reserve1',
    args: [],
    onSuccess(data: BigNumber) {
      setUsdc(ethers.utils.formatUnits(data, 6));
    },
  });

  useContractRead({
    address: grPoolAddress,
    abi: grSwapPoolAbi,
    functionName: 'swapView',
    args: [usdcAddress, ethers.utils.parseUnits(swapAmount, 6)],
    onSuccess(data: BigNumber) {
      setResultAmount(data.toString());
    },
  });

  const { swapLoading, swapError, swapSuccess, swapWrite, swapTx } =
    useSwap(swapAmount);

  return (
    <>
      <TopBar page={1} setPage={null} />
      <div className="h-[807px] bg-[#F3F8F7] pt-[130px] px-[210px] ">
        <span className="text-gradient-right text-[40px] font-bold">
          스왑하기
        </span>
        <div className="flex items-start mt-[20px] ">
          <div className="bg-white rounded-[16px] border-[3px] border-[#F0F0F0] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)] flex flex-col px-[50px] py-[50px] gap-y-[30px]">
            <span className="text-[32px] font-bold">Pool Composition</span>
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <UsdcLogo />
                  <span className="ml-[3px] font-medium text-[20px] text-[#161616]">
                    USDC
                  </span>
                </div>
                <span className="ml-[3px] font-medium text-[20px] text-[#161616]">
                  {usdc}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GrtLogo />
                  <span className="ml-[3px] font-medium text-[20px] text-[#161616]">
                    GRT
                  </span>
                </div>
                <span className="ml-[3px] font-medium text-[20px] text-[#161616]">
                  {grt}
                </span>
              </div>
              <div className="border-[0.8px] border-[#ADB5BD] w-full" />
              <div className="flex flex-col">
                <span className="text-[#ADB5BD] text-[16px] font-medium">
                  Price
                </span>
                <span className="text-[#161616] font-medium text-[13px]">
                  {`1 USDC = ${
                    usdc == '0'
                      ? '0'
                      : (parseFloat(grt) / parseFloat(usdc)).toFixed(5)
                  } GRT`}
                </span>
                <span className="text-[#161616] font-medium text-[13px]">
                  {`1 GRT = ${
                    grt == '0'
                      ? '0'
                      : (parseFloat(usdc) / parseFloat(grt)).toFixed(5)
                  } GRT`}
                </span>
              </div>
            </div>
          </div>
          <div className="ml-[50px] bg-white rounded-[16px] border-[3px] border-[#F0F0F0] shadow-[0_4px_16px_0px_rgba(17,17,17,0.04)] flex flex-col px-[50px] py-[50px] gap-y-[30px]">
            <span className="text-[32px] font-bold">Swap</span>
            <div className="flex flex-col gap-y-[10px] items-center">
              <div className="rounded-[10px] px-[30px] py-[30px] bg-[#F5F6F6] flex items-center">
                <input
                  type="text"
                  pattern="^(0|[1-9][0-9]{0,})$"
                  placeholder="0"
                  onChange={onChangeSwapAmount}
                  className="w-[340px] border-none bg-[#F5F6F6] outline-none text-[36px]"
                />
                <USDCShow />
              </div>
              <ArrowDown />
              <div className="rounded-[10px] px-[30px] py-[30px] bg-[#F5F6F6] self-stretch flex items-center justify-between">
                <span className="text-[36px]">
                  {resultAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                <GRTShow />
              </div>
            </div>
            <div
              className="ml-[8px] text-center cursor-pointer rounded-[8px] py-[15px] px-[20px] bg-gradient-to-r from-[#01E99D] to-[#07D1D3]"
              onClick={() => swapWrite?.()}
            >
              <span className="text-white text-[16px] font-bold">SWAP </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
