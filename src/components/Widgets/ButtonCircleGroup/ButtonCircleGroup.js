import React from "react";

import "./ButtonCircleGroup.css";

import ButtonCircle from "./ButtonCircle";
const ButtonCircleGroup = ({ className }) => {
  return (
    <div className={"buttonCircleGroup " + className}>
      <ButtonCircle color="red"></ButtonCircle>
      <ButtonCircle color="yellow"></ButtonCircle>
      <ButtonCircle color="green"></ButtonCircle>
    </div>
  );
};

export default ButtonCircleGroup;
