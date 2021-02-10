import React from "react";

import "./LoginSection.css";
import LoginForm from "../../../common/form/LoginForm";

const LoginSection = (props) => {
  return (
    <div className="c-LoginSection">
      <div>
        <h1 className="c-LoginSection__title">LOGIN</h1>
        <h3>HAVE AN ACCOUNT?</h3>
      </div>
      <LoginForm setUserLoggedIn={props.setUserLoggedIn} />
    </div>
  );
};

export default LoginSection;
