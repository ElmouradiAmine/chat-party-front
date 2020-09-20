import React from "react";

import "./Button.css";

const Button = ({ className, label }) => {
  return <div className={"btn btn--green " + (className || "")}>{label}</div>;
};

export default Button;
