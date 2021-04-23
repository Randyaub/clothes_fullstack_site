import React from "react";
import { formatCategory } from "../../../../../../utility/utilities";
import "./OrderItemDetails.css";

const OrderItemDetails = ({ item }) => {
  return (
    <div className="c-OrderItemDetails">
      <h4>{item.name}</h4>
      <span className="c-OrderItemDetails__subdetail">SKU: {item.sku}</span>
      <span className="c-OrderItemDetails__subdetail">
        COLOUR: {formatCategory(item.colour)}
      </span>
      <span className="c-OrderItemDetails__subdetail">SIZE: {item.size}</span>
      <span className="c-OrderItemDetails__subdetail">
        QUANTITY: {item.quantity}
      </span>
    </div>
  );
};

export default OrderItemDetails;
