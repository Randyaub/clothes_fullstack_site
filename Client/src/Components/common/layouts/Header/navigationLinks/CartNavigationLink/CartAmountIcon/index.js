import React from "react";
import "./CartAmountIcon.css";

const CartAmountIcon = ({ total }) => {
  return (
    <i className="fas fa-shopping-cart c-CartAmountIcon">
      <span>{total}</span>
    </i>
  );
};

export default CartAmountIcon;
