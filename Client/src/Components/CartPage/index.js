import React from "react";

import CartItem from "./CartItem";

import "./CartPage.css";
import CartSummary from "./CartSummary";

const CartPage = (props) => {
  return (
    <>
      <h1 className="c-CartPage__title">Shopping Cart</h1>
      <div className="c-CartPage">
        <div className="l-CartPage__products">
          {props.cartCount === 0 ? (
            <h2>YOUR SHOPPING CART IS EMPTY</h2>
          ) : (
            props.cartItems.map((item, index) => {
              return (
                <CartItem
                  index={index}
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
        {props.cartCount === 0 ? (
          ""
        ) : (
          <CartSummary
            cartCount={props.cartCount}
            cartCostTotal={props.cartCostTotal}
          />
        )}
      </div>
    </>
  );
};

export default CartPage;
