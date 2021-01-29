import React from "react";

import DropDownList from "../../../../common/DropDownList";
import Label from "../../../../common/FormItem/Label";

import { months } from "../../../../../utilities";

import "./CreditCardExpiration.css";
import FormItem from "../../../../common/FormItem";

const CreditCardExpiration = (props) => {
  const years = [
    "YEAR*",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
  ];

  return (
    <>
      <Label
        name={"Expiration Date:"}
        error={props.expirationMonthError || props.expirationYearError}
      />
      <div className="c-CreditCardExpiration flex">
        <div className="c-CreditCardExpiration__dropdown">
          <DropDownList
            list={months}
            value={props.cardPaymentInfo.cardExpirationMonth}
            setFunction={props.cardPaymentInfo.setCardExpirationMonth}
          />
        </div>
        <DropDownList
          list={years}
          value={props.cardPaymentInfo.cardExpirationYear}
          setFunction={props.cardPaymentInfo.setCardExpirationYear}
        />
      </div>
      <FormItem
        labelName={"CVV"}
        inputClassName={"c-Input__input c-CheckoutForm__half"}
        inputName={"CVV"}
        inputValue={props.cardPaymentInfo.cardCVV}
        inputPlaceHolder={"CVV"}
        inputSetFunction={props.cardPaymentInfo.setCardCVV}
        error={props.cvvError}
        subInfo={
          "Your card verification value, on the back of your credit card"
        }
      />
    </>
  );
};

export default CreditCardExpiration;
