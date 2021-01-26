import React, { useState } from "react";
import axios from "axios";

import Label from "../Label";

import "./LoginForm.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <>
      <div className="c-LoginForm__error">{error}</div>
      <form onSubmit={handleLogIn}>
        <Label name={"EMAIL ADDRESS:"} />
        <input
          className="c-LoginForm__input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <Label name={"PASSWORD:"} />
        <input
          className="c-LoginForm__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div>
          <input className="default-btn" type="submit" value="LOG IN"></input>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
