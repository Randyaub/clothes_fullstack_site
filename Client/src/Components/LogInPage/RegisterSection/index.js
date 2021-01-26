import React from "react";

import LinkButton from "../../common/buttons/LinkButton";
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
        <div className="l-RegisterSection__button">
          <LinkButton
            url={"/account/register"}
            buttonText={"CREATE AN ACCOUNT"}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
