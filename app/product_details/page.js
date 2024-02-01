import { useCallback } from "react";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();

  const onHeaderContainerClick = useCallback(() => {
    router.push("/e-commerce-home-page");
  }, [router]);

  return (
    <footer className="w-full relative bg-bg overflow-hidden flex flex-col items-center justify-start gap-[40px] tracking-[normal] text-left text-sm text-text font-title-16px-regular mq750:gap-[20px]">
      <div className="self-stretch bg-button overflow-hidden flex flex-row items-center justify-end py-3 px-[136px] box-border max-w-full lg:pl-[68px] lg:pr-[68px] lg:box-border mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <div className="w-[859px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[8px] max-w-full mq750:flex-wrap">
            <div className="relative leading-[21px] inline-block max-w-full">
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
      <header className="self-stretch h-[94px] flex flex-col items-center justify-start gap-[16px] max-w-full text-left text-5xl text-button font-heading-24px-bold">
        <div className="w-[1210px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[130px] max-w-full lg:gap-[65px] mq450:gap-[16px] mq750:gap-[32px]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
            <div className="flex flex-row items-center justify-center">
              <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit whitespace-nowrap">
                Exclusive
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start gap-[48px] max-w-full text-center text-base font-title-16px-regular mq450:gap-[24px] mq1050:hidden">
              <div
                className="flex flex-row items-center justify-center cursor-pointer"
                onClick={onHeaderContainerClick}
              >
                <div className="relative leading-[24px]">Home</div>
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
          <div className="w-[395px] flex flex-row items-center justify-start gap-[24px] max-w-full">
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
            <div className="flex flex-row items-center justify-center gap-[16px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="eager"
                alt=""
                src="/wishlist.svg"
              />
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
      </header>
      <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[80px] min-h-[801px] max-w-full text-left text-sm text-button font-title-16px-regular mq450:gap-[20px] mq750:gap-[40px]">
        <div className="flex flex-row items-start justify-start relative gap-[30px] max-w-full mq450:flex-wrap">
          <div className="relative leading-[21px] text-gray-700">Account</div>
          <img
            className="h-[11.7px] w-1.5 absolute my-0 mx-[!important] top-[4.6px] left-[71px] object-contain"
            alt=""
            src="/line-131.svg"
          />
          <div className="relative leading-[21px] text-gray-700">Gaming</div>
          <img
            className="h-[11.7px] w-1.5 relative object-contain hidden z-[3]"
            alt=""
          />
          <div className="self-stretch w-[55px] relative leading-[21px] hidden opacity-[0.5] z-[4]">
            Product
          </div>
          <img
            className="h-[11.7px] w-1.5 relative object-contain hidden z-[5]"
            alt=""
          />
          <div className="self-stretch w-[68px] relative leading-[21px] hidden opacity-[0.5] z-[6]">
            View Cart
          </div>
          <img
            className="h-[11.7px] w-1.5 absolute my-0 mx-[!important] top-[4.6px] left-[158px] object-contain"
            alt=""
            src="/line-131.svg"
          />
          <div className="relative leading-[21px]">Havic HV G-92 Gamepad</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[70px] max-w-full text-5xl lg:gap-[35px] mq750:gap-[17px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start gap-[30px] min-w-[455px] max-w-full mq750:min-w-full">
            <div className="w-[170px] flex flex-col items-start justify-start gap-[16px] mq450:hidden">
              <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute h-[calc(100%_-_24px)] top-[12px] bottom-[12px] left-[24px] max-h-full w-[121px] object-contain"
                  loading="eager"
                  alt=""
                  src="/image-57@2x.png"
                />
              </div>
              <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[20px] left-[29px] w-28 h-[97px] object-contain"
                  loading="eager"
                  alt=""
                  src="/image-58@2x.png"
                />
              </div>
              <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[22px] left-[18px] w-[134px] h-[94px] object-cover"
                  loading="eager"
                  alt=""
                  src="/image-61@2x.png"
                />
              </div>
              <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[16px] left-[24px] w-[122px] h-[106px] object-cover"
                  loading="eager"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
            </div>
            <div className="h-[600px] flex-1 relative rounded bg-secondary overflow-hidden max-w-[calc(100%_-_200px)] mq450:max-w-full">
              <img
                className="absolute top-[154px] left-[27px] w-[446px] h-[315px] object-cover"
                loading="eager"
                alt=""
                src="/image-63@2x.png"
              />
            </div>
          </div>
          <div className="w-[400px] flex flex-col items-end justify-start gap-[40px] min-w-[400px] max-w-full mq450:gap-[20px] mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="flex flex-col items-start justify-start gap-[16px] font-heading-24px-bold">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-inherit mq450:text-lgi mq450:leading-[19px]">
                  Havic HV G-92 Gamepad
                </h3>
                <div className="w-[290px] flex flex-col items-start justify-start gap-[16px] text-sm text-gray-700 font-title-16px-regular">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <img
                        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                        loading="eager"
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
                        src="/vector-9.svg"
                      />
                    </div>
                    <div className="flex-[0.9223] flex flex-col items-start justify-start py-0 pr-2 pl-0">
                      <div className="relative leading-[21px]">
                        (150 Reviews)
                      </div>
                    </div>
                    <div className="h-[17px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
                      <div className="w-px h-[17px] relative box-border opacity-[0.5] border-r-[1px] border-solid border-button" />
                    </div>
                    <div className="relative leading-[21px] text-springgreen">
                      In Stock
                    </div>
                  </div>
                  <div className="relative text-5xl tracking-[0.03em] leading-[24px] font-heading-24px-bold text-button whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                    $192.00
                  </div>
                </div>
              </div>
              <div className="w-[373px] h-[63px] relative text-sm leading-[21px] inline-block max-w-full">{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="eager"
                alt=""
                src="/underline2.svg"
              />
              <div className="self-stretch flex flex-row items-end justify-start gap-[19px] max-w-full text-xl mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-end justify-start gap-[9px] min-w-[221px] max-w-full mq450:flex-wrap">
                  <div className="w-[159px] flex flex-col items-start justify-start gap-[24px] min-w-[159px] mq450:flex-1">
                    <div className="flex flex-row items-start justify-start gap-[24px] font-heading-24px-bold">
                      <div className="relative tracking-[0.03em] leading-[20px] mq450:text-base mq450:leading-[16px]">
                        Colours:
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-5 w-5 relative min-h-[20px]"
                          loading="eager"
                          alt=""
                          src="/group-1000005935.svg"
                        />
                        <div className="h-5 w-5 relative rounded-[50%] bg-hover-button" />
                      </div>
                    </div>
                    <div className="h-8 flex flex-row items-center justify-start gap-[16px] text-sm">
                      <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 text-xl font-heading-24px-bold">
                        <div className="relative tracking-[0.03em] leading-[20px] mq450:text-base mq450:leading-[16px]">
                          Size:
                        </div>
                      </div>
                      <div className="h-[34px] w-[34px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-700">
                        <div className="relative leading-[21px] font-medium">
                          XS
                        </div>
                      </div>
                      <div className="h-[34px] w-[34px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-700">
                        <div className="relative leading-[21px] font-medium">
                          S
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="h-11 w-10 relative rounded-tl rounded-tr-none rounded-br-none rounded-bl box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-6 overflow-hidden"
                          loading="eager"
                          alt=""
                          src="/iconminus.svg"
                        />
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center p-2 z-[1] ml-[-1px] border-t-[1px] border-solid border-gray-700 border-b-[1px]">
                        <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                          2
                        </div>
                      </div>
                      <img
                        className="h-11 w-[41px] relative rounded-tl-none rounded-tr rounded-br rounded-bl-none overflow-hidden shrink-0 min-h-[44px] z-[2] ml-[-1px]"
                        loading="eager"
                        alt=""
                        src="/frame-907.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[112px] text-sm">
                    <div className="w-32 h-8 flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex-1 rounded bg-secondary-2 overflow-hidden flex flex-row items-center justify-center p-1.5 text-text">
                        <div className="relative leading-[21px] font-medium">
                          M
                        </div>
                      </div>
                      <div className="h-[34px] flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-700">
                        <div className="relative leading-[21px] font-medium">
                          L
                        </div>
                      </div>
                      <div className="h-[34px] flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-700">
                        <div className="relative leading-[21px] font-medium">
                          XL
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                      <button className="cursor-pointer [border:none] py-2.5 pr-11 pl-12 bg-secondary-2 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-salmon">
                        <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                          Buy Now
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  className="h-10 w-10 relative rounded overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/frame-904.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded box-border overflow-hidden flex flex-col items-start justify-start py-6 px-0 gap-[16px] max-w-full text-base border-[1px] border-solid border-gray-700">
              <div className="flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                <div className="flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/icondelivery.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Free Delivery
                    </div>
                    <div className="relative text-xs [text-decoration:underline] leading-[18px] font-medium">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/underline-13.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-4">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/iconreturn.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Return Delivery
                    </div>
                    <div className="relative text-xs leading-[18px] font-medium">
                      {`Free 30 Days Delivery Returns. `}
                      <span className="[text-decoration:underline]">
                        Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[60px] min-h-[550px] max-w-full text-left text-base text-secondary-2 font-title-16px-regular mq750:gap-[30px]">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <div className="h-10 w-5 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
          </div>
          <div className="relative leading-[20px] font-semibold">
            Related Item
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-button">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
              <button className="cursor-pointer [border:none] p-1 bg-secondary-2 absolute top-[12px] left-[12px] rounded w-[55px] flex flex-row items-center justify-center box-border hover:bg-salmon">
                <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                  -40%
                </div>
              </button>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="w-[34px] h-[34px] relative"
                  loading="eager"
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className="w-[34px] h-[34px] relative"
                  loading="eager"
                  alt=""
                  src="/fill-eye-5.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                <img
                  className="absolute w-[calc(100%_-_18px)] top-[calc(50%_-_76px)] right-[9px] left-[9px] max-w-full overflow-hidden h-[152px] object-cover"
                  loading="eager"
                  alt=""
                  src="/g922500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                HAVIT HV-G92 Gamepad
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $120
                </div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-700 whitespace-nowrap">
                  $160
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
                  (88)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px] text-bg">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-3 px-[9px] pb-[9px] relative gap-[129px] mq450:gap-[64px]">
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
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="w-[34px] h-[34px] relative"
                    alt=""
                    src="/fill-eye-5.svg"
                  />
                  <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-107px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                    <img
                      className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_96px)] w-[191px] h-[101px] object-cover"
                      alt=""
                      src="/ak90001500x500-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="relative leading-[24px] font-medium z-[1]">
                Add To Cart
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-button">
              <div className="relative leading-[24px] font-medium">
                AK-900 Wired Keyboard
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
                    src="/vector-9.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold">
                  (75)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
              <button className="cursor-pointer [border:none] p-1 bg-secondary-2 absolute top-[12px] left-[12px] rounded w-[55px] flex flex-row items-center justify-center box-border hover:bg-salmon">
                <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                  -30%
                </div>
              </button>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="w-[34px] h-[34px] relative"
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className="w-[34px] h-[34px] relative"
                  alt=""
                  src="/fill-eye-5.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                <img
                  className="absolute w-[calc(100%_-_20px)] top-[26px] right-[10px] left-[10px] max-w-full overflow-hidden h-[129px] object-cover"
                  loading="eager"
                  alt=""
                  src="/g27cq4500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                IPS LCD Gaming Monitor
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $370
                </div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-700 whitespace-nowrap">
                  $400
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
                  (99)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
            <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-center p-[35px] relative">
              <div className="my-0 mx-[!important] absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="w-[34px] h-[34px] relative"
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className="w-[34px] h-[34px] relative"
                  alt=""
                  src="/fill-eye-5.svg"
                />
              </div>
              <div className="self-stretch h-[180px] relative overflow-hidden shrink-0 z-[1]">
                <img
                  className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_95px)] w-[191px] h-[95px] object-cover"
                  alt=""
                  src="/gammaxxl240argb1500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                RGB liquid CPU Cooler
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                <div className="relative leading-[24px] font-medium whitespace-nowrap">
                  $160
                </div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-700 whitespace-nowrap">
                  $170
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
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/starhalffilled.svg"
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
                      src="/googleplay12.svg"
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
            alt=""
            src="/underline-5.svg"
          />
          <div className="flex flex-row items-center justify-start py-0 px-5 box-border opacity-[0.6] max-w-full">
            <div className="flex flex-row items-center justify-start gap-[6px] max-w-full">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/iconcopyright5.svg"
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

export default ProductDetailsPage;
