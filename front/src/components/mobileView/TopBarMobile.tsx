import Image from "next/image";
import Link from "next/link";
import BancofLogoMobile from "public/logos/bancofLogoMobile.svg";
import Menu from "public/icons/menu.svg";
import { useState } from "react";
import clsx from "clsx";

const TopBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={clsx(
        "fixed w-full bg-white z-40 transition-[height] ease-in-out duration-[200ms] ",
        menuOpen ? "h-[100vh]" : "h-[44px]"
      )}
    >
      <div className="mx-auto px-[20px] py-[8px] flex justify-between items-center">
        <Link href="/">
          <BancofLogoMobile className="cursor-pointer" />
        </Link>
        <div
          className="w-[28px] h-[28px] flex flex-col justify-center items-center cursor-pointer gap-y-[4px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={clsx(
              "w-[20px] h-[2.5px] bg-black rounded-[10px] origin-top-left transition-all ease-out duration-[200ms]",
              menuOpen && "rotate-45 translate-x-[0.8px]"
            )}
          ></div>
          <div
            className={clsx(
              "w-[20px] h-[2.5px] bg-black rounded-[10px] origin-top-left transition-all ease-out duration-[200ms]",
              menuOpen && "opacity-0 translate-x-[100%]"
            )}
          ></div>
          <div
            className={clsx(
              "w-[20px] h-[2.5px] bg-black rounded-[10px] origin-top-left transition-all ease-out duration-[200ms]",
              menuOpen && "-rotate-45 -translate-x-[0.8px] translate-y-[1.2px]"
            )}
          ></div>
        </div>
      </div>
      <div
        className={clsx(
          "mt-[20px] mx-auto px-[20px] flex flex-col gap-y-[4px]",
          menuOpen ? "visible" : "invisible"
        )}
      >
        <Link
          href="https://calendly.com/julia-bancof/meeting-call?back=1&month=2023-05"
          target="_blank"
          rel="noreferrer"
        >
          <div className="py-[20px]">
            <span className="text-[18px] font-normal leading-[16px]">
              Book a demo
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default TopBarMobile;
