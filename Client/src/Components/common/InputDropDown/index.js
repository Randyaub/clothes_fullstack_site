import React, { useState } from "react";
import "./InputDropDown.css";

import InputDropDownCurrentValue from "./InputDropDownCurrentValue";
import InputDropDownList from "./InputDropDownList";

const InputDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="c-InputDropDown"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <InputDropDownCurrentValue value={props.value} />
      <InputDropDownList
        isOpen={isOpen}
        list={props.list}
        setFunction={props.setFunction}
      />
    </div>
  );
};

export default InputDropDown;
