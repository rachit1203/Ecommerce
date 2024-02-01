import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/TopHeader";

const About = () => {
  const router = useRouter();

  const onHeaderContainer1Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <footer className="w-full relative bg-bg overflow-hidden flex flex-col items-center justify-start gap-[140px] tracking-[normal] mq450:gap-[35px] mq750:gap-[70px]">
      <section className="self-stretch flex flex-col items-end justify-start gap-[16px] max-w-full text-left text-sm text-button font-title-16px-regular">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-text">
          <TopHeader/>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-5xl font-heading-24px-bold">
          <div className="w-[1170px] flex flex-row items-center justify-start gap-[130px] max-w-full lg:gap-[65px] mq450:gap-[16px] mq750:gap-[32px]">
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
                <div
                  className="flex flex-row items-center justify-center cursor-pointer"
                  onClick={onHeaderContainer1Click}
                >
                  <div className="relative leading-[24px]">Contact</div>
                </div>
                <div className="h-6 flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">About</div>
                  <img
                    className="w-12 h-px relative"
                    loading="eager"
                    alt=""
                    src="/underline.svg"
                  />
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
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-16 box-border max-w-full">
          <img
            className="flex-1 relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            loading="eager"
            alt=""
            src="/line-3.svg"
          />
        </div>
        <div className="w-[1325px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[75px] max-w-full lg:flex-wrap mq450:gap-[19px] mq750:gap-[37px]">
          <div className="w-[525px] flex flex-col items-start justify-start gap-[179px] min-w-[525px] max-w-full lg:flex-1 mq450:gap-[45px] mq750:gap-[89px] mq750:min-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 relative gap-[30px]">
              <div className="relative leading-[21px] text-gray-700">Home</div>
              <img
                className="h-[11.7px] w-1.5 absolute my-0 mx-[!important] top-[4.6px] left-[calc(50%_-_13px)] object-contain"
                loading="eager"
                alt=""
                src="/line-13.svg"
              />
              <div className="relative leading-[21px]">About</div>
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-justify text-35xl font-heading-24px-bold mq750:gap-[20px]">
              <h1 className="m-0 w-[297px] relative text-inherit tracking-[0.06em] leading-[64px] font-semibold font-inherit inline-block pr-5 mq450:text-13xl mq450:leading-[38px] mq1050:text-[43px] mq1050:leading-[51px]">
                Our Story
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-base font-title-16px-regular">
                <div className="self-stretch relative leading-[26px]">{`Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. `}</div>
                <div className="self-stretch relative leading-[26px] whitespace-pre-wrap pr-5">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[63px] px-0 pb-0 box-border min-w-[458px] max-w-full mq750:pt-[41px] mq750:box-border mq750:min-w-full">
            <img
              className="self-stretch h-[609px] relative rounded-tl rounded-tr-none rounded-br-none rounded-bl max-w-full overflow-hidden shrink-0 object-cover"
              loading="eager"
              alt=""
              src="/side-image@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="w-[1210px] flex flex-row items-start justify-center py-0 px-5 box-border gap-[30px] max-w-full text-left text-13xl text-button font-heading-24px-bold mq1050:flex-wrap">
        <div className="flex-[0.645] rounded box-border overflow-hidden flex flex-row items-center justify-center py-[30px] pr-[50px] pl-[49px] min-w-[248px] max-w-[270px] border-[1px] border-solid border-gray-600 mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
          <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
            <img
              className="w-20 h-20 relative"
              loading="eager"
              alt=""
              src="/services2.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
              <div className="w-[151px] flex flex-row items-start justify-start py-0 pr-[21px] pl-[29px] box-border">
                <b className="flex-1 relative tracking-[0.04em] leading-[30px] shrink-0 mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">{`10.5k `}</b>
              </div>
              <div className="relative text-base leading-[24px] font-title-16px-regular text-center">
                Sallers active our site
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.7863] rounded bg-secondary-2 shadow-[0px_2px_10px_2px_rgba(0,_0,_0,_0.2)] overflow-hidden flex flex-row items-center justify-center p-8 box-border min-w-[248px] max-w-[270px] text-bg mq450:flex-1">
          <div className="flex-1 flex flex-col items-center justify-start py-0 px-[3px] gap-[24px]">
            <img className="w-20 h-20 relative" alt="" src="/services-12.svg" />
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <b className="relative tracking-[0.04em] leading-[30px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                33k
              </b>
              <div className="relative text-base leading-[24px] font-title-16px-regular">
                Mopnthly Produduct Sale
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-center py-[30px] px-[3px] min-w-[248px] max-w-[270px] border-[1px] border-solid border-gray-600">
          <div className="flex-1 flex flex-col items-center justify-start py-0 pr-6 pl-[23px] gap-[24px]">
            <img className="w-20 h-20 relative" alt="" src="/services-21.svg" />
            <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
              <b className="relative tracking-[0.04em] leading-[30px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                45.5k
              </b>
              <div className="relative text-base leading-[24px] font-title-16px-regular">
                Customer active in our site
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.813] rounded box-border overflow-hidden flex flex-row items-center justify-center py-[30px] pr-7 pl-[27px] min-w-[248px] max-w-[270px] border-[1px] border-solid border-gray-600 mq450:flex-1">
          <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
            <img className="w-20 h-20 relative" alt="" src="/services-31.svg" />
            <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
              <b className="relative tracking-[0.04em] leading-[30px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                25k
              </b>
              <div className="relative text-base leading-[24px] font-title-16px-regular">
                Anual gross sale in our site
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[40px] max-w-full text-left text-13xl text-button font-heading-24px-bold mq750:gap-[20px]">
        <div className="w-[1170px] overflow-x-auto flex flex-row items-start justify-start gap-[30px] max-w-full">
          <div className="w-[370px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch h-[430px] relative rounded bg-secondary overflow-hidden shrink-0">
              <img
                className="absolute top-[39px] left-[67px] w-[236px] h-[391px] object-cover"
                loading="eager"
                alt=""
                src="/image-46@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                  Tom Cruise
                </h1>
                <div className="relative text-base leading-[24px] font-title-16px-regular">{`Founder & Chairman`}</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
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
          <div className="w-[370px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch h-[430px] relative rounded bg-secondary overflow-hidden shrink-0">
              <img
                className="absolute top-[33px] left-[38px] w-[294px] h-[397px] object-cover"
                loading="eager"
                alt=""
                src="/image-51@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                Emma Watson
              </h1>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base font-title-16px-regular">
                <div className="relative leading-[24px]">Managing Director</div>
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icontwitter.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/iconinstagram.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/iconlinkedin.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[370px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch h-[430px] relative rounded bg-secondary overflow-hidden shrink-0">
              <img
                className="absolute top-[38px] left-[22px] w-[326px] h-[392px] object-cover"
                loading="eager"
                alt=""
                src="/image-47@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                Will Smith
              </h1>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 text-base font-title-16px-regular">
                <div className="relative leading-[24px]">Product Designer</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icontwitter.svg"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/iconinstagram.svg"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/iconlinkedin.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <div className="h-3 w-3 relative rounded-[50%] bg-gray-600" />
          <div className="h-3 w-3 relative rounded-[50%] bg-gray-600" />
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/group-1000005940.svg"
          />
          <div className="h-3 w-3 relative rounded-[50%] bg-gray-600" />
          <div className="h-3 w-3 relative rounded-[50%] bg-gray-600" />
        </div>
      </section>
      <header className="w-[983px] flex flex-row flex-wrap items-center justify-between py-0 px-5 box-border gap-[20px] max-w-full text-left text-xl text-button font-title-16px-regular">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <img className="w-20 h-20 relative" alt="" src="/services-4.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
              FREE AND FAST DELIVERY
            </div>
            <div className="relative text-sm leading-[21px] text-center">
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px] min-w-[170px]">
          <img className="w-20 h-20 relative" alt="" src="/services-5.svg" />
          <div className="flex flex-col items-center justify-start py-0 px-[7px] gap-[8px]">
            <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
              24/7 CUSTOMER SERVICE
            </div>
            <div className="relative text-sm leading-[21px]">
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-start gap-[24px]">
          <img className="w-20 h-20 relative" alt="" />
          <div className="w-64 flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch h-7 relative leading-[28px] font-semibold inline-block mq450:text-base mq450:leading-[22px]">
              MONEY BACK GUARANTEE
            </div>
            <div className="h-[21px] relative text-sm leading-[21px] inline-block">
              We reurn money within 30 days
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px] min-w-[166px]">
          <img className="w-20 h-20 relative" alt="" src="/services-7.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
              MONEY BACK GUARANTEE
            </div>
            <div className="relative text-sm leading-[21px]">
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </header>
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
                      src="/googleplay10.svg"
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
                alt=""
                src="/icontwitter.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/iconinstagram.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
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
                src="/iconcopyright4.svg"
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

export default About;
