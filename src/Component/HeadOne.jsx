import React from "react";
import bell from "./Images/bell.png";
const HeadOne = () => {
  return (
    <div>
      <div className="mainNavbr">
        <div className="navbar">
          <input className="navbut1" type="button" value="Behance" />
          <input className="navbut" type="button" value="For You" />
          <input className="navbut" type="button" value="Discover" />
          <input className="navbut" type="button" value="Live" />
          <input className="navbut" type="button" value="Hire" />
          <input className="navbut" type="button" value="Jobs" />
          <input className="navsrh" type="search" value="Search..." />
        </div>
        <div className="Navbarrgside">
          <button className="bellbtbg">
            <img className="bellimg" src={bell} alt="" />
          </button>
          <input className="logbt" type="button" value="Log In" />
          <div className="sibtborder">
            <input className="Sibt" type="button" value="Sign In" />
          </div>
          <input className="bttrail" type="button" value="Free Trail" />
          <input className="Adobebt" type="button" value="Adobe" />
        </div>
      </div>
    </div>
  );
};

export default HeadOne;
