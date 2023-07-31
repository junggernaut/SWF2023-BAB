import Image from "next/image";
import Circle2Mobile from "public/images/circle2Mobile.svg";
import SetParam from "public/icons/setParam.svg";
import NoNeedKnowledge from "public/icons/noNeedKnowledge.svg";
import Customize from "public/icons/customize.svg";

const MainPage3Mobile = () => {
  return (
    <div className="bg-[#383F4D] py-[60px] px-[15px] xsm:px-[20px] flex flex-col items-center gap-y-[80px] overflow-hidden">
      <div className="relative text-center">
        <span className="text-white font-normal text-[36px] leading-[46px] sm:text-[54px] sm:leading-[69px]">
          How to
          <br />
          create a pool?
        </span>
        <Circle2Mobile className="absolute top-[40px] -left-[17px] scale-[0.95] xsm:scale-[1] sm:scale-[1.5] sm:top-[75px] sm:left-[40px]" />
      </div>
      <div className="flex flex-col w-full">
        <video
          playsInline
          autoPlay
          loop
          muted
          src="/videos/step1.mp4"
          className="w-full max-w-[600px] object-scale-down drop-shadow-[0px_24px_65px_rgba(20,20,43,0.16)]"
        />
        <div className="mt-[16px] flex flex-col gap-y-[4px]">
          <SetParam />
          <span className="text-white font-bold text-[17px] xsm:text-[22px] xsm:leading-[28px] sm:text-[33px] sm:leading-[42px]">
            Set parameters with quick steps
          </span>
          <span className="text-white text-[12px] xsm:text-[14px] xsm:leading-[20px] sm:text-[21px] sm:leading-[30px]">
            No need for complicated lending knowledge, just pick your risk level
            and set all your terms
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <video
          playsInline
          autoPlay
          loop
          muted
          src="/videos/step2.mp4"
          className="w-full max-w-[600px] object-scale-down drop-shadow-[0px_24px_65px_rgba(20,20,43,0.16)]"
        />
        <div className="mt-[16px] flex flex-col gap-y-[4px]">
          <NoNeedKnowledge />
          <span className="text-white font-bold text-[17px] xsm:text-[22px] xsm:leading-[28px] sm:text-[33px] sm:leading-[42px]">
            You don&apos;t need to know finance at all
          </span>
          <span className="text-white text-[12px] xsm:text-[14px] xsm:leading-[20px] sm:text-[21px] sm:leading-[30px]">
            For each step, you&apos;ll find a description of all the terms you
            need for beginners
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <video
          playsInline
          autoPlay
          loop
          muted
          src="/videos/step3.mp4"
          className="w-full max-w-[600px] object-scale-down drop-shadow-[0px_24px_65px_rgba(20,20,43,0.16)]"
        />
        <div className="mt-[16px] flex flex-col gap-y-[4px]">
          <Customize />
          <span className="text-white font-bold text-[17px] xsm:text-[22px] xsm:leading-[28px] sm:text-[33px] sm:leading-[42px]">
            Customize your loan parameters
          </span>
          <span className="text-white text-[12px] xsm:text-[14px] xsm:leading-[20px] sm:text-[21px] sm:leading-[30px]">
            You can customize loan terms including LTV, APR, Loan Duration, and
            more.
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainPage3Mobile;
