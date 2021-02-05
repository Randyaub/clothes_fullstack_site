import React, { useState } from "react";
import axios from "axios";

import "./LoginForm.css";
import SubmitButton from "../../buttons/SubmitButton";
import FormItem from "../FormItem";

import { emailValid, passwordValid } from "../../../../utilities";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = () => {
    if (emailValid(email, setError) === false) return false;
    if (passwordValid(password, setError) === false) return false;
    return true;
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    if (isValid()) {
      axios
        .post("user/login", {
          email: email.trim(),
          password: password.trim(),
        })
        .then((res) => {
          setError("");
          localStorage.setItem("token", res.data.JWT);
          props.setUserLoggedIn(true);
          props.goToHomePage();
        })
        .catch((error) => {
          if (error.response) {
            setError(
              "The email and password you entered did not match our records. Please double check and try again"
            );
          }
          setEmail("");
          setPassword("");
        });
      setError("");
    }
  };

  return (
    <>
      <div className="c-LoginForm__error">{error}</div>
      <form onSubmit={handleLogIn}>
        <FormItem
          labelName={"EMAIL ADDRESS"}
          inputName={email}
          inputValue={email}
          inputPlaceHolder={"Email"}
          inputSetFunction={setEmail}
          inputClassName={"c-LoginForm__input"}
        />
        <FormItem
          labelName={"PASSWORD"}
          inputName={password}
          inputValue={password}
          inputPlaceHolder={"Password"}
          inputSetFunction={setPassword}
          inputClassName={"c-LoginForm__input"}
        />
        <div className="l-LoginForm__button">
          <SubmitButton buttonText={"LOG IN"} />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
