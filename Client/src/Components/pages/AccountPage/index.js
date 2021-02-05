import React from "react";

import "./AccountPage.css";

const AccountPage = (props) => {
  return (
    <div className="c-AccountPage">
      <div className="c-AccountPage__sidebar">
        <div className="c-AccountPage__user">
          Welcome {props.user.first_name} {props.user.last_name}
        </div>
        <div className="c-AccountPage__container">
          <div className="c-AccountPage__heading">My Account</div>
          <ul>
            <li>
              <div className="c-AccountPage__list">
                <span>All Purchases</span>{" "}
                <i className="fas fa-arrow-right"></i>
              </div>
            </li>
            <li>
              <div className="c-AccountPage__list">
                <span>Settings</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </li>
            <li onClick={() => props.logOutUser()}>Sign Out</li>
          </ul>
        </div>
      </div>
      <div className="c-AccountPage__orders">
        <div>
          <div div className="c-AccountPage__heading">
            All Purchases
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
