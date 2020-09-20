import React from "react";

import "./Compose.css";

const Compose = ({ className }) => {
  return (
    <input
      className={"compose " + (className || "")}
      placeholder="Your message"
    ></input>
  );
};

export default Compose;
