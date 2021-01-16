import React from "react";

import "./LoginSection.css";
import LoginForm from "../../common/LoginForm";

const LoginSection = (props) => {
  return (
    <div className="c-LoginSection">
      <div className="c-LogInPage__header">
        <h1>LOGIN</h1>
        <h4>HAVE AN ACCOUNT?</h4>
        <h5>PLEASE LOG IN USING YOUR EMAIL ADDRESS</h5>
      </div>
      <LoginForm
        goToHomePage={props.goToHomePage}
        setUserLoggedIn={props.setUserLoggedIn}
      />
    </div>
  );
};

export default LoginSection;
