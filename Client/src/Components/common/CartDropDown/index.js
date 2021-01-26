import React from "react";
import CartDropDownList from "./CartDropDownList";

import "./Cart.css";
import LinkButton from "../buttons/LinkButton";

const CartDropDown = (props) => {
  return (
    <>
      <div className={props.productAdded ? "c-Cart show" : "c-Cart hidden"}>
        <div className="l-Cart__products">
          {props.cartCount === 0 ? (
            "Your Cart Is Empty"
          ) : (
            <CartDropDownList cartItems={props.cartItems} />
          )}
        </div>
        {props.cartCount === 0 ? (
          ""
        ) : (
          <div className="c-Cart__checkout">
            <div className="c-Cart__total">
              <h3>TOTAL ({props.cartCount})</h3>
              <h3>${props.cartCostTotal.toFixed(2)}</h3>
            </div>
            <LinkButton
              url={
                props.userLoggedIn ? "/shipping-checkout" : "/login/checkout"
              }
              buttonText={"CHECKOUT"}
            />
            <LinkButton
              url={"/cart"}
              buttonText={"VIEWBAG"}
              className={"inverted-btn"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropDown;
