import React, { useState } from "react";
import "./Cart.css";

import CartDropDownList from "./CartDropDownList";
import CartDropDownSummary from "./CartDropDownSummary";

const CartDropDown = (props) => {
  const [isCartFixed, setIsCartFixed] = useState(false);

  // const setCartDropDownFixed = () => {
  //   if (window.scrollY >= 40) {
  //     setIsCartFixed(true);
  //   } else {
  //     setIsCartFixed(false);
  //   }
  // };

  // //
  // window.addEventListener("scroll", setCartDropDownFixed);

  return (
    <div
      className={
        props.productAdded
          ? `c-Cart show ${isCartFixed && `fixed`}`
          : `c-Cart hidden ${isCartFixed && `fixed`}`
      }
    >
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
