import React from "react";

import "./ButtonCircle.css";

const ButtonCircle = ({ color }) => {
  return <div className={"circle circle--" + color}></div>;
};

export default ButtonCircle;
