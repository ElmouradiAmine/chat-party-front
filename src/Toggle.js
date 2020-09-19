import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  return (
    <div className={props.className}>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={64}
        className="header-content__toggle"
      ></DarkModeToggle>
    </div>
  );
};

export default Toggle;
