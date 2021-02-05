import React from "react";
import "./CartDropDownSummary.css";

import LinkButton from "../../../../buttons/LinkButton";

const CartDropDownSummary = (props) => {
  return (
    <div className="c-CartDropDownSummary">
      <div className="c-CartDropDownSummary__price">
        <h3>TOTAL ({props.cartCount})</h3>
        <h3>${props.cartCostTotal.toFixed(2)}</h3>
      </div>
      <LinkButton
        url={props.userLoggedIn ? "/shipping-checkout" : "/login/checkout"}
        buttonText={"CHECKOUT"}
      />
      <LinkButton
        url={"/cart"}
        buttonText={"VIEW BAG"}
        className={"inverted-btn"}
      />
    </div>
  );
};

export default CartDropDownSummary;
