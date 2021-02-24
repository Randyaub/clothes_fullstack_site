import React from "react";

import LoginForm from "../../../common/form/LoginForm";

import "./ReturningCustomerSection.css";

const ReturningCustomerSection = (props) => {
  return (
    <div className="c-ReturningCustomerSection">
      <h1 className="main-header">RETURNING CUSTOMER</h1>
      <div>Already have an account sign in here.</div>
      <LoginForm
        checkoutLogin={true}
        setLoggedIn={props.setLoggedIn}
        setUser={props.setUser}
      />
    </div>
  );
};

export default ReturningCustomerSection;
