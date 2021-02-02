import React from "react";

const InputDropDownCurrentValue = (props) => {
  return (
    <div className="c-InputDropDownCurrentValue">
      <i className="fas fa-sort-down c-DropDownList__arrow"></i>
      <span className="c-DropDownList__current">{props.value}</span>
    </div>
  );
};

export default InputDropDownCurrentValue;
