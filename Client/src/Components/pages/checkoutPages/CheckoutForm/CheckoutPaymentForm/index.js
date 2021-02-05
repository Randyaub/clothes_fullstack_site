import React from "react";

import "./CheckoutPaymentForm.css";
import FormItem from "../../../../common/form/FormItem";
import CreditCardExpiration from "./CreditCardExpiration";

const CheckoutPaymentForm = (props) => {
  return (
    <div className="c-CheckoutPaymentInformation">
      <h2>PAYMENT METHOD</h2>
      <h5>Please do not put real card information</h5>
      <FormItem
        inputClassName={"c-Input__input c-CheckoutPaymentInformation__half"}
        labelName={"Name On Card"}
        inputName={"nameOnCard"}
        inputValue={props.cardPaymentInfo.nameOnCard}
        inputPlaceHolder={"Name on Card"}
        inputSetFunction={props.cardPaymentInfo.setNameOnCard}
        error={props.nameOnCardError}
      />
      <FormItem
        inputClassName={"c-Input__input c-CheckoutPaymentInformation__half"}
        labelName={"Card Number"}
        inputName={"numberOnCard"}
        inputValue={props.cardPaymentInfo.cardNumber}
        inputPlaceHolder={"Card Number"}
        inputSetFunction={props.cardPaymentInfo.setCardNumber}
        error={props.cardNumberError}
      />
      <CreditCardExpiration
        cardPaymentInfo={props.cardPaymentInfo}
        nameOnCardError={props.nameOnCardError}
        cardNumberError={props.cardNumberError}
        expirationMonthError={props.expirationMonthError}
        expirationYearError={props.expirationYearError}
        cvvError={props.cvvError}
      />
    </div>
  );
};

export default CheckoutPaymentForm;
