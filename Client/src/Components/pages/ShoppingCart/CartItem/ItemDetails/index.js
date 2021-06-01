import React from "react";
import { Link } from "react-router-dom";
import { formatCategory } from "../../../../../utility/utilities";
import ItemPicture from "./ItemPicture";

import "./ItemDetails.css";

const ItemDetails = ({ item }) => {
  return (
    <div className="c-ItemDetails">
      <ItemPicture item={item} />
      <div className="c-ItemDetails__detail">
        <Link to={`Product-Page/${item.sku}`}>
          <h3>{item.name}</h3>
        </Link>
        <p>SKU: #{item.sku}</p>
        <p>Colour: {formatCategory(item.colour)}</p>
        <p>Size: {item.size}</p>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
