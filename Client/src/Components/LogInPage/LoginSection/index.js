import React, { useState } from "react";

import "./LoginSection.css";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = () => {
    if (!email.includes("@") || !email.includes(".") || !email || !password) {
      setError(
        "The email and password you entered did not match our records. Please double check and try again"
      );
      return false;
    }
    return true;
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    if (isValid()) {
      setError("");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="c-LoginSection">
      <div className="c-LogInPage__header">
        <h1>LOGIN</h1>
        <h4>HAVE AN ACCOUNT?</h4>
        <h5>PLEASE LOG IN USING YOUR EMAIL ADDRESS</h5>
        <h4 className="c-LoginSection__error">{error}</h4>
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
            type="text"
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
