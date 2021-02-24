import React from "react";
import "./Cart.css";

import CartDropDownList from "./CartDropDownList";
import CartDropDownSummary from "./CartDropDownSummary";

const CartDropDown = (props) => {
  return (
    <div className={props.productAdded ? "c-Cart show" : "c-Cart hidden"}>
      {props.cartCount !== 0 ? (
        <>
          <CartDropDownList cartItems={props.cartItems} />
          <CartDropDownSummary
            cartCount={props.cartCount}
            cartCostTotal={props.cartCostTotal}
            isLoggedIn={props.isLoggedIn}
          />
        </>
      ) : (
        "Your Cart Is Empty"
      )}
    </div>
  );
};

export default CartDropDown;
