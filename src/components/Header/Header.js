import React from "react";

import Toggle from "../Widgets/Toggle/Toggle";

import "./Header.css";

const Header = () => {
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
        {/* TODO: FIX the switch */}
        {/* <Toggle className="header-content__toggle"></Toggle> */}
      </div>
    </header>
  );
};

export default Header;
