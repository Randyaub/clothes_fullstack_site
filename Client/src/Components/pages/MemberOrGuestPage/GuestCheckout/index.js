import React from "react";

import LinkButton from "../../../common/buttons/LinkButton";

import "./GuestCheckout.css";

const GuestCheckout = () => {
  return (
    <div className="c-GuestCheckout">
      <h2 className="main-header">GUEST CHECKOUT</h2>
      <div>
        If you do not wish to create an account you can use the guest checkout.
      </div>
      <LinkButton
        url={"/shipping-checkout"}
        buttonText={"GUEST CHECKOUT"}
        className={"default-btn small-btn"}
      />
    </div>
  );
};

export default GuestCheckout;
