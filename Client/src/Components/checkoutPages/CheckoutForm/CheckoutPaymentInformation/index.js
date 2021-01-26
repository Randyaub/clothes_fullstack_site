import React from "react";

import CheckoutInputRowHalf from "../CheckoutInputRowHalf";
import "./CheckoutPaymentInformation.css";

const CheckoutPaymentInformation = (props) => {
  return (
    <div className="c-CheckoutPaymentInformation">
      <h2>PAYMENT METHOD</h2>
      <h5>Please do not put real card information</h5>
      <CheckoutInputRowHalf
        name="Name On Card"
        value={props.nameOnCard}
        setFunction={props.setNameOnCard}
        error={props.nameOnCardError}
      />
      <CheckoutInputRowHalf
        name="Card Number"
        value={props.cardNumber}
        setFunction={props.setCardNumber}
        error={props.cardNumberError}
      />
    </div>
  );
};

export default CheckoutPaymentInformation;
