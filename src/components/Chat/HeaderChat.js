import React from "react";

import "./HeaderChat.css";

const HeaderChat = ({ username, gender, country }) => {
  return (
    <div className="chat__header">
      <img
        src={`https://www.countryflags.io/${country}/flat/64.png`}
        alt="flag country "
        className="header__flag"
      />
      <p className="header__username">{username}</p>
      <img
        src={`/images/svgs/gender-${gender}.svg`}
        alt=""
        className="header__gender"
      />
    </div>
  );
};

export default HeaderChat;
