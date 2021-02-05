import React, { useState } from "react";
import axios from "axios";

import "./RegisterPage.css";
import LinkButton from "../../common/buttons/LinkButton";
import SubmitButton from "../../common/buttons/SubmitButton";
import FormItem from "../../common/form/FormItem";
import {
  emailValid,
  passwordValid,
  emailsAreEqual,
  passwordsAreEqual,
  inputsNotEmpty,
} from "../../../utility/utilities";

const RegisterPage = () => {
  //Forms Inputs
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //Forms Errors
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const isValid = () => {
    let emailValidation = emailValid(email, setEmailError);
    let passwordValidation = passwordValid(password, setPasswordError);
    let firstNameValidation = inputsNotEmpty(
      firstName,
      setFirstNameError,
      "Please enter your first name"
    );
    let lastNameValidation = inputsNotEmpty(
      lastName,
      setLastNameError,
      "Please enter your last name"
    );
    let confirmEmailValidation = emailsAreEqual(
      email,
      confirmEmail,
      setConfirmEmailError
    );
    let confirmPasswordValidation = passwordsAreEqual(
      password,
      confirmPassword,
      setConfirmPasswordError
    );

    if (
      emailValidation === false ||
      passwordValidation === false ||
      firstNameValidation === false ||
      lastNameValidation === false ||
      confirmEmailValidation === false ||
      confirmPasswordValidation === false
    ) {
      return false;
    } else {
      return true;
    }
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
    //Allows erros to refresh on resubmit
    resetErrors();
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
    <div className="c-RegisterPage contianer">
      <div className="c-RegisterPage__backBtn">
        <h3>ALREADY HAVE AN ACCOUNT?</h3>
        <LinkButton
          url={"/account/login"}
          buttonText={"BACK TO LOGIN"}
          leftArrow={true}
          className={"default-btn small-btn"}
        />
      </div>
      <section className="c-RegisterPage__container">
        <div className="c-RegisterPage__message">
          <h1>PLEASE ENTER YOUR INFORMATION BELOW</h1>
          <h4>SIGN UP TO KEEP TRACK OFF YOUR ORDERS</h4>
        </div>
        <div className="c-RegisterPage__error">{generalError}</div>
        <form onSubmit={handleCreateAccount}>
          <div className="c-RegisterPage__formItem flex">
            <FormItem
              labelName={"EMAIL ADDRESS"}
              labelClassName={"c-RegisterPage__label"}
              inputClassName={"c-Input__input c-RegisterPage__input"}
              inputName={"email"}
              inputValue={email}
              inputPlaceHolder={"Email"}
              inputSetFunction={setEmail}
              error={emailError}
            />
          </div>
          <div className="c-RegisterPage__formItem flex">
            <FormItem
              labelName={"CONFIRM EMAIL ADDRESS"}
              labelClassName={"c-RegisterPage__label"}
              inputClassName={"c-Input__input c-RegisterPage__input"}
              inputName={"confirmEmail"}
              inputValue={confirmEmail}
              inputPlaceHolder={"Confirm Email"}
              inputSetFunction={setConfirmEmail}
              error={confirmEmailError}
            />
          </div>
          <div className="c-RegisterPage__formItem flex">
            <FormItem
              labelName={"PASSWORD"}
              labelClassName={"c-RegisterPage__label"}
              inputClassName={"c-Input__input c-RegisterPage__input"}
              inputName={"password"}
              inputValue={password}
              inputPlaceHolder={"Password"}
              inputSetFunction={setPassword}
              error={passwordError}
            />
          </div>
          <div className="c-RegisterPage__formItem flex">
            <FormItem
              labelName={"CONFIRM PASSWORD"}
              labelClassName={"c-RegisterPage__label"}
              inputClassName={"c-Input__input c-RegisterPage__input"}
              inputName={"confirmPassword"}
              inputValue={confirmPassword}
              inputPlaceHolder={"Confirm Password"}
              inputSetFunction={setConfirmPassword}
              error={confirmPasswordError}
            />
          </div>
          <div className="c-RegisterPage__formItem flex">
            <FormItem
              labelName={"FIRST NAME"}
              labelClassName={"c-RegisterPage__label"}
              inputClassName={"c-Input__input c-RegisterPage__input"}
              inputName={"firstName"}
              inputValue={firstName}
              inputPlaceHolder={"First Name"}
              inputSetFunction={setFirstName}
              error={firstNameError}
            />
          </div>
          <div className="c-RegisterPage__formItem flex">
            <FormItem
              labelName={"LAST NAME"}
              labelClassName={"c-RegisterPage__label"}
              inputClassName={"c-Input__input c-RegisterPage__input"}
              inputName={"lastName"}
              inputValue={lastName}
              inputPlaceHolder={"Last Name"}
              inputSetFunction={setLastName}
              error={lastNameError}
            />
          </div>
          <div className="l-RegisterPage__button">
            <SubmitButton
              buttonText={"CONFIRM"}
              className={"default-btn small-btn"}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
