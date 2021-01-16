import React from "react";

import "./CartSummary.css";

const CartSummary = (props) => {
  return (
    <div>
      <div className="c-CartSummary__row">
        <span>Order Summary</span>
        <span>
          {props.cartCount} {props.cartCount === 1 ? "Item" : "Items"}
        </span>
      </div>
      <div className="c-CartSummary__row">
        <span>Order Total</span>
        <h3>${props.cartCostTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartSummary;
