import React, { useContext } from "react";

import ReturningCustomerSection from "./ReturningCustomerSection";
import GuestCheckout from "./GuestCheckout";

import { Redirect } from "react-router-dom";
import { UserContext } from "../../../utility/context/UserContext";
import "./MemberOrGuest.css";

const MemberOrGuest = (props) => {
  const user = useContext(UserContext);

  return user.isAuth || !props.cartCount > 0 ? (
    <Redirect to="/" />
  ) : (
    <div className="c-MemberOrGuest container">
      <div className="l-MemberOrGuest">
        <ReturningCustomerSection />
        <GuestCheckout />
      </div>
    </div>
  );
};

export default MemberOrGuest;
