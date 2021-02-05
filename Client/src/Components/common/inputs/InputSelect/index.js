import React, { useState } from "react";
import "./InputDropDown.css";

import InputSelectValue from "./InputSelectValue";
import InputSelectMenu from "./InputSelectMenu";

const InputSelect = (props) => {
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
      <InputSelectValue value={props.value} />
      <InputSelectMenu
        isOpen={isOpen}
        list={props.list}
        setFunction={props.setFunction}
      />
    </div>
  );
};

export default InputSelect;
