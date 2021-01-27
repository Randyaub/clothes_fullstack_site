import React from "react";

import "./LogInPage.css";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

const LogInPage = (props) => {
  return (
    <section className="c-LogInPage container">
      <div className="flex">
        <LoginSection
          goToHomePage={props.goToHomePage}
          setUserLoggedIn={props.setUserLoggedIn}
        />
        <div className="c-LogInPage__horizontal"></div>
        <RegisterSection />
      </div>
    </section>
  );
};

export default LogInPage;
