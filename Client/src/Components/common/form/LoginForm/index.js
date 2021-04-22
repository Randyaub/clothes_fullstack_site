import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import useToken from "../../../../utility/useToken";
import axios from "axios";
import SubmitButton from "../../buttons/SubmitButton";
import FormItem from "../FormItem";
import "./LoginForm.css";

import { emailValid, passwordValid } from "../../../../utility/utilities";
import { UserContext } from "../../../../utility/context/UserContext";

const LoginForm = ({ checkoutLogin, setUser, setLoggedIn }) => {
  const user = useContext(UserContext);
  const { token } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const history = useHistory();

  // const goToAccount = () => {
  //   history.push("/account");
  // };

  // const goToCheckoutPage = () => {
  //   history.push("/shipping-checkout");
  // };

  const isValid = () => {
    if (!emailValid(email, setError) || !passwordValid(password, setError)) {
      return false;
    } else {
      return true;
    }
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    if (isValid()) {
      user.logIn(email, password, setError);
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
          type={"password"}
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
