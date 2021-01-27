import React from "react";
import Label from "../../../common/FormItem/Label";

import "./CheckoutInput.css";

const CheckoutInput = (props) => {
  return (
    <>
      <Label name={props.name} error={props.error} />
      <input
        className="c-CheckingInput__input"
        type="text"
        name="firstName"
        value={props.value}
        autoComplete="off"
        onChange={(e) => props.setFunction && props.setFunction(e.target.value)}
      />
      {props.subInfo && (
        <div className="c-CheckingInput__subInfo">{props.subInfo}</div>
      )}
      {props.error && (
        <span className="c-CheckingInput__error">{props.error}</span>
      )}
    </>
  );
};

export default CheckoutInput;
