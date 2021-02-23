import React from "react";
import { Link } from "react-router-dom";
import "./UserNavigation.css";

const UserNavigation = (props) => {
  return (
    <div className="c-UserNavigation__menu">
      <ul>
        <li>
          <Link to="/account">My Account </Link>
        </li>
        <li
          onClick={() => {
            props.logOutUser();
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
