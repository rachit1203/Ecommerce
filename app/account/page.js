import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    InputAdornment,
  } from "@mui/material";
  
  const AccountDropdownWithAccount = () => {
    return (
      <div className="w-full relative bg-bg overflow-hidden flex flex-col items-center justify-start gap-[32px] tracking-[normal] text-left text-sm text-text font-title-16px-regular mq750:gap-[16px]">
        <section className="w-[892px] my-0 mx-[!important] absolute top-[182px] right-[135px] bg-button overflow-hidden flex flex-row items-center justify-start pt-4 pb-0 pr-0 pl-16 box-border gap-[38px] max-w-full text-center text-base text-text font-title-16px-regular mq750:flex-wrap mq750:pl-5 mq750:pr-5 mq750:pb-4 mq750:box-border">
          <div className="w-[294px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[294px] mq750:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
              <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[24px]">
                <img
                  className="h-[49px] w-10 relative object-cover"
                  loading="eager"
                  alt=""
                  src="/1200pxapple-gray-logo-1@2x.png"
                />
                <div className="relative leading-[24px] inline-block h-5">
                  iPhone 14 Series
                </div>
              </div>
              <h1 className="m-0 self-stretch h-[120px] relative text-29xl tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-bold text-left inline-block mq450:text-10xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
                Up to 10% off Voucher
              </h1>
              <div className="w-[119px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <div className="h-7 flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[24px] font-medium">
                      Shop Now
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-text" />
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icons-arrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[328px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-w-[322px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[352px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
              />
              <div className="my-0 mx-[!important] absolute bottom-[35px] left-[-43px] flex flex-row items-center justify-start gap-[11px] z-[2]">
                <div className="h-3 w-3 relative rounded-[50%] bg-gray-500" />
                <div className="h-3 w-3 relative rounded-[50%] bg-gray-500" />
                <div className="h-3.5 w-3.5 relative">
                  <div className="absolute top-[2px] left-[2px] rounded-[50%] bg-secondary-2 w-2.5 h-2.5 z-[1]" />
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[2px] border-solid border-bg" />
                </div>
                <div className="h-3 w-3 relative rounded-[50%] bg-gray-500" />
                <div className="h-3 w-3 relative rounded-[50%] bg-gray-500" />
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
          <div className="flex-1 bg-button overflow-hidden flex flex-row items-center justify-end py-3 px-[136px] box-border max-w-full lg:pl-[68px] lg:pr-[68px] lg:box-border mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
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
        </div>
        <section className="w-[1211px] flex flex-col items-start justify-start py-0 px-5 box-border min-h-[546px] max-w-full text-left text-5xl text-button font-heading-24px-bold">
          <div className="self-stretch flex flex-row items-center justify-start gap-[130px] max-w-full lg:gap-[65px] mq450:gap-[16px] mq750:gap-[32px]">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
              <div className="flex flex-row items-center justify-center">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                  Exclusive
                </h3>
              </div>
              <div className="flex flex-row items-start justify-start gap-[48px] max-w-full text-center text-base font-title-16px-regular mq450:gap-[24px]">
                <div className="h-6 flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">Home</div>
                  <img
                    className="w-12 h-px relative"
                    alt=""
                    src="/underline.svg"
                  />
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
                <div className="flex-1 flex flex-row items-center justify-start gap-[34px] mq1050:hidden">
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
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                  alt=""
                  src="/wishlist.svg"
                />
                <div className="h-8 flex-1 relative">
                  <img
                    className="absolute h-3/4 w-9/12 top-[25%] right-[21.88%] bottom-[0%] left-[3.13%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/cart1.svg"
                  />
                  <div className="absolute h-[53.13%] w-6/12 top-[3.13%] right-[1.56%] bottom-[43.75%] left-[48.44%] flex flex-col items-center justify-start z-[1]">
                    <div className="relative leading-[18px] z-[1]">2</div>
                    <div className="w-4 h-4 relative rounded-[50%] bg-secondary-2 mt-[-16px]" />
                  </div>
                </div>
                <img
                  className="h-8 w-8 relative rounded-28xl overflow-hidden shrink-0 min-h-[32px]"
                  alt=""
                  src="/user.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-base font-title-16px-regular mq750:flex-wrap">
            <div className="h-[400px] w-[233px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
              <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[16px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[16px]">
                      <div className="relative leading-[24px]">
                        Woman’s Fashion
                      </div>
                      <div className="relative leading-[24px]">Men’s Fashion</div>
                      <div className="relative leading-[24px]">Electronics</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[16px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/dropdown-1@2x.png"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/dropdown-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative leading-[24px]">{`Home & Lifestyle`}</div>
                  <div className="relative leading-[24px]">Medicine</div>
                  <div className="relative leading-[24px]">{`Sports & Outdoor`}</div>
                  <div className="relative leading-[24px]">{`Baby’s & Toys`}</div>
                  <div className="relative leading-[24px]">{`Groceries & Pets`}</div>
                  <div className="relative leading-[24px]">{`Health & Beauty`}</div>
                </div>
                <div className="self-stretch w-[0.5px] relative box-border opacity-[0.3] border-r-[0.5px] border-solid border-button" />
              </div>
            </div>
            <div className="w-[225px] flex flex-row items-center justify-center py-0 pr-px pl-0 box-border z-[3] text-sm text-text">
              <div className="flex-1 rounded bg-gray-400 [backdrop-filter:blur(150px)] overflow-hidden flex flex-row items-end justify-end pt-[18px] pb-2.5 pr-3 pl-5">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
                  <div className="flex flex-row items-center justify-start py-0 px-0 gap-[16px]">
                    <img
                      className="h-8 w-8 relative overflow-hidden shrink-0"
                      alt=""
                      src="/user-1.svg"
                    />
                    <div className="relative leading-[21px]">
                      Manage My Account
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-0 gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/iconmallbag.svg"
                    />
                    <div className="relative leading-[21px]">My Order</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-0 gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/iconcancel.svg"
                    />
                    <div className="relative leading-[21px]">
                      My Cancellations
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-0 gap-[16px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      alt=""
                      src="/iconreviews.svg"
                    />
                    <div className="relative leading-[21px]">My Reviews</div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
                      alt=""
                      src="/iconlogout.svg"
                    />
                    <div className="relative leading-[21px]">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[135px] box-border min-h-[1828px] max-w-full text-left text-base text-secondary-2 font-title-16px-regular lg:pl-[67px] lg:box-border mq750:pl-[33px] mq750:box-border">
          <div className="w-[1470px] flex flex-col items-start justify-start gap-[60px] max-w-[113%] shrink-0 mq750:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
              <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[16px]">
                <div className="h-10 w-5 relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  Today’s
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full text-17xl text-button font-heading-24px-bold mq750:gap-[15px]">
                <div className="w-[1190px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq1050:flex-wrap">
                  <div className="w-[601px] flex flex-row items-end justify-start gap-[87px] max-w-full mq450:gap-[22px] mq750:flex-wrap mq750:gap-[43px]">
                    <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[48px] font-semibold font-inherit mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                      Flash Sales
                    </h1>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border min-w-[197px] text-xs font-title-16px-regular">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[16px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                          <div className="w-[119px] flex flex-row items-start justify-between gap-[20px]">
                            <div className="relative leading-[18px] font-medium">
                              Days
                            </div>
                            <div className="relative leading-[18px] font-medium">
                              Hours
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[17px] text-13xl font-heading-24px-bold">
                            <b className="flex-1 relative tracking-[0.04em] leading-[30px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                              03
                            </b>
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                                <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                              </div>
                            </div>
                            <b className="flex-1 relative tracking-[0.04em] leading-[30px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                              23
                            </b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-medium">
                            Minutes
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[17px] text-13xl font-heading-24px-bold">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                                <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                              <b className="relative tracking-[0.04em] leading-[30px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                                19
                              </b>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start gap-[8px]">
                                <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                                <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-medium">
                            Seconds
                          </div>
                          <b className="relative text-13xl tracking-[0.04em] leading-[30px] font-heading-24px-bold mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                            56
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-[46px] w-[46px] relative min-h-[46px]"
                        loading="eager"
                        alt=""
                        src="/fill-with-left-arrow.svg"
                      />
                      <img
                        className="h-[46px] w-[46px] relative min-h-[46px]"
                        loading="eager"
                        alt=""
                        src="/fill-with-right-arrow.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[1325px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[30px] max-w-full text-base font-title-16px-regular">
                  <div className="w-[270px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
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
                          src="/fill-eye.svg"
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
                  <div className="w-[270px] shrink-0 flex flex-col items-start justify-start gap-[16px] text-bg">
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
                            src="/fill-eye.svg"
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
                  <div className="w-[270px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
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
                          src="/fill-eye.svg"
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
                  <div className="w-[270px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                      <button className="cursor-pointer [border:none] p-1 bg-secondary-2 absolute top-[12px] left-[12px] rounded w-[55px] flex flex-row items-center justify-center box-border hover:bg-salmon">
                        <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                          -25%
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
                          src="/fill-eye.svg"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                        <img
                          className="absolute h-full top-[0px] bottom-[0px] left-[41px] max-h-full w-[107px] object-cover"
                          loading="eager"
                          alt=""
                          src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
                      <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap">
                          $375
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
                            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                            alt=""
                            src="/starhalffilled.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold">
                          (99)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[270px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-row items-start justify-between pt-3 px-3 pb-[162px] relative gap-[20px]">
                      <button className="cursor-pointer [border:none] p-1 bg-secondary-2 w-[55px] rounded flex flex-row items-center justify-center box-border hover:bg-salmon">
                        <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                          -25%
                        </div>
                      </button>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <img className="w-[34px] h-[34px] relative" alt="" />
                        <img className="w-[34px] h-[34px] relative" alt="" />
                      </div>
                      <div className="h-[180px] w-[190px] absolute my-0 mx-[!important] top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] overflow-hidden shrink-0 z-[1]">
                        <img
                          className="absolute h-full top-[0px] bottom-[0px] left-[41px] max-h-full w-[107px] object-cover"
                          alt=""
                          src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
                      <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap">
                          $375
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
                            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                            alt=""
                            src="/starhalffilled.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold">
                          (99)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1190px] h-[136px] flex flex-col items-center justify-start py-0 pr-5 pl-0 box-border gap-[60px] max-w-full lg:gap-[30px]">
              <button className="cursor-pointer [border:none] p-4 bg-secondary-2 w-[234px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-salmon">
                <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                  View All Products
                </div>
              </button>
              <div className="self-stretch h-[0.5px] relative box-border opacity-[0.3] border-t-[0.5px] border-solid border-button" />
            </div>
            <div className="w-[1190px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[60px] max-w-full lg:gap-[30px]">
              <div className="self-stretch flex flex-row items-end justify-between gap-[20px] max-w-full mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="h-10 w-5 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                    </div>
                    <div className="relative leading-[20px] font-semibold">
                      Categories
                    </div>
                  </div>
                  <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                    Browse By Category
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[46px] w-[46px] relative min-h-[46px]"
                    alt=""
                    src="/fill-with-left-arrow.svg"
                  />
                  <img
                    className="h-[46px] w-[46px] relative min-h-[46px]"
                    alt=""
                    src="/fill-with-right-arrow.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-[30px] min-h-[155px] text-button lg:flex-wrap">
                <div className="rounded overflow-hidden flex flex-col items-center justify-start pt-[25px] pb-6 pr-[55px] pl-[54px] gap-[16px] border-[1px] border-solid border-gray-600">
                  <input
                    className="m-0 w-14 h-14 relative overflow-hidden shrink-0"
                    type="checkbox"
                  />
                  <div className="relative leading-[24px]">Phones</div>
                </div>
                <div className="rounded overflow-hidden flex flex-col items-center justify-start pt-[25px] pb-6 pr-[38px] pl-[39px] gap-[16px] border-[1px] border-solid border-gray-600">
                  <img
                    className="w-14 h-14 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/categorycomputer.svg"
                  />
                  <div className="relative leading-[24px]">Computers</div>
                </div>
                <div className="rounded overflow-hidden flex flex-col items-center justify-start pt-[25px] pb-6 pr-[34px] pl-[33px] gap-[16px] border-[1px] border-solid border-gray-600">
                  <div className="overflow-hidden flex flex-col items-center justify-start p-[7px] relative">
                    <img
                      className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[-0.5px] bottom-[0px] left-[0.5px] max-w-full overflow-hidden max-h-full"
                      alt=""
                    />
                    <img
                      className="w-3.5 h-[7px] relative z-[1]"
                      alt=""
                      src="/vector-24.svg"
                    />
                    <div className="h-7 flex flex-col items-center justify-start py-0 px-[7px] box-border">
                      <img
                        className="w-7 h-7 relative z-[1]"
                        alt=""
                        src="/vector-25.svg"
                      />
                      <div className="h-[13px] flex flex-row items-end justify-start gap-[4px] z-[2] mt-[-20px]">
                        <div className="h-[15px] w-0.5 relative box-border border-r-[2px] border-solid border-button" />
                        <div className="h-2.5 w-0.5 relative box-border border-r-[2px] border-solid border-button" />
                        <div className="h-3 w-0.5 relative box-border border-r-[2px] border-solid border-button" />
                      </div>
                    </div>
                    <img
                      className="w-3.5 h-[7px] relative z-[1]"
                      alt=""
                      src="/vector-26.svg"
                    />
                  </div>
                  <div className="relative leading-[24px]">SmartWatch</div>
                </div>
                <div className="rounded overflow-hidden flex flex-col items-center justify-start pt-[25px] pb-6 pr-[51px] pl-[50px] gap-[16px] border-[1px] border-solid border-gray-600">
                  <img
                    className="w-14 h-14 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/categorycamera.svg"
                  />
                  <div className="relative leading-[24px]">Camera</div>
                </div>
                <div className="rounded overflow-hidden flex flex-col items-center justify-start pt-[25px] pb-6 pr-[34px] pl-[33px] gap-[16px] border-[1px] border-solid border-gray-600">
                  <img
                    className="w-14 h-14 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/categoryheadphone.svg"
                  />
                  <div className="relative leading-[24px]">HeadPhones</div>
                </div>
                <div className="rounded overflow-hidden flex flex-col items-center justify-start pt-[25px] pb-6 pr-[51px] pl-[52px] gap-[16px] border-[1px] border-solid border-gray-600">
                  <img
                    className="w-14 h-14 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/categorygamepad.svg"
                  />
                  <div className="relative leading-[24px]">Gaming</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full lg:gap-[35px] mq750:gap-[17px]">
                <div className="self-stretch h-[0.5px] relative box-border opacity-[0.3] border-t-[0.5px] border-solid border-button" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full shrink-0 lg:gap-[30px]">
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
                      <div className="flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-10 w-5 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                        </div>
                        <div className="relative leading-[20px] font-semibold">
                          This Month
                        </div>
                      </div>
                      <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                        Best Selling Products
                      </h1>
                    </div>
                    <button className="cursor-pointer [border:none] py-4 px-[46px] bg-secondary-2 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-salmon">
                      <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                        View All
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-button">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
                      <div className="self-stretch h-[250px] rounded bg-secondary overflow-hidden shrink-0 flex flex-col items-end justify-start p-3 box-border">
                        <div className="flex flex-col items-start justify-start relative gap-[8px]">
                          <img
                            className="w-[34px] h-[34px] relative"
                            alt=""
                            src="/fill-heart.svg"
                          />
                          <img
                            className="w-[34px] h-[34px] relative"
                            alt=""
                            src="/fill-eye.svg"
                          />
                          <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-127px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                            <img
                              className="absolute top-[calc(50%_-_73px)] left-[calc(50%_-_70px)] w-[140px] h-[146px] object-cover"
                              loading="eager"
                              alt=""
                              src="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="relative leading-[24px] font-medium">
                          The north coat
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                          <div className="relative leading-[24px] font-medium whitespace-nowrap">
                            $260
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-700 whitespace-nowrap">
                            $360
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
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
                      <div className="self-stretch h-[250px] rounded bg-secondary overflow-hidden shrink-0 flex flex-col items-end justify-start p-3 box-border">
                        <div className="flex flex-col items-start justify-start relative gap-[8px]">
                          <img
                            className="w-[34px] h-[34px] relative"
                            alt=""
                            src="/fill-heart.svg"
                          />
                          <img
                            className="w-[34px] h-[34px] relative"
                            alt=""
                            src="/fill-eye.svg"
                          />
                          <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-127px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                            <img
                              className="absolute w-[calc(100%_-_12px)] top-[calc(50%_-_64px)] right-[6px] left-[6px] max-w-full overflow-hidden h-[129px] object-cover"
                              loading="eager"
                              alt=""
                              src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
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
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
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
                            src="/fill-eye.svg"
                          />
                        </div>
                        <div className="w-[200px] h-[180px] relative overflow-hidden shrink-0 z-[1]">
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
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
                      <div className="self-stretch h-[250px] rounded bg-secondary overflow-hidden shrink-0 flex flex-col items-end justify-start p-3 box-border">
                        <div className="flex flex-col items-start justify-start relative gap-[8px]">
                          <img
                            className="w-[34px] h-[34px] relative"
                            alt=""
                            src="/fill-heart.svg"
                          />
                          <img
                            className="w-[34px] h-[34px] relative"
                            alt=""
                            src="/fill-eye.svg"
                          />
                          <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-127px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                            <img
                              className="absolute h-[calc(100%_-_4px)] top-[3px] bottom-[1px] left-[calc(50%_-_70px)] max-h-full w-[140px] object-cover"
                              loading="eager"
                              alt=""
                              src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="relative leading-[24px] font-medium">
                          Small BookSelf
                        </div>
                        <div className="flex flex-row items-start justify-start text-secondary-2">
                          <div className="relative leading-[24px] font-medium whitespace-nowrap">
                            $360
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[1210px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[60px] min-h-[1695px] max-w-full text-left text-base text-button1 font-title-16px-regular mq750:gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
            <div className="flex-1 bg-button overflow-hidden flex flex-row items-center justify-start pt-[37px] pb-[43px] pr-11 pl-0 box-border gap-[27px] max-w-full lg:pr-[22px] lg:box-border mq750:pt-6 mq750:pb-7 mq750:box-border mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
              <div className="w-[499px] flex flex-col items-start justify-start pt-1.5 pb-0 pr-0 pl-14 box-border min-w-[499px] max-w-full mq750:pl-7 mq750:box-border mq750:min-w-full mq1050:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
                  <div className="relative leading-[20px] font-semibold">
                    Categories
                  </div>
                  <h1 className="m-0 self-stretch h-[120px] relative text-29xl tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-bold text-text inline-block mq450:text-10xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
                    Enhance Your Music Experience
                  </h1>
                  <div className="w-80 flex flex-col items-start justify-start gap-[40px] text-button mq450:gap-[20px]">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px]">
                      <div className="h-[62px] w-[62px] flex flex-col items-center justify-start">
                        <div className="self-stretch h-[62px] relative rounded-[50%] bg-bg" />
                        <div className="h-[38px] flex flex-col items-center justify-start py-0 px-[15px] box-border z-[1] mt-[-48px]">
                          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-2">
                            <div className="relative leading-[20px] font-semibold">
                              23
                            </div>
                          </div>
                          <div className="relative text-2xs leading-[18px]">
                            Hours
                          </div>
                        </div>
                      </div>
                      <div className="h-[62px] w-[62px] flex flex-col items-center justify-start">
                        <div className="self-stretch h-[62px] relative rounded-[50%] bg-bg" />
                        <div className="h-[38px] flex flex-col items-start justify-start py-0 px-[17px] box-border z-[1] mt-[-48px]">
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                            <div className="relative leading-[20px] font-semibold">
                              05
                            </div>
                          </div>
                          <div className="relative text-2xs leading-[18px]">
                            Days
                          </div>
                        </div>
                      </div>
                      <div className="h-[62px] w-[62px] flex flex-col items-center justify-start">
                        <div className="self-stretch h-[62px] relative rounded-[50%] bg-bg" />
                        <div className="flex flex-col items-center justify-start py-0 px-2.5 z-[1] mt-[-48px]">
                          <div className="relative leading-[20px] font-semibold">
                            59
                          </div>
                          <div className="relative text-2xs leading-[18px] mt-[-4px]">
                            Minutes
                          </div>
                        </div>
                      </div>
                      <div className="h-[62px] w-[62px] flex flex-col items-center justify-start">
                        <div className="self-stretch h-[62px] relative rounded-[50%] bg-bg" />
                        <div className="flex flex-col items-center justify-start py-0 px-[7px] z-[1] mt-[-48px]">
                          <div className="relative leading-[20px] font-semibold">
                            35
                          </div>
                          <div className="relative text-2xs leading-[18px] mt-[-4px]">
                            Seconds
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-4 pr-11 pl-12 bg-button1 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen">
                      <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
                        Buy Now!
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center relative min-w-[390px] max-w-full mq750:min-w-full">
                <div className="w-[504px] h-[500px] absolute my-0 mx-[!important] bottom-[-43px] left-[26px] rounded-[50%] bg-gainsboro [filter:blur(200px)]" />
                <div className="self-stretch h-[420px] relative overflow-hidden shrink-0 z-[1]">
                  <img
                    className="absolute top-[calc(50%_-_165px)] left-[calc(50%_-_284px)] w-[568px] h-[330px] object-contain"
                    loading="eager"
                    alt=""
                    src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-button lg:gap-[30px]">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] max-w-full text-secondary-2 mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-10 w-5 relative">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                  </div>
                  <div className="relative leading-[20px] font-semibold">
                    Our Products
                  </div>
                </div>
                <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                  Explore Our Products
                </h1>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[46px] w-[46px] relative min-h-[46px]"
                  alt=""
                  src="/fill-with-left-arrow.svg"
                />
                <img
                  className="h-[46px] w-[46px] relative min-h-[46px]"
                  alt=""
                  src="/fill-with-right-arrow.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
                <div className="self-stretch h-[250px] rounded bg-secondary overflow-hidden shrink-0 flex flex-col items-end justify-start p-3 box-border">
                  <div className="flex flex-col items-start justify-start relative gap-[8px]">
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-eye.svg"
                    />
                    <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-127px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                      <img
                        className="absolute h-full top-[0px] bottom-[0px] left-[38px] max-h-full w-[115px] object-cover"
                        loading="eager"
                        alt=""
                        src="/71rdoexxtrl-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[185px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Breed Dry Dog Food
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $100
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                      <div className="flex-1 flex flex-row items-start justify-start">
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
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-9.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold">
                        (35)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px] text-bg">
                <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-start pt-[15px] pb-[9px] pr-11 pl-9 relative gap-[22px] mq450:pr-5 mq450:box-border">
                  <div className="w-full h-[41px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
                  <div className="self-stretch flex flex-row items-start justify-start relative">
                    <div className="my-0 mx-[!important] absolute top-[-3px] right-[-32px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="w-[34px] h-[34px] relative"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="w-[34px] h-[34px] relative"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <div className="h-[180px] flex-1 relative overflow-hidden z-[1]">
                      <img
                        className="absolute h-[calc(100%_-_17px)] top-[8px] bottom-[9px] left-[22px] max-h-full w-[146px] object-cover"
                        loading="eager"
                        alt=""
                        src="/eos250d03500x500-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2">
                    <div className="relative leading-[24px] font-medium z-[1]">
                      Add To Cart
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px] text-button">
                  <div className="relative leading-[24px] font-medium">
                    CANON EOS DSLR Camera
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $360
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
                        (95)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
                <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-center p-[35px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] relative">
                    <div className="my-0 mx-[!important] absolute top-[-23px] right-[-23px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="w-[34px] h-[34px] relative"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="w-[34px] h-[34px] relative"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <div className="h-[180px] flex-1 relative overflow-hidden z-[1]">
                      <img
                        className="absolute w-[calc(100%_-_18px)] top-[0px] right-[9px] left-[9px] max-w-full overflow-hidden h-[180px] object-cover"
                        loading="eager"
                        alt=""
                        src="/ideapadgaming3i01500x500-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    ASUS FHD Gaming Laptop
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $700
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
                        (325)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[220px] max-w-[270px]">
                <div className="self-stretch h-[250px] rounded bg-secondary overflow-hidden shrink-0 flex flex-row items-start justify-start pt-3 pb-[45px] pr-3 pl-[49px] box-border gap-[3px] mq450:pl-5 mq450:box-border">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
                      loading="eager"
                      alt=""
                      src="/curologyj7pkvqrtusmunsplash-1@2x.png"
                    />
                  </div>
                  <div className="h-[180px] w-[190px] relative overflow-hidden shrink-0 hidden" />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-eye.svg"
                    />
                  </div>
                </div>
                <div className="w-[198px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">{`Curology Product Set `}</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $500
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                      <div className="flex-1 flex flex-row items-start justify-start">
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
                      <div className="w-10 relative leading-[21px] font-semibold inline-block shrink-0">
                        (145)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
                <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-eye.svg"
                    />
                  </div>
                  <button className="cursor-pointer [border:none] p-1 bg-button1 absolute top-[12px] left-[12px] rounded w-[51px] flex flex-row items-center justify-center box-border hover:bg-limegreen">
                    <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                      NEW
                    </div>
                  </button>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                    <img
                      className="absolute w-[calc(100%_-_10px)] top-[calc(50%_-_66px)] right-[5px] left-[5px] max-w-full overflow-hidden h-[133px] object-cover"
                      loading="eager"
                      alt=""
                      src="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[190px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Kids Electric Car
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $960
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                      <div className="flex-1 flex flex-row items-start justify-start">
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
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/group-1000005935.svg"
                    />
                    <div className="h-5 w-5 relative rounded-[50%] bg-secondary-2" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
                <div className="self-stretch h-[250px] rounded bg-secondary overflow-hidden shrink-0 flex flex-col items-end justify-start p-3 box-border">
                  <div className="flex flex-col items-start justify-start relative gap-[8px]">
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-eye.svg"
                    />
                    <div className="w-[190px] h-[180px] absolute my-0 mx-[!important] bottom-[-127px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                      <img
                        className="absolute w-[calc(100%_-_4px)] top-[8px] right-[2px] left-[2px] max-w-full overflow-hidden h-[164px] object-cover"
                        alt=""
                        src="/copa-sense-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[191px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Jr. Zoom Soccer Cleats
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $1160
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                      <div className="flex-1 flex flex-row items-start justify-start">
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
                        (35)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/group-1000005935-1.svg"
                    />
                    <div className="h-5 w-5 relative rounded-[50%] bg-secondary-2" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
                <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="w-[34px] h-[34px] relative"
                      alt=""
                      src="/fill-eye.svg"
                    />
                  </div>
                  <button className="cursor-pointer [border:none] p-1 bg-button1 absolute top-[12px] left-[12px] rounded w-[51px] flex flex-row items-center justify-center box-border hover:bg-limegreen">
                    <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left">
                      NEW
                    </div>
                  </button>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                    <img
                      className="absolute w-[calc(100%_-_12px)] top-[15px] right-[6px] left-[6px] max-w-full overflow-hidden h-[150px] object-cover"
                      loading="eager"
                      alt=""
                      src="/gp11-prd3-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    GP11 Shooter USB Gamepad
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $660
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
                        (55)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/group-1000005935-2.svg"
                    />
                    <div className="h-5 w-5 relative rounded-[50%] bg-secondary-2" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
                <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-center justify-center p-[35px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] relative">
                    <div className="my-0 mx-[!important] absolute top-[-23px] right-[-23px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="w-[34px] h-[34px] relative"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="w-[34px] h-[34px] relative"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <img
                      className="h-[180px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      alt=""
                      src="/frame-608@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[190px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Quilted Satin Jacket
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        $660
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-700">
                      <div className="flex-1 flex flex-row items-start justify-start">
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
                        (55)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/group-1000005935-3.svg"
                    />
                    <div className="h-5 w-5 relative rounded-[50%] bg-secondary-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-4 bg-secondary-2 w-[234px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-salmon">
            <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-text text-left">
              View All Products
            </div>
          </button>
        </section>
        <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[60px] min-h-[876px] max-w-full text-left text-base text-secondary-2 font-title-16px-regular mq750:gap-[30px]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="h-10 w-5 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
              </div>
              <div className="relative leading-[20px] font-semibold">
                Featured
              </div>
            </div>
            <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
              New Arrival
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-5xl text-text mq1050:flex-wrap">
            <div className="flex-[0.8965] rounded bg-button overflow-hidden flex flex-row items-end justify-center py-0 pr-[30px] pl-[29px] box-border min-w-[370px] min-h-[600px] max-w-full mq450:min-w-full mq1050:flex-1 mq1050:min-h-[auto]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[357px] px-[3px] pb-8 box-border gap-[16px] bg-[url('/ps5slimgoedkopeplaystation-large-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[232px] mq750:pb-[21px] mq750:box-border">
                <img
                  className="self-stretch h-[511px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/ps5slimgoedkopeplaystation-large-1@2x.png"
                />
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[1] mq450:text-lgi mq450:leading-[19px]">
                  PlayStation 5
                </h3>
                <div className="w-[242px] relative text-sm leading-[21px] inline-block z-[1]">
                  Black and White version of the PS5 coming out on sale.
                </div>
                <div className="w-[81px] h-6 flex flex-col items-start justify-start text-base text-bg">
                  <div className="relative leading-[24px] font-medium z-[1]">
                    Shop Now
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/underline-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[370px] max-w-full mq450:min-w-full mq750:gap-[16px] mq1050:flex-1">
              <div className="self-stretch h-[284px] relative rounded bg-gray-100 overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[138px] w-[432px] h-[286px] object-contain"
                  loading="eager"
                  alt=""
                  src="/attractivewomanwearinghatposingblackbackground-1@2x.png"
                />
                <h3 className="m-0 absolute top-[138px] left-[24px] text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[1] mq450:text-lgi mq450:leading-[19px]">
                  Women’s Collections
                </h3>
                <div className="absolute top-[178px] left-[24px] text-sm leading-[21px] inline-block w-[255px] z-[1]">
                  Featured woman collections that give you another vibe.
                </div>
                <div className="absolute top-[236px] left-[24px] w-[81px] h-6 flex flex-col items-start justify-start text-base text-bg">
                  <div className="relative leading-[24px] font-medium">
                    Shop Now
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/underline-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq750:flex-wrap">
                <div className="flex-[0.9095] rounded bg-button overflow-hidden flex flex-col items-start justify-end py-6 pr-[55px] pl-6 box-border gap-[8px] min-w-[230px] min-h-[284px] mq450:pr-5 mq450:box-border mq450:flex-1 mq750:min-h-[auto]">
                  <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[2] mq450:text-lgi mq450:leading-[19px]">
                    Speakers
                  </h3>
                  <div className="flex flex-row items-start justify-start relative text-sm">
                    <div className="w-[210px] my-0 mx-[!important] absolute top-[-176px] right-[-25px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-px box-border z-[1]">
                      <div className="h-[221px] flex-1 relative">
                        <div className="absolute h-[calc(100%_-_25px)] top-[13px] bottom-[12px] left-[7px] w-[196px] flex items-center justify-center">
                          <img
                            className="h-full max-h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(4.061)]"
                            alt=""
                            src="/ellipse-24.svg"
                          />
                        </div>
                        <img
                          className="absolute h-full top-[0px] bottom-[0px] left-[10px] max-h-full w-[190px] object-cover"
                          loading="eager"
                          alt=""
                          src="/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="relative leading-[21px] z-[2]">
                      Amazon wireless speakers
                    </div>
                  </div>
                  <div className="w-[81px] h-6 flex flex-col items-start justify-start text-base text-bg">
                    <div className="relative leading-[24px] font-medium z-[2]">
                      Shop Now
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                      alt=""
                      src="/underline-1.svg"
                    />
                  </div>
                </div>
                <div className="h-[284px] flex-1 rounded bg-button overflow-hidden flex flex-col items-start justify-start pt-[135px] pb-16 pr-9 pl-6 box-border gap-[8px] min-w-[230px] mq750:pt-[88px] mq750:pb-[42px] mq750:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start relative">
                    <div className="h-[238px] w-[238px] absolute my-0 mx-[!important] bottom-[96px] left-[calc(50%_-_113px)] flex items-center justify-center z-[0]">
                      <img
                        className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(3.521)]"
                        alt=""
                        src="/ellipse-24-1.svg"
                      />
                    </div>
                    <div className="h-[222px] flex-1 relative overflow-hidden z-[1]">
                      <img
                        className="absolute w-[calc(100%_-_9px)] top-[calc(50%_-_103px)] right-[5px] left-[4px] max-w-full overflow-hidden h-[203px] object-cover"
                        loading="eager"
                        alt=""
                        src="/652e82cd70aa6522dd785109a455904c@2x.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[2] mq450:text-lgi mq450:leading-[19px]">
                    Perfume
                  </h3>
                  <div className="w-[191px] relative text-sm leading-[21px] inline-block z-[2]">
                    GUCCI INTENSE OUD EDP
                  </div>
                  <div className="w-[81px] h-6 flex flex-col items-start justify-start text-base text-bg">
                    <div className="relative leading-[24px] font-medium z-[2]">
                      Shop Now
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[3]"
                      alt=""
                      src="/underline-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className="w-full h-0 absolute my-0 mx-[!important] top-[142px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/line-3.svg"
        />
        <section className="w-[1302px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
          <div className="w-[1102px] flex flex-col items-end justify-start gap-[62px] max-w-full lg:gap-[31px] mq750:gap-[15px]">
            <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-button font-title-16px-regular">
              <div className="w-[943px] flex flex-row flex-wrap items-center justify-between gap-[20px] max-w-full">
                <div className="flex flex-col items-center justify-start gap-[24px]">
                  <img
                    className="w-20 h-20 relative"
                    loading="eager"
                    alt=""
                    src="/services.svg"
                  />
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
                  <img
                    className="w-20 h-20 relative"
                    alt=""
                    src="/services-1.svg"
                  />
                  <div className="flex flex-col items-center justify-start py-0 px-[7px] gap-[8px]">
                    <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                      24/7 CUSTOMER SERVICE
                    </div>
                    <div className="relative text-sm leading-[21px]">
                      Friendly 24/7 customer support
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start gap-[24px] min-w-[166px]">
                  <img
                    className="w-20 h-20 relative"
                    alt=""
                    src="/services-3.svg"
                  />
                  <div className="flex flex-col items-center justify-start gap-[8px]">
                    <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                      MONEY BACK GUARANTEE
                    </div>
                    <div className="relative text-sm leading-[21px]">
                      We reurn money within 30 days
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
              </div>
            </header>
            <img
              className="w-[46px] h-[46px] relative object-contain"
              loading="eager"
              alt=""
              src="/fill-with-up-arrow.svg"
            />
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
                        src="/googleplay2.svg"
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
          <footer className="self-stretch h-10 flex flex-col items-center justify-start gap-[16px] opacity-[0.4] max-w-full text-left text-base text-bg font-title-16px-regular">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/underline-5.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 px-5 box-border opacity-[0.6] max-w-full">
              <div className="flex flex-row items-center justify-start gap-[6px] max-w-full">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconcopyright.svg"
                />
                <div className="relative leading-[24px]">
                  Copyright Rimel 2022. All right reserved
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    );
  };
  
  export default AccountDropdownWithAccount;
  