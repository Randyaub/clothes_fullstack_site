import React from "react";

import LinkButton from "../../../common/buttons/LinkButton";

import "./GuestCheckout.css";

const GuestCheckout = () => {
  return (
    <div className="c-GuestCheckout">
      <h1 className="main-header">GUEST CHECKOUT</h1>
      <div>If you dont have an account, you can use guest checkout</div>
      <LinkButton
        url={"/shipping-checkout"}
        buttonText={"GUEST CHECKOUT"}
        className={"default-btn small-btn"}
      />
    </div>
  );
};

export default GuestCheckout;
