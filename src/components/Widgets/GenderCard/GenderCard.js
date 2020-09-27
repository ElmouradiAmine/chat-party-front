import React from "react";

import "./GenderCard.css";

const GenderCard = ({ gender, selected, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={
        "gender-card gender-card--" +
        gender +
        (selected ? " gender-card--selected " : " ") +
        className
      }
    >
      <img
        src={"/images/svgs/gender-" + gender + "-outline.svg"}
        alt="svg gender male female icon"
        className="gender-card__image"
      />

      <p className="gender-card__label">{gender}</p>
    </div>
  );
};

export default GenderCard;
