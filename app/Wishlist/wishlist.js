import { useCallback } from "react";
import { useRouter } from "next/router";

const Wishlist = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/e-commerce-home-page");
  }, [router]);

  return (
    <footer className="w-full relative bg-bg overflow-hidden flex flex-col items-center justify-start gap-[80px] tracking-[normal] mq450:gap-[20px] mq750:gap-[40px]">
      <header className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-sm text-text font-title-16px-regular mq750:gap-[20px]">
        <div className="self-stretch bg-button overflow-hidden flex flex-row items-center justify-end py-3 px-[136px] box-border max-w-full lg:pl-[68px] lg:pr-[68px] lg:box-border mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
          <div className="w-[859px] flex flex-row items-start justify-between gap-[20px] max-w-full">
            <div className="flex flex-row items-center justify-start gap-[8px] max-w-full">
              <div className="relative leading-[21px] whitespace-nowrap mq1050:hidden">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </div>
              <div className="relative [text-decoration:underline] leading-[24px] font-semibold text-center">
                ShopNow
              </div>
            </div>
            <select className="bg-[transparent] [border:none] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] font-title-16px-regular text-sm text-text" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full text-5xl text-button font-heading-24px-bold">
          <div className="w-[1210px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[130px] max-w-full lg:gap-[65px] mq450:gap-[16px] mq750:gap-[32px]">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
              <div className="flex flex-row items-center justify-center">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit whitespace-nowrap">
                  Exclusive
                </h3>
              </div>
              <div className="flex flex-row items-start justify-start gap-[48px] max-w-full text-center text-base font-title-16px-regular mq450:hidden mq450:gap-[24px]">
                <div className="flex flex-row items-center justify-center">
                  <div
                    className="relative leading-[24px] cursor-pointer"
                    onClick={onHomeTextClick}
                  >
                    Home
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[24px]">Contact</div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[24px]">About</div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                  <div className="relative text-base leading-[24px] font-title-16px-regular text-button text-center whitespace-nowrap">
                    Sign Up
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[395px] flex flex-row items-center justify-start gap-[24px] max-w-full text-center text-xs text-text font-title-16px-regular">
              <div className="flex-1 rounded bg-secondary flex flex-col items-center justify-center py-[7px] pr-3 pl-5">
                <div className="self-stretch flex flex-row items-center justify-center gap-[34px] mq750:hidden">
                  <input
                    className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-title-16px-regular text-xs bg-[transparent] h-[18px] flex-1 relative leading-[18px] text-gray-700 text-left inline-block min-w-[92px] whitespace-nowrap"
                    placeholder="What are you looking for?"
                    type="text"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/component-2.svg"
                  />
                </div>
              </div>
              <div className="w-32 flex flex-row items-center justify-center gap-[16px]">
                <div className="h-8 flex-1 relative overflow-hidden">
                  <img
                    className="absolute h-[56.25%] w-[62.5%] top-[21.88%] right-[18.75%] bottom-[21.88%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/menu-item-frame.svg"
                  />
                  <div className="absolute h-[53.13%] w-6/12 top-[0%] right-[0%] bottom-[46.88%] left-[50%] z-[1]">
                    <div className="absolute h-[94.12%] w-full top-[5.88%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondary-2" />
                    <div className="absolute h-full w-[37.5%] top-[0%] left-[25%] leading-[18px] inline-block z-[1]">
                      4
                    </div>
                  </div>
                </div>
                <img
                  className="h-8 w-8 relative min-h-[32px]"
                  loading="eager"
                  alt=""
                  src="/cart1-with-buy.svg"
                />
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                  loading="eager"
                  alt=""
                  src="/user.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-3.svg"
          />
        </div>
      </header>
      <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[60px] max-w-full text-center text-xl text-button font-title-16px-regular mq750:gap-[30px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="relative leading-[26px] mq450:text-base mq450:leading-[21px]">
            Wishlist (4)
          </div>
          <button className="cursor-pointer p-4 bg-[transparent] w-[223px] rounded box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray-700 hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-button text-left">
              Move All To Bag
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-left text-xs text-bg">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-3 px-[9px] pb-[9px] relative gap-[171px] mq450:gap-[85px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-[3px] gap-[20px]">
                <button className="cursor-pointer [border:none] p-1 bg-secondary-2 w-[55px] rounded flex flex-row items-center justify-center box-border hover:bg-salmon">
                  <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                    -35%
                  </div>
                </button>
                <div className="flex flex-col items-start justify-start relative gap-[8px]">
                  <img
                    className="w-[34px] h-[34px] relative"
                    loading="eager"
                    alt=""
                    src="/fill-eye1.svg"
                  />
                  <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-149px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                    <img
                      className="absolute w-[calc(100%_-_12px)] top-[calc(50%_-_64px)] right-[6px] left-[6px] max-w-full overflow-hidden h-[129px] object-cover"
                      loading="eager"
                      alt=""
                      src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/cart1.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                Gucci duffle bag
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $960
                </div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-700 whitespace-nowrap">
                  $1160
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-[18px] px-[9px] pb-[9px] relative gap-[19px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="my-0 mx-[!important] absolute top-[12px] right-[12px] flex flex-col items-start justify-start">
                <img
                  className="w-[34px] h-[34px] relative"
                  alt=""
                  src="/fill-eye1.svg"
                />
              </div>
              <div className="w-[230px] h-[180px] relative overflow-hidden shrink-0 z-[1]">
                <img
                  className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_95px)] w-[191px] h-[95px] object-cover"
                  loading="eager"
                  alt=""
                  src="/gammaxxl240argb1500x500-1@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                RGB liquid CPU Cooler
              </div>
              <div className="flex flex-row items-center justify-center text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $1960
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-[22px] px-[9px] pb-[9px] relative gap-[15px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="w-[230px] flex flex-row items-start justify-start py-0 px-5 box-border relative">
                <div className="my-0 mx-[!important] absolute top-[-10px] right-[-8px] flex flex-col items-start justify-start">
                  <img
                    className="w-[34px] h-[34px] relative"
                    alt=""
                    src="/fill-eye1.svg"
                  />
                </div>
                <div className="h-[180px] flex-1 relative overflow-hidden z-[1]">
                  <img
                    className="absolute w-[calc(100%_-_12px)] top-[15px] right-[6px] left-[6px] max-w-full overflow-hidden h-[150px] object-cover"
                    loading="eager"
                    alt=""
                    src="/gp11-prd3-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                GP11 Shooter USB Gamepad
              </div>
              <div className="flex flex-row items-center justify-center text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $550
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-[22px] px-[9px] pb-[9px] relative gap-[15px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="w-[230px] flex flex-row items-start justify-start py-0 px-5 box-border relative">
                <div className="my-0 mx-[!important] absolute top-[-10px] right-[-8px] flex flex-col items-start justify-start">
                  <img
                    className="w-[34px] h-[34px] relative"
                    alt=""
                    src="/fill-eye1.svg"
                  />
                </div>
                <img
                  className="h-[180px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  alt=""
                  src="/frame-608@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                Quilted Satin Jacket
              </div>
              <div className="flex flex-row items-center justify-center text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $750
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[60px] min-h-[526px] max-w-full text-center text-xl text-button font-title-16px-regular mq750:gap-[30px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="h-10 w-5 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
            </div>
            <div className="relative leading-[26px] mq450:text-base mq450:leading-[21px]">
              Just For You
            </div>
          </div>
          <button className="cursor-pointer py-4 pr-[43px] pl-[47px] bg-[transparent] rounded flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray-700 hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-button text-left">
              See All
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-left text-xs text-bg">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-3 px-2 pb-2 relative gap-[172px] mq450:gap-[86px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-1 gap-[20px]">
                <button className="cursor-pointer [border:none] p-1 bg-secondary-2 w-[55px] rounded flex flex-row items-center justify-center box-border hover:bg-salmon">
                  <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                    -35%
                  </div>
                </button>
                <div className="flex flex-col items-start justify-start relative gap-[8px]">
                  <img
                    className="w-[34px] h-[34px] relative"
                    alt=""
                    src="/fill-eye.svg"
                  />
                  <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-156px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                    <img
                      className="absolute h-[calc(100%_-_14px)] top-[7px] bottom-[7px] left-[16px] max-h-full w-[158px] object-cover"
                      loading="eager"
                      alt=""
                      src="/ideapadgaming3i01500x500-11@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1-4.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                ASUS FHD Gaming Laptop
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $960
                </div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-700 whitespace-nowrap">
                  $1160
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold">
                  (65)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-[22px] px-2 pb-2 relative gap-[16px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="w-[230px] flex flex-row items-start justify-start py-0 px-5 box-border relative">
                <div className="my-0 mx-[!important] absolute top-[-10px] right-[-8px] flex flex-col items-start justify-start">
                  <img
                    className="w-[34px] h-[34px] relative"
                    alt=""
                    src="/fill-eye-5.svg"
                  />
                </div>
                <div className="h-[180px] flex-1 relative overflow-hidden z-[1]">
                  <img
                    className="absolute w-[calc(100%_-_20px)] top-[26px] right-[10px] left-[10px] max-w-full overflow-hidden h-[129px] object-cover"
                    loading="eager"
                    alt=""
                    src="/g27cq4500x500-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1-4.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                IPS LCD Gaming Monitor
              </div>
              <div className="flex flex-row items-start justify-start text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $1160
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold">
                  (65)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-3 px-2 pb-2 relative gap-[172px] mq450:gap-[86px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-1 gap-[20px]">
                <button className="cursor-pointer [border:none] p-1 bg-button1 w-[51px] rounded flex flex-row items-center justify-center box-border hover:bg-limegreen">
                  <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                    NEW
                  </div>
                </button>
                <div className="flex flex-col items-start justify-start relative gap-[8px]">
                  <img
                    className="w-[34px] h-[34px] relative"
                    alt=""
                    src="/fill-eye-5.svg"
                  />
                  <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-156px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                    <img
                      className="absolute w-[calc(100%_-_18px)] top-[calc(50%_-_76px)] right-[9px] left-[9px] max-w-full overflow-hidden h-[152px] object-cover"
                      loading="eager"
                      alt=""
                      src="/g922500x500-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1-4.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                HAVIT HV-G92 Gamepad
              </div>
              <div className="flex flex-row items-start justify-start text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $560
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold">
                  (65)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-[22px] px-2 pb-2 relative gap-[16px]">
              <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
              <div className="my-0 mx-[!important] absolute top-[12px] right-[12px] flex flex-col items-start justify-start">
                <img
                  className="w-[34px] h-[34px] relative"
                  alt=""
                  src="/fill-eye-5.svg"
                />
              </div>
              <div className="w-[230px] h-[180px] relative overflow-hidden shrink-0 z-[1]">
                <img
                  className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_96px)] w-[191px] h-[101px] object-cover"
                  loading="eager"
                  alt=""
                  src="/ak90001500x500-1@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/cart1-4.svg"
                  />
                  <div className="relative leading-[18px]">Add To Cart</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
              <div className="relative leading-[24px] font-medium">
                AK-900 Wired Keyboard
              </div>
              <div className="flex flex-row items-start justify-start text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $200
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/app-store-icon.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold">
                  (65)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-button overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-6 box-border gap-[60px] max-w-full text-left text-xl text-text font-title-16px-regular mq450:pt-[52px] mq450:pb-5 mq450:box-border mq750:gap-[30px]">
        <div className="w-[1210px] flex flex-row items-start justify-between py-0 pr-[23px] pl-5 box-border gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="w-[222px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border text-5xl font-heading-24px-bold">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-row items-center justify-center">
                    <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit">
                      Exclusive
                    </h3>
                  </div>
                  <div className="relative text-xl leading-[28px] font-medium font-title-16px-regular">
                    Subscribe
                  </div>
                </div>
                <div className="relative text-base leading-[24px] font-title-16px-regular">
                  Get 10% off your first order
                </div>
              </div>
              <div className="self-stretch rounded flex flex-row items-start justify-between py-3 pr-[17px] pl-3.5 gap-[20px] border-[1.5px] border-solid border-text">
                <input
                  className="w-[130px] [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-gray-800 text-left inline-block"
                  placeholder="Enter your email"
                  type="text"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/iconsend.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[180px] flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              Support
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="self-stretch relative leading-[24px] whitespace-pre-wrap">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </div>
              <div className="relative leading-[24px] whitespace-nowrap">
                exclusive@gmail.com
              </div>
              <div className="relative leading-[24px] whitespace-nowrap">
                +88015-88888-9999
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              Account
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="relative leading-[24px]">My Account</div>
              <div className="relative leading-[24px]">Login / Register</div>
              <div className="relative leading-[24px]">Cart</div>
              <div className="relative leading-[24px]">Wishlist</div>
              <div className="relative leading-[24px]">Shop</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              Quick Link
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="relative leading-[24px]">Privacy Policy</div>
              <div className="relative leading-[24px]">Terms Of Use</div>
              <div className="relative leading-[24px]">FAQ</div>
              <div className="relative leading-[24px]">Contact</div>
            </div>
          </div>
          <div className="w-[198px] flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                Download App
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-gray-900">
                <div className="relative leading-[18px] font-medium">
                  Save $3 with App New User Only
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="h-20 w-20 relative overflow-hidden shrink-0 object-cover"
                    loading="eager"
                    alt=""
                    src="/qr-code@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <img
                      className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/googleplay5.svg"
                    />
                    <img
                      className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="eager"
                      alt=""
                      src="/appstore@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="eager"
                alt=""
                src="/iconfacebook.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="eager"
                alt=""
                src="/icontwitter.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="eager"
                alt=""
                src="/iconinstagram.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="eager"
                alt=""
                src="/iconlinkedin.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-10 flex flex-col items-center justify-start gap-[16px] opacity-[0.4] max-w-full text-base text-bg">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/underline-5.svg"
          />
          <div className="flex flex-row items-center justify-start py-0 px-5 box-border opacity-[0.6] max-w-full">
            <div className="flex flex-row items-center justify-start gap-[6px] max-w-full">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/iconcopyright1.svg"
              />
              <div className="relative leading-[24px]">
                Copyright Rimel 2022. All right reserved
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Wishlist;
