import React from "react";

import "./LoginSection.css";
import LoginForm from "../../../common/form/LoginForm";

const LoginSection = (props) => {
  return (
    <div className="c-LoginSection">
      <div>
        <h2 className="main-header">LOGIN</h2>
        <h4>HAVE AN ACCOUNT?</h4>
      </div>
      <LoginForm setLoggedIn={props.setLoggedIn} setUser={props.setUser} />
    </div>
  );
};

export default LoginSection;
