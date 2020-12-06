import React from "react";

import "./CartSummary.css";

const CartSummary = (props) => {
  return (
    <div className="c-CartSummary">
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
        <div className="c-CartSummary__disclaimer">
          <h5>* Item prices exclude tax</h5>
        </div>
        <button className="c-CartSummary__btn">
          <h3>PROCEED TO CHECKOUT</h3>
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
