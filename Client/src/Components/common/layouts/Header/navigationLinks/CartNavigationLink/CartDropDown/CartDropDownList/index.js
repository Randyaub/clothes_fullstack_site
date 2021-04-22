import React from "react";
import "./CartDropDownList.css";

import CartDropDownItem from "./CartDropDownItem";

const CartDropDownList = ({ cartItems }) => {
  return (
    <div className="c-CartDropDownList">
      {cartItems.map((item, index) => {
        return <CartDropDownItem key={index} item={item} />;
      })}
    </div>
  );
};

export default CartDropDownList;
