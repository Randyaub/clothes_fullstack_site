import React from "react";
import { Link } from "react-router-dom";
import UserNavigation from "./UserNavigation";
import "./AccountNavigationLink.css";

const AccountNavigationLink = (props) => {
  return props.isLoggedIn ? (
    <>
      <Link className="c-Header__link" to="/account">
        <i className="fas fa-user"></i> {props.user.first_name}
      </Link>
      <UserNavigation logOutUser={props.logOutUser} />
    </>
  ) : (
    <Link className="c-Header__link" to="/account/login">
      <i className="fas fa-user"></i>{" "}
      <span className="small-phone-hide">Log in</span>
    </Link>
  );
};

export default AccountNavigationLink;
