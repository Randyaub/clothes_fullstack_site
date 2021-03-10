import React from "react";
import "./InputSelectValue.css";

const InputSelectValue = (props) => {
  return (
    <div
      className={
        props.error
          ? "c-InputSelectValue c-InputSelectValue__error"
          : "c-InputSelectValue"
      }
    >
      <i className="fas fa-sort-down c-InputSelectValue__arrow"></i>
      <span className={"c-InputSelectValue__current"}>{props.value}</span>
    </div>
  );
};

export default InputSelectValue;
