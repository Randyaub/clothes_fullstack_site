import React from "react";
import { Link } from "react-router-dom";
import CartDropDownItemDetails from "./CartDropDownItemDetails";
import "./CartDropDownItem.css";

const CartDropDownItem = ({ index, item }) => {
  return (
    <div className="c-CartDopDownItem">
      <Link
        key={index}
        className="c-CartDropDownItem__item"
        to={`/Product-Page/${item.sku}`}
      >
        <img
          className="c-CartDropDownItem__image"
          src={`https://react-express-clothes.herokuapp.com/public/${item.image}-1.jpg`}
          alt={item.name}
        />
        <CartDropDownItemDetails item={item} />
      </Link>
    </div>
  );
};

export default CartDropDownItem;
