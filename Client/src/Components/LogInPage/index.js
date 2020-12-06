import React from "react";

import "./LogInPage.css";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

const LogInPage = () => {
  return (
    <section className="c-LogInPage">
      <div className="c-LogInPage-flex">
        <LoginSection />
        <div className="c-LogInPage__horizontal"></div>
        <RegisterSection />
      </div>
    </section>
  );
};

export default LogInPage;
