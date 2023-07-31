import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import useIsMobile from "@/hooks/useIsMobile";

const MainPage2Mobile = () => {
  const swiperRef = useRef<any>();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { windowSize } = useIsMobile();

  return (
    <div className="w-full bg-white py-[60px] flex flex-col gap-y-[20px] justify-between items-center">
      <span className="text-[28px] leading-[36px] xsm:text-[36px] xsm:leading-[46px] sm:text-[54px] sm:leading-[69px] text-black font-bold text-center">
        No-code
        <br />
        Financial Tool for
      </span>

      {windowSize > 550 ? (
        <div className="flex gap-x-[8px]">
          <div
            className={clsx(
              "font-bold text-[16px] leading-[22px] px-[32px] py-[14px] rounded-[40px] cursor-pointer",
              carouselIndex == 0
                ? " text-white bg-[#387CFF]"
                : " text-black bg-[#F5F3EF]"
            )}
            onClick={() => {
              if (carouselIndex % 3 == 1) {
                swiperRef.current?.slidePrev();
              } else if (carouselIndex % 3 == 2) {
                swiperRef.current?.slideNext();
              }
            }}
          >
            NFT Communities
          </div>
          <div
            className={clsx(
              "font-bold text-[16px] leading-[22px] px-[32px] py-[14px] rounded-[40px] cursor-pointer",
              carouselIndex == 1
                ? " text-white bg-[#81CE45]"
                : " text-black bg-[#F5F3EF]"
            )}
            onClick={() => {
              if (carouselIndex % 3 == 0) {
                swiperRef.current?.slideNext();
              } else if (carouselIndex % 3 == 2) {
                swiperRef.current?.slidePrev();
              }
            }}
          >
            Collecting DAOs
          </div>
          <div
            className={clsx(
              "font-bold text-[16px] leading-[22px] px-[32px] py-[14px] rounded-[40px] cursor-pointer",
              carouselIndex == 2
                ? " text-white bg-[#E16CD6]"
                : " text-black bg-[#F5F3EF]"
            )}
            onClick={() => {
              if (carouselIndex % 3 == 0) {
                swiperRef.current?.slidePrev();
              } else if (carouselIndex % 3 == 1) {
                swiperRef.current?.slideNext();
              }
            }}
          >
            DeFi DAOs
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            "font-bold text-[14px] leading-[16px] px-[20px] py-[13px] rounded-[30px] text-white",
            carouselIndex == 0 && "bg-[#387CFF]",
            carouselIndex == 1 && "bg-[#81CE45]",
            carouselIndex == 2 && "bg-[#E16CD6]"
          )}
          onClick={() => {
            if (carouselIndex % 3 == 1) {
              swiperRef.current?.slidePrev();
            } else if (carouselIndex % 3 == 2) {
              swiperRef.current?.slideNext();
            }
          }}
        >
          {
            ["NFT Communities", "Collecting DAOs", "DeFi DAOs"][
              carouselIndex % 3
            ]
          }
        </div>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        className="w-full relative"
        onSlideChange={(s) => {
          setCarouselIndex(s.realIndex % 3);
        }}
      >
        <SwiperSlide>
          <div className="px-[20px]">
            <div className="relative h-[515px] sm:h-[460px] bg-[#387CFF] rounded-[20px] p-[20px] flex flex-col gap-y-[20px] items-center justify-around">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/community.png"
                  alt="community"
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <span className="text-white font-bold text-[24px] leading-[34px]">
                  Offer better loan terms to active holders as an incentive
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Allow members to take out loans under community-set parameters
                  to provide exclusive benefits and create additional revenue
                  stream.
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Alternative liquidity to selling NFTs can also help maintain
                  the floor price.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-[20px]">
            <div className="relative h-[515px] sm:h-[460px] bg-[#81CE45] rounded-[20px] p-[20px] flex flex-col gap-y-[20px] items-center justify-around">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/collectingDao.png"
                  alt="collectingDao"
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <span className="text-white font-bold text-[24px] leading-[34px]">
                  Acquire NFT collections at a discount
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Flexible loan terms, including higher LTVs, are made possible
                  by discounted NFT acquisition during defaults, creating an
                  attractive loan service for borrowers and a win-win for both
                  parties
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-[20px]">
            <div className="relative h-[515px] sm:h-[460px] bg-[#E16CD6] rounded-[20px] p-[20px] flex flex-col gap-y-[20px] items-center justify-around">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/defiDao.png"
                  alt="defiDao"
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <span className="text-white font-bold text-[24px] leading-[34px]">
                  New investment opportunities with NFTs
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Establish loan strategies that align with the DAOs needs and
                  cater to risk-to-return profile.
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px] ">
                  Increase profitability by capitalizing on arbitrage
                  opportunities by selling NFTs obtained at a discount.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="px-[20px]">
            <div className="relative h-[515px] sm:h-[460px] bg-[#387CFF] rounded-[20px] p-[20px] flex flex-col gap-y-[20px] items-center justify-around">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/community.png"
                  alt="community"
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <span className="text-white font-bold text-[24px] leading-[34px]">
                  Offer better loan terms to active holders as an incentive
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Allow members to take out loans under community-set parameters
                  to provide exclusive benefits and create additional revenue
                  stream.
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Alternative liquidity to selling NFTs can also help maintain
                  the floor price.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-[20px]">
            <div className="relative h-[515px] sm:h-[460px] bg-[#81CE45] rounded-[20px] p-[20px] flex flex-col gap-y-[20px] items-center justify-around">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/collectingDao.png"
                  alt="collectingDao"
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <span className="text-white font-bold text-[24px] leading-[34px]">
                  Acquire NFT collections at a discount
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Flexible loan terms, including higher LTVs, are made possible
                  by discounted NFT acquisition during defaults, creating an
                  attractive loan service for borrowers and a win-win for both
                  parties
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-[20px]">
            <div className="relative h-[515px] sm:h-[460px] bg-[#E16CD6] rounded-[20px] p-[20px] flex flex-col gap-y-[20px] items-center justify-around">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/defiDao.png"
                  alt="defiDao"
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <span className="text-white font-bold text-[24px] leading-[34px]">
                  New investment opportunities with NFTs
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px]">
                  Establish loan strategies that align with the DAOs needs and
                  cater to risk-to-return profile.
                </span>
                <span className="text-white font-normal text-[14px] leading-[20px] ">
                  Increase profitability by capitalizing on arbitrage
                  opportunities by selling NFTs obtained at a discount.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-x-[8px]">
        <div
          className={clsx(
            "w-[10px] h-[10px] rounded-[50%] bg-[#767676]",
            carouselIndex != 0 && " bg-opacity-10"
          )}
        />
        <div
          className={clsx(
            "w-[10px] h-[10px] rounded-[50%] bg-[#767676]",
            carouselIndex != 1 && " bg-opacity-10"
          )}
        />
        <div
          className={clsx(
            "w-[10px] h-[10px] rounded-[50%] bg-[#767676]",
            carouselIndex != 2 && " bg-opacity-10"
          )}
        />
      </div>
    </div>
  );
};

export default MainPage2Mobile;
