import React from "react";

import LoginForm from "../../../common/form/LoginForm";

import "./ReturningCustomerSection.css";

const ReturningCustomerSection = (props) => {
  return (
    <div className="c-ReturningCustomerSection">
      <h2 className="main-header">RETURNING CUSTOMER</h2>
      <div>Already have an account? Sign in here.</div>
      <LoginForm checkoutLogin={true} />
    </div>
  );
};

export default ReturningCustomerSection;
