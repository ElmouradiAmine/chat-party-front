import React, { useState } from "react";

import ButtonCircleGroup from "../Widgets/ButtonCircleGroup/ButtonCircleGroup";
import GenderCard from "../Widgets/GenderCard/GenderCard";
import Button from "../Widgets/Button/Button";

import "./Connection.css";
import "../../Utilities.css";

const Connection = ({ onSubmit }) => {
  const [username, setUserName] = useState("");
  const [gender, setGender] = useState(null);

  const [errorMessages, setErrorMessages] = useState([]);
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);
  const [genderIsInvalid, setGenderIsInvalid] = useState(false);

  const validate = () => {
    let isValid = true;
    const errors = [];
    setUsernameIsInvalid(false);
    setGenderIsInvalid(false);

    if (username === "") {
      errors.push("Username can't be empty.");
      setUsernameIsInvalid(true);

      isValid = false;
    }

    if (!gender) {
      errors.push("Please select a gender.");
      setGenderIsInvalid(true);
      isValid = false;
    }
    setErrorMessages(errors);

    return isValid;
  };

  return (
    <div className="connection">
      <div className="connection-form">
        <ButtonCircleGroup className="connection-form__button-circle-group"></ButtonCircleGroup>

        <input
          type="text"
          placeholder="Username"
          className={
            "connection-form__input " +
            (!usernameIsInvalid || "error-underline")
          }
          max="12"
          maxLength="12"
          onChange={(event) => {
            setUserName(event.target.value);
            setUsernameIsInvalid(false);
          }}
        />
        <div className="connection-form__gender-container">
          <GenderCard
            className={!genderIsInvalid || "error-underline"}
            selected={gender === "male"}
            gender="male"
            onClick={() => {
              setGender("male");
              setGenderIsInvalid(false);
            }}
          />
          <GenderCard
            className={!genderIsInvalid || "error-underline"}
            selected={gender === "female"}
            gender="female"
            onClick={() => {
              setGender("female");
              setGenderIsInvalid(false);
            }}
          />
        </div>

        <Button
          label="Join"
          onClick={() => {
            if (validate()) {
              onSubmit({
                username,
                gender,
                country: "ma",
              });
            }
          }}
        />
      </div>
      <div className="connection__error-container">
        {errorMessages.map((errorMessage) => (
          <p className="connection__error-message">{errorMessage}</p>
        ))}
      </div>
    </div>
  );
};

export default Connection;
