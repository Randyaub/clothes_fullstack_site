import React from "react";
import RemoveItem from "./RemoveItem";
import ItemDetails from "./ItemDetails";
import Quantity from "./Quantity";

import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div className="l-CartItem">
      <ItemDetails item={props.item} />
      <div className="c-CartItem__quantity">
        <div className="l-CartItem__quantity">
          <Quantity
            item={props.item}
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
            cartCostTotal={props.cartCostTotal}
            setCartCostTotal={props.setCartCostTotal}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
          />
          <RemoveItem
            item={props.item}
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
            cartCostTotal={props.cartCostTotal}
            setCartCostTotal={props.setCartCostTotal}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
          />
        </div>
        <h4>SUBTOTAL ${(props.item.price * props.item.quantity).toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default CartItem;
