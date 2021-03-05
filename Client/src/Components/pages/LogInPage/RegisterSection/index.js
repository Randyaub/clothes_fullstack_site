import React from "react";

import LinkButton from "../../../common/buttons/LinkButton";
import "./RegisterSection.css";

const RegisterSection = () => {
  return (
    <div className="c-RegisterSection">
      <h2 className="main-header">REGISTER</h2>
      <h4>NEW TO THE SITE?</h4>
      <p className="c-RegisterSection__paragraph">
        Create an account to view your orders through your account page.
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
