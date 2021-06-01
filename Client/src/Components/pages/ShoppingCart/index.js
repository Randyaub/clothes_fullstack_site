import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  return (
    <>
      <h1 className="main-header">Shopping Cart</h1>
      <div className="c-ShoppingCart">
        <div className="c-ShoppingCart__products">
          {props.cartCount === 0 ? (
            <h2>YOUR SHOPPING CART IS EMPTY</h2>
          ) : (
            props.cartItems.map((item) => {
              return (
                <CartItem
                  key={item.sku}
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
          <CartSummary
            cartCount={props.cartCount}
            cartCostTotal={props.cartCostTotal}
          />
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
