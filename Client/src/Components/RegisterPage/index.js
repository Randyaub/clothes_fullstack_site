import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Input from "./Input";

import "./RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const isValid = () => {
    let emailError = "";
    let confirmError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (!email) {
      emailError = "Please enter an email address";
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

    if (emailError || confirmError || passwordError || confirmPasswordError) {
      setEmailError(emailError);
      setConfirmEmailError(confirmError);
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);
      return false;
    }
    return true;
  };

  const resetErrors = () => {
    setEmailError("");
    setConfirmEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (isValid()) {
      axios
        .post("user/register", {
          email: email.trim(),
          password: password.trim(),
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
    <>
      <div className="c-RegisterPage-have">
        <h3>ALREADY HAVE AN ACCOUNT?</h3>
        <Link to="/account/login">
          <button className="c-RegisterPage__button">
            <i className="fas fa-arrow-left c-RegisterPage__arrow"></i>BACK TO
            LOGIN
          </button>
        </Link>
      </div>
      <section className="c-RegisterPage">
        <div className="c-RegisterPage__register">
          <div className="c-RegisterPage__join">
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
            <div>
              <input
                className="c-RegisterPage__button"
                type="submit"
                value="CONFIRM"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
