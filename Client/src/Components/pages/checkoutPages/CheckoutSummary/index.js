import React from "react";
import "./CheckoutSummary.css";

import CartDropDownList from "../../../common/layouts/Header/CartDropDown/CartDropDownList";
import CartSummary from "../../CartPage/CartSummary";

const CheckoutSummary = (props) => {
  return (
    <div className="c-CheckoutSummary">
      <div>
        <h1 className="c-CheckoutSummary__title">Order Summary</h1>
        <div className="c-CheckoutSummary__list">
          <CartDropDownList cartItems={props.cartItems} />
        </div>
      </div>
      <div className="c-CheckoutSummary__details">
        <CartSummary
          cartCount={props.cartCount}
          cartCostTotal={props.cartCostTotal}
          userLoggedIn={props.userLoggedIn}
        />
      </div>
    </div>
  );
};

export default CheckoutSummary;