import React from "react";

import { Link } from "react-router-dom";
import { formatCategory } from "../../../../utilities";
import "./ItemDetails.css";

const ItemDetails = (props) => {
  return (
    <div className="c-ItemDetails">
      <Link to={`Product-Page/${props.item.sku}`}>
        <img
          className="c-ItemDetails__image"
          src={`http://localhost:4000/public/${props.item.image}-1.jpg`}
          alt={props.item.name}
        ></img>
      </Link>
      <div className="c-ItemDetails__detail">
        <Link to={`Product-Page/${props.item.sku}`}>
          <h4 className="c-CartDetails__name">{props.item.name}</h4>
        </Link>
        <p>SKU: #{props.item.sku}</p>
        <p>Colour: {formatCategory(props.item.colour)}</p>
        <p>Size: {props.item.size}</p>
        <h4>Price: ${props.item.price}</h4>
      </div>
    </div>
  );
};

export default ItemDetails;
