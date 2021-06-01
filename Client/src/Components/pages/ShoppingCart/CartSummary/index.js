import React, { useContext } from "react";
import { UserContext } from "../../../../utility/context/UserContext";
import LinkButton from "../../../common/buttons/LinkButton";

import "./CartSummary.css";

const CartSummary = ({ cartCount, cartCostTotal }) => {
  const user = useContext(UserContext);

  return (
    <div className="c-CartSummary">
      <div className="c-CartSummary__row">
        <span>Order Summary</span>
        <span>
          {cartCount} {cartCount === 1 ? "Item" : "Items"}
        </span>
      </div>
      <div className="c-CartSummary__row">
        <span>Order Total</span>
        <h3>${cartCostTotal.toFixed(2)}</h3>
      </div>
      <div className="c-CartSummary__disclaimer">
        <h5>* Item prices include tax</h5>
      </div>
      <LinkButton
        url={user.isAuth ? "/shipping-checkout" : "/login/checkout"}
        buttonText={"PROCEED TO CHECKOUT"}
        className={"red-btn"}
      />
    </div>
  );
};

export default CartSummary;
