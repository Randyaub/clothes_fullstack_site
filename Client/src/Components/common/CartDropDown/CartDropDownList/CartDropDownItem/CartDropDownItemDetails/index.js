import React from "react";
import "./CartDropDownItemDetails.css";

import { formatCategory } from "../../../../../../utilities";

const CartDropDownItemDetails = (props) => {
  return (
    <div className="c-CartDropDownItemDetails">
      <h4 className="c-CartDropDownItemDetails__title">{props.item.name}</h4>
      <span className="c-CartDropDownItemDetails__subdetail">
        COLOUR: {formatCategory(props.item.colour)}
      </span>
      <span className="c-CartDropDownItemDetails__subdetail">
        QTY: {props.item.quantity}
      </span>
      <span className="c-CartDropDownItemDetails__subdetail">
        SIZE: {props.item.size}
      </span>
      <span className="c-CartDropDownItemDetails__total">
        TOTAL: ${(props.item.price * props.item.quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default CartDropDownItemDetails;
