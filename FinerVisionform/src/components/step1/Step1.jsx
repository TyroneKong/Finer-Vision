import React from "react";
import "./Step1.scss";
import { Step1Button } from "./Step1Button";

export const Step1 = ({
  showStep1,
  step1show,
  handleFirstName,
  firstName,
  firstNameError,
  handleSurname,
  surname,
  surnameError,
  handleEmail,
  email,
  emailError,
  step1Validation,
}) => {
  return (
    <div>
      <p className="form__yourdetails-title" onClick={showStep1}>
        Step 1: Your details
      </p>
      <label className={step1show ? "form__yourdetails" : "hide"}>
        <label className="form__firstname">
          First Name
          <input onChange={handleFirstName} value={firstName} />
          <div style={{ color: "red" }}>{firstNameError}</div>
        </label>
        <label className="form__surname">
          Surname
          <input onChange={handleSurname} value={surname} />
          <div style={{ color: "red" }}>{surnameError}</div>
        </label>

        <label className="form__email">
          Email Address:
          <input
            onChange={handleEmail}
            value={email}
            type="email"
            name="email"
          />
          <div style={{ color: "red" }}>{emailError}</div>
          <div className="button__step1">
            <Step1Button step1Validation={step1Validation} />
          </div>
        </label>
      </label>
    </div>
  );
};
