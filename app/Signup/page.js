import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const onExclusiveTextClick = useCallback(() => {
    router.push("/e-commerce-home-page");
  }, [router]);

  const onHomeTextClick = useCallback(() => {
    router.push("/e-commerce-home-page");
  }, [router]);

  const onLogInTextClick = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  return (
    <footer className="w-full relative bg-bg overflow-hidden flex flex-col items-start justify-start gap-[140px] tracking-[normal] mq450:gap-[35px] mq750:gap-[70px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-17xl text-button font-heading-24px-bold mq750:gap-[30px]">
        <header className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-sm text-text font-title-16px-regular mq750:gap-[19px]">
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
              <FormControl
                className="font-title-16px-regular text-sm text-text"
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "78px",
                  height: "24px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select color="primary" disableUnderline displayEmpty />
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full text-5xl text-button font-heading-24px-bold">
            <div className="w-[1210px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[210px] max-w-full lg:gap-[105px] mq450:gap-[26px] mq750:gap-[52px]">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
                <div className="flex flex-row items-center justify-center">
                  <h3
                    className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit whitespace-nowrap cursor-pointer"
                    onClick={onExclusiveTextClick}
                  >
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-[61px] flex flex-col items-start justify-start">
                    <div className="relative text-base leading-[24px] font-title-16px-regular text-button text-center whitespace-nowrap">
                      Sign Up
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                      alt=""
                      src="/underline.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[243px] flex flex-row items-center justify-start gap-[24px] text-center text-xs text-text font-title-16px-regular">
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
                <div className="hidden flex-row items-center justify-center gap-[16px]">
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0 hidden min-h-[32px]"
                    alt=""
                  />
                  <div className="h-8 w-8 relative hidden">
                    <img
                      className="absolute h-3/4 w-9/12 top-[25%] right-[21.88%] bottom-[0%] left-[3.13%] max-w-full overflow-hidden max-h-full"
                      alt=""
                    />
                    <div className="absolute h-[53.13%] w-6/12 top-[3.13%] right-[3.13%] bottom-[43.75%] left-[46.88%]">
                      <div className="absolute h-[94.12%] w-full top-[5.88%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondary-2" />
                      <div className="absolute h-full w-[43.75%] top-[0%] left-[31.25%] leading-[18px] inline-block">
                        2
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    alt=""
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
        <div className="w-[1325px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[129px] max-w-full lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px] mq1050:flex-wrap">
          <div className="h-[781px] flex-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-powderblue overflow-hidden min-w-[523px] max-w-full mq750:min-w-full">
            <img
              className="absolute top-[75px] left-[-8px] w-[919px] h-[706px] object-cover"
              loading="eager"
              alt=""
              src="/dlbeatsnoop-1@2x.png"
            />
          </div>
          <div className="w-[371px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[48px] min-w-[371px] max-w-full mq450:gap-[24px] mq450:min-w-full mq1050:flex-1">
            <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[30px] font-medium font-inherit mq450:text-3xl mq450:leading-[18px] mq1050:text-10xl mq1050:leading-[24px]">
                Create an account
              </h1>
              <div className="relative text-base leading-[24px] font-title-16px-regular">
                Enter your details below
              </div>
            </div>
            <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[40px] mq450:gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[40px] mq450:gap-[20px]">
                <div className="self-stretch h-8 flex flex-col items-start justify-start gap-[8px]">
                  <input
                    className="w-[49px] [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-gray-200 text-left inline-block"
                    placeholder="Name"
                    type="text"
                  />
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/underline-11.svg"
                  />
                </div>
                <div className="self-stretch h-8 flex flex-col items-start justify-start gap-[8px]">
                  <input
                    className="w-[187px] [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-gray-200 text-left inline-block"
                    placeholder="Email or Phone Number"
                    type="text"
                  />
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/underline-11.svg"
                  />
                </div>
                <div className="self-stretch h-8 flex flex-col items-start justify-start gap-[8px]">
                  <input
                    className="w-[77px] [border:none] [outline:none] font-title-16px-regular text-base bg-[transparent] h-6 relative leading-[24px] text-gray-200 text-left inline-block"
                    placeholder="Password"
                    type="text"
                  />
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/underline-11.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <button className="cursor-pointer [border:none] py-4 px-5 bg-secondary-2 self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-salmon">
                  <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                    Create Account
                  </div>
                </button>
                <div className="self-stretch flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px]">
                  <button className="cursor-pointer py-4 px-5 bg-[transparent] self-stretch rounded flex flex-col items-center justify-start border-[1px] border-solid border-gray-200">
                    <div className="flex flex-row items-start justify-start gap-[16px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icongoogle.svg"
                      />
                      <div className="relative text-base leading-[24px] font-title-16px-regular text-button text-left">
                        Sign up with Google
                      </div>
                    </div>
                  </button>
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="relative text-base leading-[24px] font-title-16px-regular text-gray-300 text-left">
                      Already have account?
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-7 flex flex-col items-start justify-start gap-[4px]">
                      <div
                        className="relative text-base leading-[24px] font-medium font-title-16px-regular text-gray-300 text-left whitespace-nowrap cursor-pointer"
                        onClick={onLogInTextClick}
                      >
                        Log in
                      </div>
                      <img
                        className="w-[47px] h-px relative"
                        alt=""
                        src="/underline-4.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
                      src="/googleplay3.svg"
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
                src="/iconcopyright.svg"
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

export default SignUp;
