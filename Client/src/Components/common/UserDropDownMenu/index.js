import React from "react";
import { Link } from "react-router-dom";

import "./UserDropDownMenu.css";

const UserDropDownMenu = (props) => {
  return (
    <>
      <Link className="c-UserDropDownMenu__link" to="/account">
        {" "}
        <i className="fas fa-user"></i> MY ACCOUNT
      </Link>
      <div className="c-UserDropDownMenu__menu">
        <ul>
          <li>
            {" "}
            <Link to="/account">My Account </Link>
          </li>
          <li
            onClick={() => {
              props.logOutUser();
            }}
            className="c-UserDropDownMenu__logout"
          >
            Sign Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDropDownMenu;
