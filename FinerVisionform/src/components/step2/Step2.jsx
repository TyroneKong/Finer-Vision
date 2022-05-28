import React from "react";
import "./Step2.scss";
import Button from "@mui/material/Button";

export const Step2 = ({
  showStep2,
  step2show,
  telephoneRef,
  handleTelephone,
  telephone,
  telephoneError,
  handleGender,
  handleDay,
  handleMonth,
  handleYear,
  day,
  month,
  year,
  DOBError,
  step2Validation,
}) => {
  return (
    <div>
      <div>
        <p onClick={showStep2} className="form__moreComments-paragraph">
          Step 2: More Comments
        </p>
      </div>
      <label className={step2show ? "form__moreComments" : "hide"}>
        <label className="form__telephone">
          Telephone
          <input
            ref={telephoneRef}
            onChange={handleTelephone}
            value={telephone}
          />
          <div style={{ color: "red" }}>{telephoneError}</div>
          Date of birth
        </label>
        <label className="form__gender"> Gender</label>

        <select className="form__moreComments-select" onChange={handleGender}>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label className="form__DOB">
          <input
            onChange={handleDay}
            maxLength="2"
            className="form__DOB--field1"
            value={day}
          ></input>
          <input
            onChange={handleMonth}
            maxLength="2"
            className="form__DOB--field2"
            value={month}
          ></input>
          <input
            onChange={handleYear}
            maxLength="2"
            className="form__DOB--field3"
            value={year}
          ></input>
        </label>
        <div className="dobError" style={{ color: "red" }}>
          {DOBError}
        </div>
        <div className="button__step2">
          <Button
            className="step2Button"
            onClick={step2Validation}
            style={{ fontSize: "10px", backgroundColor: "purple" }}
            variant="contained"
          >
            {"Next >"}
          </Button>
        </div>
      </label>
    </div>
  );
};
