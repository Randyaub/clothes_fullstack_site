import React from "react";

import { Link } from "react-router-dom";
import "./RegisterSection.css";

const RegisterSection = () => {
  return (
    <div className="c-RegisterSection">
      <div className="c-LogInPage__header">
        <h1>REGISTER</h1>
        <h4>NEW TO THE SITE?</h4>
        <p>
          Create an account to take advantage of special deals and coupons
          delivered through email
        </p>
        <Link to="/account/register">
          <button className="default-btn">CREATE AN ACCOUNT </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterSection;
