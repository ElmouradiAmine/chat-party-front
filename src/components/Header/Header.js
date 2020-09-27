import React, {useState, useEffect} from "react";

import "./Header.css";

// import Toggle from "../Widgets/Toggle/Toggle";

const Header = ({count}) => {
  
  console.log(count);
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/images/linux-logo.png"
          alt="logo linux chat party"
          className="header-content__logo logo"
        />
        <h1 className="header-content__logo-text logo-text">
          Chat <span className="logo-text--party">Party</span>
        </h1>

      <div className="online">
<div className="green-circle">
</div>
{(count+1) + " online."}

      </div>

        {/* TODO: FIX the switch */}
        {/* <Toggle className="header-content__toggle"></Toggle> */}
      </div>
    </header>
  );
};

export default Header;
