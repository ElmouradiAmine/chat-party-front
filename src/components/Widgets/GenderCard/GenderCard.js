import React from "react";

import "./GenderCard.css";

const GenderCard = ({ gender, selected }) => {
  return (
    <div
      className={
        "gender-card gender-card--" +
        gender +
        (selected ? "gender-card--selected" : "")
      }
    >
      <img
        src={"/images/svgs/gender-" + gender + "-outline.svg"}
        alt="svg gender male female icon"
        className="gender-card__image"
        style={{}}
      />

      <p className="gender-card__label">{gender}</p>
    </div>
  );
};

export default GenderCard;
