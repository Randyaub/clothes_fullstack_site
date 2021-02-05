import React from "react";

import LinkButton from "../../../common/buttons/LinkButton";
import "./RegisterSection.css";

const RegisterSection = () => {
  return (
    <div className="c-RegisterSection">
      <h1 className="c-RegisterSection__title">REGISTER</h1>
      <h3>NEW TO THE SITE?</h3>
      <p className="c-RegisterSection__paragraph">
        Create an account to take advantage of special deals and coupons
        delivered through email
      </p>
      <LinkButton
        url={"/account/register"}
        buttonText={"CREATE AN ACCOUNT"}
        className={"default-btn small-btn"}
      />
    </div>
  );
};

export default RegisterSection;
