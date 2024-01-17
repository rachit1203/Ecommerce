import React from "react";
// import { DropDown } from "./DropDown";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="top-header">
      <div className="frame">
        <div className="div">
          <p className="text-wrapper">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <div className="text-wrapper-2">ShopNow</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-3">English</div>
          {/* <DropDown className="drop-down" color="white" /> */}
        </div>
      </div>
    </div>
  );
};
