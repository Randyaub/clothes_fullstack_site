import React from "react";
import "./InputSelectValue.css";

const InputSelectValue = ({ error, value }) => {
  return (
    <div
      className={
        error
          ? "c-InputSelectValue c-InputSelectValue__error"
          : "c-InputSelectValue"
      }
    >
      <i className="fas fa-sort-down c-InputSelectValue__arrow"></i>
      <span className={"c-InputSelectValue__current"}>{value}</span>
    </div>
  );
};

export default InputSelectValue;
