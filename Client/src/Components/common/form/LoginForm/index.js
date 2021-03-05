import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useToken from "../../../../utility/useToken";
import axios from "axios";

import "./LoginForm.css";
import SubmitButton from "../../buttons/SubmitButton";
import FormItem from "../FormItem";

import { emailValid, passwordValid } from "../../../../utility/utilities";

const LoginForm = (props) => {
  const history = useHistory();
  const { token, setToken } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { checkoutLogin, setUser, setLoggedIn } = props;

  const goToAccount = () => {
    history.push("/account");
  };

  const goToCheckoutPage = () => {
    history.push("/shipping-checkout");
  };

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
          setToken(res.data.JWT);
          checkoutLogin ? goToCheckoutPage() : goToAccount();
        })
        .catch((error) => {
          if (error.response) {
            setError(
              "The email and password you entered did not match our records. Please double check and try again"
            );
          }
          setUser("");
          setLoggedIn(false);
          setEmail("");
          setPassword("");
        });
      setError("");
    }
  };

  useEffect(() => {
    if (token) {
      axios({
        method: "GET",
        url: "user/account",
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          setUser(res.data);
          setLoggedIn(true);
        })
        .catch(() => {
          setUser("");
          setLoggedIn(false);
        });
    }
  }, [token, setUser, setLoggedIn]);

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
