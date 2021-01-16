import React from "react";

import CartDropDownItem from "../CartDropDownItem";

const CartDropDownList = (props) => {
  return props.cartItems.map((item, index) => {
    return <CartDropDownItem key={index} item={item} />;
  });
};

export default CartDropDownList;
