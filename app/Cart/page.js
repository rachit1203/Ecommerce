import { useCallback } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();

  const onUserIconClick = useCallback(() => {
    router.push("/account");
  }, [router]);

  return (
    <footer className="w-full relative bg-bg overflow-hidden flex flex-col items-start justify-start gap-[40px] tracking-[normal] text-left text-sm text-text font-title-16px-regular mq750:gap-[20px]">
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
      <section className="self-stretch flex flex-col items-center justify-start gap-[80px] min-h-[1175px] max-w-full text-left text-5xl text-button font-title-16px-regular mq450:gap-[20px] mq750:gap-[40px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full font-heading-24px-bold">
          <div className="w-[1210px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[130px] max-w-full lg:gap-[65px] mq450:gap-[16px] mq750:gap-[32px]">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
              <div className="flex flex-row items-center justify-center">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                  Exclusive
                </h3>
              </div>
              <div className="flex flex-row items-start justify-start gap-[48px] max-w-full text-center text-base font-title-16px-regular mq450:gap-[24px] mq1050:hidden">
                <div className="flex flex-row items-center justify-center">
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
            <div className="w-[395px] flex flex-row items-center justify-start gap-[24px] max-w-full text-center text-xs text-text font-title-16px-regular">
              <div className="flex-1 rounded bg-secondary flex flex-row items-center justify-end py-[7px] pr-3 pl-5">
                <div className="flex-1 flex flex-row items-center justify-start gap-[34px] mq750:hidden">
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
              <div className="w-32 flex flex-row items-start justify-start gap-[16px]">
                <div className="h-8 flex-1 relative overflow-hidden">
                  <img
                    className="absolute h-[56.25%] w-[62.5%] top-[21.88%] right-[18.75%] bottom-[21.88%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                    loading="eager"
                    alt=""
                    src="/menu-item-frame.svg"
                  />
                  <div className="absolute h-[53.13%] w-6/12 top-[0%] right-[0%] bottom-[46.88%] left-[50%] flex flex-col items-center justify-start z-[1]">
                    <div className="relative leading-[18px] z-[1]">4</div>
                    <div className="w-4 h-4 relative rounded-[50%] bg-secondary-2 mt-[-16px]" />
                  </div>
                </div>
                <div className="h-8 flex-1 relative">
                  <img
                    className="absolute h-3/4 w-9/12 top-[25%] right-[21.88%] bottom-[0%] left-[3.13%] max-w-full overflow-hidden max-h-full"
                    loading="eager"
                    alt=""
                    src="/cart1.svg"
                  />
                  <div className="absolute h-[53.13%] w-6/12 top-[3.13%] right-[3.13%] bottom-[43.75%] left-[46.88%] flex flex-col items-center justify-start z-[1]">
                    <div className="relative leading-[18px] z-[1]">2</div>
                    <div className="w-4 h-4 relative rounded-[50%] bg-secondary-2 mt-[-16px]" />
                  </div>
                </div>
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] cursor-pointer"
                  loading="eager"
                  alt=""
                  src="/user.svg"
                  onClick={onUserIconClick}
                />
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            loading="eager"
            alt=""
            src="/line-3.svg"
          />
        </div>
        <div className="w-[1210px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-sm">
          <div className="flex flex-row items-start justify-start relative gap-[30px]">
            <div className="relative leading-[21px] text-gray-700">Home</div>
            <img
              className="h-[11.7px] w-1.5 absolute my-0 mx-[!important] top-[4.6px] right-[43px] object-contain"
              loading="eager"
              alt=""
              src="/line-131.svg"
            />
            <div className="relative leading-[21px]">Cart</div>
            <img
              className="h-[11.7px] w-1.5 relative object-contain hidden z-[3]"
              alt=""
            />
            <div className="self-stretch w-[55px] relative leading-[21px] hidden z-[4]">
              Nothing
            </div>
            <img
              className="h-[11.7px] w-1.5 relative object-contain hidden z-[5]"
              alt=""
            />
            <div className="self-stretch w-[55px] relative leading-[21px] hidden z-[6]">
              Nothing
            </div>
            <img
              className="h-[11.7px] w-1.5 relative object-contain hidden z-[7]"
              alt=""
            />
            <div className="self-stretch w-[55px] relative leading-[21px] hidden z-[8]">
              Nothing
            </div>
          </div>
        </div>
        <div className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[40px] max-w-full text-base mq750:gap-[20px]">
          <div className="self-stretch rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-center py-6 pr-[39px] pl-10 box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-between gap-[20px] max-w-full">
              <div className="flex-1 relative leading-[24px] inline-block min-w-[41px]">
                Product
              </div>
              <div className="relative leading-[24px]">Price</div>
              <div className="flex-1 relative leading-[24px] inline-block min-w-[45px]">
                Quantity
              </div>
              <div className="flex-1 relative leading-[24px] inline-block min-w-[45px]">
                Subtotal
              </div>
            </div>
          </div>
          <div className="self-stretch rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-between py-6 pr-[66px] pl-10 relative gap-[20px] lg:pr-[33px] lg:box-border mq750:flex-wrap mq750:justify-center">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <div className="h-[54px] w-[54px] relative overflow-hidden shrink-0">
                <img
                  className="absolute h-[72.22%] w-[92.59%] top-[14.81%] right-[3.7%] bottom-[12.96%] left-[3.7%] max-w-full overflow-hidden max-h-full object-cover"
                  loading="eager"
                  alt=""
                  src="/g27cq4500x500-11@2x.png"
                />
              </div>
              <div className="relative leading-[24px]">LCD Monitor</div>
            </div>
            <div className="w-[146px] flex flex-col items-start justify-start">
              <div className="relative leading-[24px] whitespace-nowrap">
                $650
              </div>
            </div>
            <div className="h-11 w-44 flex flex-col items-start justify-start">
              <div className="w-[75px] h-[47px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1.5px] border-solid border-gray-200">
                <select className="bg-[transparent] [border:none] flex flex-row items-center justify-start py-1 px-1.5 font-title-16px-regular text-base text-button" />
              </div>
            </div>
            <div className="relative leading-[24px] whitespace-nowrap">
              $650
            </div>
            <img
              className="h-6 w-6 absolute my-0 mx-[!important] top-[20px] left-[30px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconcancel.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-x-auto flex flex-row items-center justify-between py-6 pr-[66px] pl-10 gap-[20px] lg:pr-[33px] lg:box-border">
              <div className="flex flex-row items-center justify-start gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[54px] w-[54px] relative overflow-hidden shrink-0">
                  <img
                    className="absolute h-[78.15%] w-[90.56%] top-[11.11%] right-[3.89%] bottom-[10.74%] left-[5.56%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/g922500x500-1@2x.png"
                  />
                </button>
                <div className="relative leading-[24px]">H1 Gamepad</div>
              </div>
              <div className="w-[153px] shrink-0 flex flex-col items-start justify-start">
                <div className="relative leading-[24px] whitespace-nowrap">
                  $550
                </div>
              </div>
              <div className="h-11 w-[183px] shrink-0 flex flex-col items-start justify-start">
                <div className="w-[75px] h-[47px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1.5px] border-solid border-gray-200">
                  <select className="bg-[transparent] [border:none] flex flex-row items-center justify-start py-1 px-1.5 font-title-16px-regular text-base text-button" />
                </div>
              </div>
              <div className="relative leading-[24px] whitespace-nowrap">
                $1100
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[173px] max-w-full text-xl lg:gap-[86px] mq450:gap-[22px] mq750:gap-[43px] mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[80px] min-w-[343px] max-w-full mq450:gap-[20px] mq450:min-w-full mq750:gap-[40px]">
                <button className="cursor-pointer p-4 bg-[transparent] w-[218px] rounded box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray-700 hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                  <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-button text-left">
                    Return To Shop
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-center gap-[16px] mq450:flex-wrap">
                  <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-4 px-6 min-w-[112px] border-[1px] border-solid border-button">
                    <input
                      className="w-28 [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-gray-700 text-left inline-block"
                      placeholder="Coupon Code"
                      type="text"
                    />
                  </div>
                  <button className="cursor-pointer [border:none] p-4 bg-secondary-2 w-[211px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-salmon">
                    <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                      Apply Coupon
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[470px] flex flex-col items-end justify-start gap-[80px] min-w-[470px] max-w-full mq750:gap-[40px] mq750:min-w-full mq1050:flex-1">
                <button className="cursor-pointer py-4 pr-[43px] pl-[47px] bg-[transparent] rounded flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray-700 hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                  <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-button text-left">
                    Update Cart
                  </div>
                </button>
                <div className="self-stretch rounded overflow-hidden flex flex-col items-center justify-start py-8 px-[22px] gap-[24px] border-[1.5px] border-solid border-button">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                      Cart Total
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-base">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative leading-[24px]">Subtotal:</div>
                      <div className="relative leading-[24px] whitespace-nowrap">
                        $1750
                      </div>
                    </div>
                    <img
                      className="self-stretch relative max-w-full overflow-hidden max-h-full"
                      loading="eager"
                      alt=""
                      src="/underline.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative leading-[24px]">Shipping:</div>
                      <div className="relative leading-[24px]">Free</div>
                    </div>
                    <img
                      className="self-stretch relative max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/underline.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative leading-[24px]">Total:</div>
                      <div className="relative leading-[24px] whitespace-nowrap">
                        $1750
                      </div>
                    </div>
                    <div className="w-[292px] flex flex-row items-start justify-start py-0 pr-8 pl-0 box-border">
                      <button className="cursor-pointer [border:none] p-4 bg-secondary-2 flex-1 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-salmon">
                        <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                          Procees to checkout
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-button overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-6 box-border gap-[60px] max-w-full text-left text-base text-bg font-title-16px-regular mq450:pt-[52px] mq450:pb-5 mq450:box-border mq750:gap-[30px]">
        <header className="w-[1210px] flex flex-row items-start justify-between py-0 pr-[23px] pl-5 box-border gap-[20px] max-w-full text-left text-xl text-text font-title-16px-regular mq1050:flex-wrap">
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
                      src="/googleplay7.svg"
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
        </header>
        <div className="self-stretch h-10 flex flex-col items-center justify-start gap-[16px] opacity-[0.4] max-w-full">
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
                src="/iconcopyright3.svg"
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

export default Cart;
