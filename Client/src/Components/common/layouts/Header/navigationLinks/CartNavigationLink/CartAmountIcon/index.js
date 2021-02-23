import React from "react";
import "./CartAmountIcon.css";

const CartAmountIcon = (props) => {
  return (
    <i className="fas fa-shopping-cart c-CartAmountIcon">
      <span>{props.total}</span>
    </i>
  );
};

export default CartAmountIcon;
