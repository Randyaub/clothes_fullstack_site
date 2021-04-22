import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserNavigation from "./UserNavigation";
import "./AccountNavigationLink.css";
import { UserContext } from "../../../../../../utility/context/UserContext";

const AccountNavigationLink = () => {
  const user = useContext(UserContext);

  return user.isAuth ? (
    <>
      <Link className="c-Header__link" to="/account">
        <i className="fas fa-user"></i> {user.user.first_name}
      </Link>
      <UserNavigation />
    </>
  ) : (
    <Link className="c-Header__link" to="/account/login">
      <i className="fas fa-user"></i>{" "}
      <span className="small-phone-hide">Log in</span>
    </Link>
  );
};

export default AccountNavigationLink;
