import React from "react";
import { formatCategory } from "../../../../../../utility/utilities";
import "./OrderItemDetails.css";

const OrderItemDetails = (props) => {
  return (
    <div className="c-OrderItemDetails">
      <h4>{props.item.name}</h4>
      <span className="c-OrderItemDetails__subdetail">
        SKU: {props.item.sku}
      </span>
      <span className="c-OrderItemDetails__subdetail">
        COLOUR: {formatCategory(props.item.colour)}
      </span>
      <span className="c-OrderItemDetails__subdetail">
        SIZE: {props.item.size}
      </span>
      <span className="c-OrderItemDetails__subdetail">
        QUANTITY: {props.item.quantity}
      </span>
    </div>
  );
};

export default OrderItemDetails;
