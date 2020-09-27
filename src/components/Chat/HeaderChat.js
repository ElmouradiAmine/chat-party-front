import React from "react";

import "./HeaderChat.css";

const HeaderChat = ({ user, stranger }) => {
  return (
    <div className="chat__header">
      <div
        className="header__stranger-container"
        style={{
          visibility: stranger ? "visible" : "hidden",
        }}
      >
        <img
          src={`https://www.countryflags.io/ma/flat/64.png`}
          alt="flag country "
          className="header__flag"
        />
        <p className="header__username">{stranger?.username}</p>
        <img
          src={`/images/svgs/gender-${stranger?.gender}.svg`}
          alt=""
          className="header__gender"
        />
      </div>

      <div className="header__user-container">
        <img
          src={`https://www.countryflags.io/ma/flat/64.png`}
          alt="flag country "
          className="header__flag"
        />
        <p className="header__username">{user.username}</p>
        <img
          src={`/images/svgs/gender-${user.gender}.svg`}
          alt=""
          className="header__gender"
        />
      </div>
    </div>
  );
};

export default HeaderChat;
