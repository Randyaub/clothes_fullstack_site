import React from "react";

import ReturningCustomerSection from "./ReturningCustomerSection";
import GuestCheckout from "./GuestCheckout";

import "./MemberOrGuest.css";
import { Redirect } from "react-router-dom";

const MemberOrGuest = (props) => {
  return props.isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="c-MemberOrGuest container">
      <div className="l-MemberOrGuest">
        <ReturningCustomerSection
          setLoggedIn={props.setLoggedIn}
          setUser={props.setUser}
        />
        <GuestCheckout />
      </div>
    </div>
  );
};

export default MemberOrGuest;
