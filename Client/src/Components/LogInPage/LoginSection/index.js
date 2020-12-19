import React, { useState } from "react";
import axios from "axios";

import "./LoginSection.css";

const LoginSection = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const isValid = () => {
    if (!email) {
      setError("Please enter your email");
      return false;
    }
    if (!password) {
      setError("Please enter your password");
      return false;
    }
    if (password.length < 8) {
      setError("Your password must be at least 8 character");
      return false;
    }
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
    <div className="c-LoginSection">
      <div className="c-LogInPage__header">
        <h1>LOGIN</h1>
        <h4>HAVE AN ACCOUNT?</h4>
        <h5>PLEASE LOG IN USING YOUR EMAIL ADDRESS</h5>
        <div className="c-LoginSection__error">{error}</div>
      </div>
      <form onSubmit={handleLogIn}>
        <label>
          <div className="c-LoginSection__label">EMAIL ADDRESS:</div>
          <input
            className="c-LoginSection__input"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          <div className="c-LoginSection__label">PASSWORD:</div>
          <input
            className="c-LoginSection__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <div>
          <input
            className="c-LogInPage__button"
            type="submit"
            value="LOG IN"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default LoginSection;
