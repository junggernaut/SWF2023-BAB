import Image from "next/image";
import UnderLineMobile from "public/images/underlineMobile.svg";
import BorrowCheck from "public/icons/borrowCheck.svg";
import ManageLoan from "public/icons/manageLoan.svg";
const MainPage4Mobile = () => {
  return (
    <div className="bg-blue py-[60px] px-[15px] xsm:px-[20px] flex flex-col items-center gap-y-[80px] overflow-hidden">
      <div className="relative text-center">
        <span className="text-white font-normal text-[36px] leading-[46px] sm:text-[54px] sm:leading-[69px]">
          How to
          <br />
          borrow?
        </span>
        <UnderLineMobile className="absolute top-[90px] -left-[12px] sm:scale-[1.5] sm:top-[135px] sm:left-[20px]" />
      </div>
      <div className="flex flex-col w-full">
        <img
          alt="borrow1"
          src="/images/borrow1.png"
          className="w-full max-w-[600px] object-scale-down drop-shadow-[0px_8px_28px_rgba(20,20,43,0.1)]"
        />

        <div className="mt-[16px] flex flex-col gap-y-[4px]">
          <BorrowCheck />
          <span className="text-white font-bold text-[17px] xsm:text-[22px] xsm:leading-[28px] sm:text-[33px] sm:leading-[42px]">
            Borrow instantly in 3 easy steps
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <img
          alt="borrow2"
          src="/images/borrow2.png"
          className="w-full max-w-[600px] object-scale-down drop-shadow-[0px_8px_28px_rgba(20,20,43,0.1)]"
        />

        <div className="mt-[16px] flex flex-col gap-y-[4px]">
          <ManageLoan />
          <span className="text-white font-bold text-[17px] xsm:text-[22px] xsm:leading-[28px] sm:text-[33px] sm:leading-[42px]">
            Manage your loans with the Borrower Dashboard
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainPage4Mobile;
