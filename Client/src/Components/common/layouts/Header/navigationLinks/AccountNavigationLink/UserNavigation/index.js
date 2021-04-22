import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../../../utility/context/UserContext";
import "./UserNavigation.css";

const UserNavigation = () => {
  const user = useContext(UserContext);

  return (
    <div className="c-UserNavigation__menu">
      <ul>
        <li>
          <Link to="/account">My Account</Link>
        </li>
        <li
          onClick={() => {
            user.logOut();
          }}
          className="c-UserNavigation__logout"
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default UserNavigation;
