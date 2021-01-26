import React, { useState } from "react";
import axios from "axios";

import Input from "./Input";

import "./RegisterPage.css";
import LinkButton from "../common/buttons/LinkButton";
import SubmitButton from "../common/buttons/SubmitButton";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const isValid = () => {
    let emailError = "";
    let confirmError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    let firstNameError = "";
    let lastNameError = "";

    if (!email) {
      emailError = "Please enter an email address";
    }
    if (!firstName) {
      firstNameError = "Please enter your name";
    }
    if (!lastName) {
      lastNameError = "Please enter your last name";
    }
    if (!email.includes("@") || !email.includes(".")) {
      emailError = "Please enter a valid email address";
    }
    if (email !== confirmEmail) {
      confirmError = "Email addresses do not match";
    }
    if (password.length < 8) {
      passwordError = "Your password must be at least 8 characters in length";
    }
    if (confirmPassword !== password) {
      confirmPasswordError = "Passwords do not match";
    }

    if (
      emailError ||
      confirmError ||
      passwordError ||
      confirmPasswordError ||
      firstNameError ||
      lastNameError
    ) {
      setEmailError(emailError);
      setConfirmEmailError(confirmError);
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);
      setFirstNameError(firstNameError);
      setLastNameError(lastNameError);
      return false;
    }
    return true;
  };

  const resetErrors = () => {
    setEmailError("");
    setConfirmEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setFirstNameError("");
    setLastNameError("");
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (isValid()) {
      axios
        .post("user/register", {
          email: email.trim(),
          password: password.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        })
        .then(() => {
          resetErrors();
          setGeneralError("ACCOUNT CREATED");
        })
        .catch((err) => {
          if (err.response.status === 409) {
            resetErrors();
            setGeneralError(
              "This email already exists in our system... Please use another"
            );
          } else if (err.response.status === 500) {
            resetErrors();
            setGeneralError(
              "There was a problem with the server. Account not created. Please try again later..."
            );
          }
        });
    }
  };

  return (
    <div className="c-RegisterPage">
      <div className="c-RegisterPage__back">
        <h3>ALREADY HAVE AN ACCOUNT?</h3>
        <div className="l-RegisterPage__button">
          <LinkButton
            url={"/account/login"}
            buttonText={"BACK TO LOGIN"}
            leftArrow={true}
          />
        </div>
      </div>
      <section className="c-RegisterPage__container">
        <div className="c-RegisterPage__message">
          <h1>PLEASE ENTER YOUR INFORMATION BELOW</h1>
          <h4>SIGN UP TO KEEP TRACK OFF YOUR ORDERS</h4>
        </div>
        <div className="c-RegisterPage__error">{generalError}</div>
        <form onSubmit={handleCreateAccount}>
          <Input
            name={"EMAIL ADDRESS"}
            value={email}
            placeholder={"Email"}
            setFunction={setEmail}
            error={emailError}
          />
          <Input
            name={"CONFIRM EMAIL ADDRESS"}
            value={confirmEmail}
            placeholder={"Confirm Email"}
            setFunction={setConfirmEmail}
            error={confirmEmailError}
          />
          <Input
            name={"PASSWORD"}
            pass={true}
            placeholder={"Password"}
            value={password}
            setFunction={setPassword}
            error={passwordError}
          />
          <Input
            name={"CONFIRM PASSWORD"}
            pass={true}
            placeholder={"Confirm Password"}
            value={confirmPassword}
            setFunction={setConfirmPassword}
            error={confirmPasswordError}
          />
          <Input
            name={"FIRST NAME"}
            placeholder={"First Name"}
            value={firstName}
            setFunction={setFirstName}
            error={firstNameError}
          />
          <Input
            name={"LAST NAME"}
            placeholder={"Last Name"}
            value={lastName}
            setFunction={setLastName}
            error={lastNameError}
          />
          <div className="l-RegisterPage__button">
            <SubmitButton buttonText={"CONFIRM"} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
