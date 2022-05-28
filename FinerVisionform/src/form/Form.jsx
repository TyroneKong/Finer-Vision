import React, { useState, useRef } from "react";
import "./Form.scss";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Step1 } from "../components/step1/Step1";
import { Step2 } from "../components/step2/Step2";
import { Step3 } from "../components/step3/Step3";

export const Form = () => {
  // set state

  // setting state for collapsing titles
  const [step1show, setStep1Show] = useState(true);
  const [step2show, setStep2Show] = useState(true);
  const [step3show, setStep3Show] = useState(true);

  // setting state for inputs
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [DOB, setDOB] = useState("");
  const [comment, setComment] = useState("");

  //setting state for input errors
  const [firstNameError, setFirstNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState(null);
  const [DOBError, setDOBError] = useState("");
  const [gender, setGender] = useState("");
  // is form valid
  const [step1FormValid, setStep1FormValid] = useState(false);
  const [step2FormValid, setStep2FormValid] = useState(false);
  // setting state for DOB to be able to validate
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // focus on input upon clicking next
  const telephoneRef = useRef();
  const commentRef = useRef();

  //reset all forms

  const resetForm = () => {
    resetStep1();
    resetStep2();
  };

  //reset step1
  const resetStep1 = () => {
    setFirstNameError("");
    setSurnameError("");
    setEmailError("");
  };

  //reset step2
  const resetStep2 = () => {
    setTelephoneError("");
    setDOBError("");
  };

  // check valid email

  function isEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return "Invalid Email";
    }
  }

  // handle user input and amend state

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleTelephone = (e) => {
    setTelephone(e.target.value);
  };

  // handlers to capture DOB
  const handleDay = (e) => {
    setDay(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  // Capture date of birth and store as a variable

  const DateOfBirth = `${day}/${month}/${year}`;

  // check for valid date using moment
  const since = DateOfBirth;
  let date = moment(since, "DD/MM/YYYY");
  let isValid = date.isValid();

  // collapse step sections
  const showStep1 = () => {
    step1show ? setStep1Show(false) : setStep1Show(true);
  };

  const showStep2 = () => {
    step2show ? setStep2Show(false) : setStep2Show(true);
  };

  const showStep3 = () => {
    step3show ? setStep3Show(false) : setStep3Show(true);
  };

  // user input object
  const userInput = {
    firstname: firstName,
    surname: surname,
    email: email,
    telephone: telephone,
    dob: DOB,
    gender: gender,
    comment: comment,
  };

  //get data
  const getData = () => {
    axios
      .get("http://localhost:8080/formdata")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // post data
  const postData = () => {
    axios
      .post("http://localhost:8080/formdata", userInput)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  };

  // form validation
  const step1Validation = () => {
    if (firstName === "") {
      setFirstNameError("Please enter a first name");
    }
    if (surname === "") {
      setSurnameError("Please enter a surname");
    }
    if (isEmail(email)) {
      setEmailError("Please enter a valid email");
    } else {
      resetStep1();
      setStep1FormValid(true);
      telephoneRef.current.focus();
    }
    console.log(step1FormValid);
  };

  const step2Validation = () => {
    if (!telephone.match("[0-9]{10}")) {
      setTelephoneError("Please enter a valid number");
    }
    if (!isValid || DateOfBirth.length !== 8) {
      setDOBError("Please enter a valid date");
    } else {
      resetStep2();
      commentRef.current.focus();
      setStep2FormValid(true);
      setDOB(DateOfBirth);
    }
    console.log(step2FormValid);
  };

  const step3Validation = (e) => {
    e.preventDefault();
    postData();

    if (step1FormValid && step2FormValid === true) {
      Swal.fire({
        icon: "success",
        title: "Details have been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={step3Validation} className="form">
        <Step1
          showStep1={showStep1}
          step1show={step1show}
          handleFirstName={handleFirstName}
          firstName={firstName}
          firstNameError={firstNameError}
          handleSurname={handleSurname}
          surname={surname}
          surnameError={surnameError}
          handleEmail={handleEmail}
          email={email}
          emailError={emailError}
          step1Validation={step1Validation}
        />
        <Step2
          showStep2={showStep2}
          step2show={step2show}
          telephoneRef={telephoneRef}
          handleTelephone={handleTelephone}
          telephone={telephone}
          telephoneError={telephoneError}
          handleGender={handleGender}
          handleDay={handleDay}
          handleMonth={handleMonth}
          handleYear={handleYear}
          day={day}
          month={month}
          year={year}
          DOBError={DOBError}
          step2Validation={step2Validation}
        />

        <Step3
          showStep3={showStep3}
          step3show={step3show}
          handleComment={handleComment}
          comment={comment}
          commentRef={commentRef}
        />
      </form>
    </div>
  );
};
