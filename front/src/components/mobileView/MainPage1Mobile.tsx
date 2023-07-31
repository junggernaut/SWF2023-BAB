import Image from "next/image";
import ArrowRight15 from "public/icons/arrowRight15.svg";
import Arrow1 from "public/images/arrow1.svg";
import TryCursor from "public/icons/tryCursor.svg";
import Arrow2 from "public/images/arrow2.svg";
import Arrow2Blue from "public/images/arrow2Blue.svg";
import Circle from "public/images/circle1.svg";
import ImageSearch from "public/icons/imageSearch.svg";
import DoneAll from "public/icons/doneAll.svg";
import SelectMode from "public/icons/selectMode.svg";
import SelectModeGray from "public/icons/selectModeGray.svg";
import SelectColor from "public/icons/selectColor.svg";
import SelectColorGray from "public/icons/selectColorGray.svg";
import ImageBlank21 from "public/icons/imageBlank21.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useCollectionInfos } from "@/hooks/useTokenInfos";
import Link from "next/link";

const nftList = [
  {
    name: "Chromie Squiggle",
    imagesource: "https://chromie-squiggles.com/imgs/ab-logo-bg.png",
    collectionId: "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a:0:999999",
  },
  {
    name: "Bored Ape Yacht Club",
    imagesource:
      "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format",
    collectionId: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  },
  {
    name: "Autoglyphs",
    imagesource:
      "https://i.seadn.io/gae/BX7cWHwWFzo6FVh-Ql_qzFbXtADQgLLlpLOl3l9tS6hUPlgtGHgHn_E1FxiHXmzNlvig00ZEAk9uZU-tMPT2Fg?w=500&auto=format",
    collectionId: "0xd4e4078ca3495de5b1d4db434bebc5a986197782",
  },
];
const loanTermOptionList = [
  {
    maxLtv: 20,
    apr: 10,
    maxDuration: 30,
  },
  {
    maxLtv: 32,
    apr: 27,
    maxDuration: 60,
  },
  {
    maxLtv: 50,
    apr: 40,
    maxDuration: 120,
  },
];

const calculateRepayAmount = (
  loanAmount: number,
  loanDuration: number,
  apr: number
) => {
  return loanAmount + loanAmount * (apr / 100) * (loanDuration / 365);
};
const calculateRepayDate = (loanDuration: number) => {
  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  const repayDate = new Date(
    today.getTime() + loanDuration * 24 * 60 * 60 * 1000
  );
  return `${repayDate.getDate()} ${
    monthNames[repayDate.getMonth()]
  }, ${repayDate.getFullYear()}`;
};

const MainPage1Mobile = () => {
  const [nftCollection, setNftCollection] = useState<number | null>(null);
  const [loanTermOption, setLoanTermOption] = useState<number | null>(null);

  const [appearanceMode, setAppearanceMode] = useState<number | null>(null);
  const [primaryColor, setPrimaryColor] = useState<number | null>(null);
  const [secondaryColor, setSecondaryColor] = useState<number | null>(null);

  const { data, isLoading, isFetching } = useCollectionInfos(
    nftList[nftCollection as number]?.collectionId,
    {
      staleTime: 3000,
      enabled: nftCollection != null,
    }
  );

  return (
    <div className="pt-[104px] pb-[60px] px-[20px] w-full bg-[#F1F4FC] overflow-x-hidden flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="relative border-[2px] border-blue px-[12px] py-[2px]">
          <div className="absolute w-[10px] h-[10px] sm:w-[16px] sm:h-[16px] border-[2px] bg-white border-blue top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[10px] h-[10px] sm:w-[16px] sm:h-[16px] border-[2px] bg-white border-blue top-0 right-0 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[10px] h-[10px] sm:w-[16px] sm:h-[16px] border-[2px] bg-white border-blue bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
          <div className="absolute w-[10px] h-[10px] sm:w-[16px] sm:h-[16px] border-[2px] bg-white border-blue bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
          <span className="bg-gradient-to-r from-[#548EFF] to-[#5CE2FF] bg-clip-text text-[28px] leading-[36px] xsm:text-[36px] xsm:leading-[46px] sm:text-[54px] sm:leading-[69px] text-white text-opacity-0 font-bold">
            Tailor made
          </span>
        </div>
        <span className="mt-[6px] font-bold text-[28px] xsm:text-[36px] xsm:leading-[46px] sm:text-[54px] sm:leading-[69px] text-black">
          NFT Loan Service
        </span>
        <span className="mt-[4px] font-normal text-[13px] xsm:text-[16px] leading-[28px] sm:text-[24px] sm:leading-[42px] text-black text-center">
          A no-code loan pool generator tool for
          <br />
          Web3 native communities
        </span>
        <div className="my-[20px] flex flex-col gap-y-[8px] w-[90%]">
          <Link
            href="https://i8r1lnzx529.typeform.com/to/yD5EO1RC"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer  bg-blue rounded-[40px] flex justify-center items-center py-[13px] gap-x-[8px]">
              <span className=" text-white font-normal text-[14px] leading-[16px] sm:text-[21px] sm:leading-[24px]">
                Launch Your Lending Service
              </span>
              <ArrowRight15 />
            </div>
          </Link>
          <Link
            href="https://calendly.com/julia-bancof/meeting-call?back=1&month=2023-05"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer text-blue bg-white text-[14px] leading-[16px] sm:text-[21px] sm:leading-[24px] font-normal py-[12px] rounded-[40px] border-[1px] border-blue text-center">
              Book a demo
            </div>
          </Link>
        </div>
        <video
          playsInline
          autoPlay
          loop
          muted
          src="/videos/mobile_main.mp4"
          className="object-scale-down "
        />
      </div>
    </div>
  );
};
export default MainPage1Mobile;
