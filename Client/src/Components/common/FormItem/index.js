import React from "react";
import Input from "./Input";
import Label from "./Label";

const FormItem = (props) => {
  return (
    <>
      <Label
        name={props.labelName}
        error={props.error}
        className={props.labelClassName}
      />
      <Input
        name={props.inputName}
        value={props.inputValue}
        placeholder={props.inputPlaceHolder}
        setFunction={props.inputSetFunction}
        className={props.inputClassName}
        error={props.error}
        subInfo={props.subInfo}
      />
    </>
  );
};

export default FormItem;
