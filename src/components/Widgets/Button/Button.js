import React from "react";

import "./Button.css";

const Button = ({ className, label, onClick }) => {
  return (
    <div className={"btn " + (className || "")} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
