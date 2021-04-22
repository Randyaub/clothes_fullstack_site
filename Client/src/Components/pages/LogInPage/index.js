import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../utility/context/UserContext";
import "./LogInPage.css";

import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

const LogInPage = ({ setUser }) => {
  const user = useContext(UserContext);

  return user.isAuth ? (
    <Redirect to="/" />
  ) : (
    <section className="c-LogInPage container">
      <div className="c-LogInPage-flex">
        <LoginSection />
        <div className="c-LogInPage__horizontal"></div>
        <RegisterSection />
      </div>
    </section>
  );
};

export default LogInPage;
