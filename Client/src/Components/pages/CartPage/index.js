import React from "react";
import LinkButton from "../../common/buttons/LinkButton";
import CartItem from "./CartItem";

import "./CartPage.css";
import CartSummary from "./CartSummary";

const CartPage = (props) => {
  return (
    <>
      <h1 className="main-header">Shopping Cart</h1>
      <div className="c-CartPage">
        <div className="l-CartPage__products">
          {props.cartCount === 0 ? (
            <h2>YOUR SHOPPING CART IS EMPTY</h2>
          ) : (
            props.cartItems.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  cartCount={props.cartCount}
                  setCartCount={props.setCartCount}
                  cartCostTotal={props.cartCostTotal}
                  setCartCostTotal={props.setCartCostTotal}
                  cartItems={props.cartItems}
                  setCartItems={props.setCartItems}
                />
              );
            })
          )}
        </div>
        {props.cartCount !== 0 && (
          <div className="c-CartPage__summary">
            <CartSummary
              cartCount={props.cartCount}
              cartCostTotal={props.cartCostTotal}
            />
            <div className="c-CartPage__disclaimer">
              <h5>* Item prices include tax</h5>
            </div>
            <LinkButton
              url={props.isLoggedIn ? "/shipping-checkout" : "/login/checkout"}
              buttonText={"PROCEED TO CHECKOUT"}
              className={"red-btn"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
