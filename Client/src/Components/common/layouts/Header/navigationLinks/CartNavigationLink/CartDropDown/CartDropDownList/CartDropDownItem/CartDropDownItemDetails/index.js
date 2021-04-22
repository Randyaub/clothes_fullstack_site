import React from "react";
import "./CartDropDownItemDetails.css";

import { formatCategory } from "../../../../../../../../../../utility/utilities";

const CartDropDownItemDetails = ({ item }) => {
  return (
    <div className="c-CartDropDownItemDetails">
      <h4 className="c-CartDropDownItemDetails__title">{item.name}</h4>
      <span className="c-CartDropDownItemDetails__subdetail">
        COLOUR: {formatCategory(item.colour)}
      </span>
      <span className="c-CartDropDownItemDetails__subdetail">
        QTY: {item.quantity}
      </span>
      <span className="c-CartDropDownItemDetails__subdetail">
        SIZE: {item.size}
      </span>
      <span className="c-CartDropDownItemDetails__total">
        TOTAL: ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default CartDropDownItemDetails;
