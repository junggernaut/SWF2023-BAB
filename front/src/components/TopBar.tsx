import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="fixed w-full bg-white z-40">
      <div className="max-w-[1440px] mx-auto px-[118px] py-[20px] flex justify-between items-center">
        <Link href="/"></Link>
        <div className="flex items-center gap-x-[24px]">
          <Link
            href="https://calendly.com/julia-bancof/meeting-call?back=1&month=2023-05"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer py-[4px] font-normal text-[16px] text-black leading-[28px]">
              Book a demo
            </div>
          </Link>
          <Link href="https://app.bancof.io" target="_blank" rel="noreferrer">
            <div className="cursor-pointer bg-blue rounded-[30px] pt-[7px] pb-[9px] px-[20px]">
              <span className="font-normal text-white text-[14px] ">
                Launch App
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
