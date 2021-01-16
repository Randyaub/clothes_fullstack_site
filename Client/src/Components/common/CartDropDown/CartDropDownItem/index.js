import React from "react";
import { Link } from "react-router-dom";
import { formatCategory } from "../../../../utilities";

import "./CartDropDownItem.css";

const CartDropDownItem = (props) => {
  return (
    <Link
      key={props.index}
      className="c-CartDropDownItem"
      to={`/Product-Page/${props.item.sku}`}
    >
      <img
        className="c-CartDropDownItem__image"
        src={`http://localhost:4000/public/${props.item.image}-1.jpg`}
        alt={props.item.name}
      />
      <div className="c-CartDropDownItem__details">
        <h4>{props.item.name}</h4>
        <h6>COLOUR: {formatCategory(props.item.colour)}</h6>
        <h6>QTY: {props.item.quantity}</h6>
        <h6>SIZE: {props.item.size}</h6>
        <h4>TOTAL: ${(props.item.price * props.item.quantity).toFixed(2)}</h4>
      </div>
    </Link>
  );
};

export default CartDropDownItem;
