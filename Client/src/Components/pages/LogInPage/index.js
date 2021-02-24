import React from "react";
import { Redirect } from "react-router-dom";
import "./LogInPage.css";

import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

const LogInPage = (props) => {
  return props.isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <section className="c-LogInPage container">
      <div className="flex">
        <LoginSection setLoggedIn={props.setLoggedIn} setUser={props.setUser} />
        <div className="c-LogInPage__horizontal"></div>
        <RegisterSection />
      </div>
    </section>
  );
};

export default LogInPage;
