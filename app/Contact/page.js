import { useCallback } from "react";
import { useRouter } from "next/router";

const Contact = () => {
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
                <div className="h-6 w-[66px] flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">Contact</div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/underline1.svg"
                  />
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
            loading="eager"
            alt=""
            src="/line-3.svg"
          />
        </div>
      </header>
      <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[80px] min-h-[618px] max-w-full text-left text-sm text-button font-title-16px-regular mq450:gap-[20px] mq750:gap-[40px]">
        <div className="flex flex-row items-start justify-start relative gap-[30px]">
          <div className="relative leading-[21px] text-gray-700">Home</div>
          <img
            className="h-[11.7px] w-1.5 absolute my-0 mx-[!important] top-[4.6px] left-[54px] object-contain"
            loading="eager"
            alt=""
            src="/line-13.svg"
          />
          <div className="relative leading-[21px]">Cantact</div>
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
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-base mq1050:flex-wrap">
          <div className="h-[457px] w-[340px] rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-hidden shrink-0 flex flex-row items-start justify-center py-10 px-[35px] box-border min-w-[340px] max-w-full mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq450:min-w-full mq1050:flex-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative rounded-[31px] overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/iconsphone.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Call To Us
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-sm">
                  <div className="relative leading-[21px]">
                    We are available 24/7, 7 days a week.
                  </div>
                  <div className="relative leading-[21px]">
                    Phone: +8801611112222
                  </div>
                </div>
              </div>
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/underline-12.svg"
              />
              <div className="w-[250px] flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative rounded-[43px] overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/iconsmail.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Write To US
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
                  <div className="self-stretch relative leading-[21px]">
                    Fill out our form and we will contact you within 24 hours.
                  </div>
                  <div className="relative leading-[21px]">
                    Emails: customer@exclusive.com
                  </div>
                  <div className="relative leading-[21px]">
                    Emails: support@exclusive.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-col items-center justify-start py-10 pr-8 pl-[31px] box-border gap-[32px] min-w-[520px] max-w-full text-gray-700 mq450:gap-[16px] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-center gap-[16px] mq750:flex-wrap">
              <div className="flex-1 flex flex-row items-center justify-start min-w-[176px]">
                <div className="h-[50px] w-[235px] relative rounded bg-secondary overflow-hidden shrink-0" />
                <input
                  className="w-[101px] [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-left inline-block opacity-[0.5] z-[1] ml-[-219px]"
                  placeholder="Your Name *"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-row items-center justify-start min-w-[176px]">
                <div className="h-[50px] w-[235px] relative rounded bg-secondary overflow-hidden shrink-0" />
                <input
                  className="w-24 [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-left inline-block opacity-[0.5] z-[1] ml-[-219px]"
                  placeholder="Your Email *"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-row items-center justify-start min-w-[176px]">
                <div className="h-[50px] w-[235px] relative rounded bg-secondary overflow-hidden shrink-0" />
                <input
                  className="w-[102px] [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-left inline-block opacity-[0.5] z-[1] ml-[-219px]"
                  placeholder="Your Phone *"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch h-[207px] flex flex-col items-start justify-start py-[13px] px-4 box-border relative">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-secondary overflow-hidden" />
              <div className="relative leading-[24px] z-[1]">Your Massage</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <button className="cursor-pointer [border:none] p-4 bg-secondary-2 w-[215px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-salmon">
                <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                  Send Massage
                </div>
              </button>
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
                      src="/googleplay11.svg"
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

export default Contact;
