import Image from "next/image";
import UnderLineMobile from "public/images/underlineMobile.svg";
import BorrowCheck from "public/icons/borrowCheck.svg";
import ManageLoan from "public/icons/manageLoan.svg";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import ArrowRight15 from "public/icons/arrowRight15.svg";
import useIsMobile from "@/hooks/useIsMobile";

const MainPage5Mobile = () => {
  const [video, setVideo] = useState(0);

  return (
    <>
      <div className="bg-[#383F4D] py-[60px] px-[15px] xsm:px-[20px] flex flex-col items-center gap-y-[20px] overflow-hidden">
        <span className="text-[36px] leading-[46px] sm:text-[54px] sm:leading-[69px] text-white font-medium text-center">
          Demo Video for
        </span>
        <div className="flex gap-x-[8px] justify-center">
          <div
            className={clsx(
              "font-bold text-[14px] sm:text-[16px] leading-[16px] sm:leading-[22px] px-[20px] sm:px-[32px] py-[13px] sm:py-[14px] rounded-[30px] sm:rounded-[40px] cursor-pointer",
              video == 0
                ? " text-white bg-[#387CFF]"
                : " text-black bg-[#F5F3EF]"
            )}
            onClick={() => {
              setVideo(0);
            }}
          >
            Pool Creator
          </div>
          <div
            className={clsx(
              "font-bold text-[14px] sm:text-[16px] leading-[16px] sm:leading-[22px] px-[20px] sm:px-[32px] py-[13px] sm:py-[14px] rounded-[30px] sm:rounded-[40px] cursor-pointer",
              video == 1
                ? " text-white bg-[#387CFF]"
                : " text-black bg-[#F5F3EF]"
            )}
            onClick={() => {
              setVideo(1);
            }}
          >
            Borrower
          </div>
        </div>
        <div className="w-full h-full px-[5px]">
          {video == 0 ? (
            <div
              style={{
                position: "relative",
                paddingBottom: "calc(57.2108843537415% + 41px)",
                height: 0,
              }}
              className="drop-shadow-[0px_24px_65px_rgba(20,20,43,0.16)]"
            >
              <iframe
                src="https://demo.arcade.software/2f3Uhl4GvirGIKOBE9oV?embed"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  colorScheme: "light",
                }}
                title="Bancof - My Service"
              ></iframe>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                paddingBottom: "calc(57.2108843537415% + 41px)",
                height: 0,
              }}
            >
              <iframe
                src="https://demo.arcade.software/gchf0V4gmtL3dJSLfWAl?embed"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  colorScheme: "light",
                }}
                title="Bancof - My Service"
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div className="bg-black py-[60px] flex flex-col items-center gap-y-[40px] overflow-hidden">
        <span className="text-white font-medium text-[36px] leading-[46px] sm:text-[54px] sm:leading-[69px]">
          Partners
        </span>
        <div className="flex gap-x-[20px] items-center">
          <Image
            src="/logos/partners/nineChronicles.webp"
            alt="Nine Chronicles"
            width={248}
            height={60}
          />
          <div className="hidden sm:block">
            <Link
              href="https://dcc-interest-free-loan-pool.bancof.io/public-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer bg-[#33766D] rounded-[40px] flex justify-center items-center px-[25px] py-[10px] gap-x-[5px]">
                <span className=" text-white font-normal text-[18px] leading-[25px] whitespace-nowrap">
                  DCC Interest Free Loan Pool
                </span>
                <ArrowRight15 />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px] pt-[20px]">
          <div className="w-[10px] h-[10px] rounded-[50%] bg-[#383F4D]" />
          <div className="w-[10px] h-[10px] rounded-[50%] bg-[#383F4D]" />
          <div className="w-[10px] h-[10px] rounded-[50%] bg-[#383F4D]" />
        </div>
      </div>
    </>
  );
};
export default MainPage5Mobile;
