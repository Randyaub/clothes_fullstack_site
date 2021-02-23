import React from "react";
import "./CartDropDownList.css";

import CartDropDownItem from "./CartDropDownItem";

const CartDropDownList = (props) => {
  return (
    <div className="c-CartDropDownList">
      {props.cartItems.map((item, index) => {
        return <CartDropDownItem key={index} item={item} />;
      })}
    </div>
  );
};

export default CartDropDownList;
