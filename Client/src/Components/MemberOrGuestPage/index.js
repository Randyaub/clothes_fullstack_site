import React from "react";

import ReturningCustomerSection from "./ReturningCustomerSection";
import GuestCheckout from "./GuestCheckout";

import "./MemberOrGuest.css";

const MemberOrGuest = (props) => {
  return (
    <div className="c-MemberOrGuest container">
      <div className="l-MemberOrGuest">
        <ReturningCustomerSection
          goToHomePage={props.goToHomePage}
          setUserLoggedIn={props.setUserLoggedIn}
        />
        <GuestCheckout />
      </div>
    </div>
  );
};

export default MemberOrGuest;
