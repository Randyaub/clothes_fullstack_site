import React from "react";
import { Link } from "react-router-dom";
import UserNavigation from "./UserNavigation";
import "./AccountNavigationLink.css";

const AccountNavigationLink = (props) => {
  return props.userLoggedIn ? (
    <>
      <Link className="c-Header__link" to="/account">
        <i className="fas fa-user"></i> MY ACCOUNT
      </Link>
      <UserNavigation logOutUser={props.logOutUser} />
    </>
  ) : (
    <Link className="c-Header__link" to="/account/login">
      <i className="fas fa-user"></i> LOG IN / REGISTER
    </Link>
  );
};

export default AccountNavigationLink;
