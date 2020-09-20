import React from "react";

import ButtonCircleGroup from "../Widgets/ButtonCircleGroup/ButtonCircleGroup";
import GenderCard from "../Widgets/GenderCard/GenderCard";
import Button from "../Widgets/Button/Button";

import "./Connection.css";
import "../../Utilities.css";

const Connection = () => {
  return (
    <div className="connection">
      <form action="" className="connection-form">
        <ButtonCircleGroup className="connection-form__button-circle-group"></ButtonCircleGroup>

        <input
          type="text"
          placeholder="Username"
          className="connection-form__input"
        />
        <div className="connection-form__gender-container">
          <GenderCard gender="male"></GenderCard>
          <GenderCard gender="female"></GenderCard>
        </div>

        <Button label="Join"></Button>
      </form>
    </div>
  );
};

export default Connection;
