import React from "react";

import "./CartItem.css";
import ItemDelete from "./ItemDelete";
import ItemDetails from "./ItemDetails";
import ItemQuantity from "./ItemQuantity";

const CartItem = (props) => {
  return (
    <div className="l-CartItem">
      <ItemDetails item={props.item} />
      <div className="c-CartItem__quantity">
        <div className="l-CartItem__quantity">
          <ItemQuantity
            item={props.item}
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
            cartCostTotal={props.cartCostTotal}
            setCartCostTotal={props.setCartCostTotal}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
          />
          <ItemDelete
            item={props.item}
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
            cartCostTotal={props.cartCostTotal}
            setCartCostTotal={props.setCartCostTotal}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
          />
        </div>
        <h4>
          SUBTOTAL: ${(props.item.price * props.item.quantity).toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default CartItem;
