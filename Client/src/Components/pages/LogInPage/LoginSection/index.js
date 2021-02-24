import React from "react";

import "./LoginSection.css";
import LoginForm from "../../../common/form/LoginForm";

const LoginSection = (props) => {
  return (
    <div className="c-LoginSection">
      <div>
        <h1 className="main-header">LOGIN</h1>
        <h3>HAVE AN ACCOUNT?</h3>
      </div>
      <LoginForm setLoggedIn={props.setLoggedIn} setUser={props.setUser} />
    </div>
  );
};

export default LoginSection;
