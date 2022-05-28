import React from "react";
import "./Step1.scss";

import Button from "@mui/material/Button";
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
          <div className="form__email-container">
            <label className="form__email">
              Email Address:
              <input
                onChange={handleEmail}
                value={email}
                type="email"
                name="email"
              />
              <div style={{ color: "red" }}>{emailError}</div>
            </label>
          </div>
          <div className="button__step1">
            <Button
              className="step1Button"
              onClick={step1Validation}
              style={{ fontSize: "10px", backgroundColor: "purple" }}
              variant="contained"
            >
              {"Next >"}
            </Button>
          </div>
        </label>
      </label>
    </div>
  );
};
