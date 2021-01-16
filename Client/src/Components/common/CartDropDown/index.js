import React from "react";
import { Link } from "react-router-dom";
import CartDropDownList from "./CartDropDownList";

import "./Cart.css";

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
            <div className="c-Cart__buttons">
              <Link to={props.userLoggedIn ? "/checkout" : "/login/checkout"}>
                <button className="default-btn">CHECKOUT</button>
              </Link>
              <Link to="/cart">
                <button className="inverted-btn">VIEW BAG</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropDown;
