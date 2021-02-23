import React from "react";
import { Link } from "react-router-dom";
import CartDropDownItemDetails from "./CartDropDownItemDetails";
import "./CartDropDownItem.css";

const CartDropDownItem = (props) => {
  return (
    <div className="c-CartDopDownItem">
      <Link
        key={props.index}
        className="c-CartDropDownItem__item"
        to={`/Product-Page/${props.item.sku}`}
      >
        <img
          className="c-CartDropDownItem__image"
          src={`http://localhost:4000/public/${props.item.image}-1.jpg`}
          alt={props.item.name}
        />
        <CartDropDownItemDetails item={props.item} />
      </Link>
    </div>
  );
};

export default CartDropDownItem;
