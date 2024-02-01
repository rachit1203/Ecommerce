import { useMemo } from "react";

const TopHeader = ({
  dropDown,
  topHeaderPosition,
  topHeaderTop,
  topHeaderLeft,
}) => {
  const topHeaderStyle = useMemo(() => {
    return {
      position: topHeaderPosition,
      top: topHeaderTop,
      left: topHeaderLeft,
    };
  }, [topHeaderPosition, topHeaderTop, topHeaderLeft]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-text">
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
      <select className="bg-[transparent] [border:none] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] font-title-16px-regular text-sm text-text" />
    </div>
  </div>
  </div>
  );
};

export default TopHeader;
