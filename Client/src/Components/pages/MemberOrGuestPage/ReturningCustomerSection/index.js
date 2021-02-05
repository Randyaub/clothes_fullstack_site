import React from "react";

import LoginForm from "../../../common/form/LoginForm";

import "./ReturningCustomerSection.css";

const ReturningCustomerSection = (props) => {
  return (
    <div className="c-ReturningCustomerSection">
      <h1>RETURNING CUSTOMER</h1>
      <div>Already have an account sign in here.</div>
      <LoginForm
        goToHomePage={props.goToHomePage}
        setUserLoggedIn={props.setUserLoggedIn}
      />
    </div>
  );
};

export default ReturningCustomerSection;
