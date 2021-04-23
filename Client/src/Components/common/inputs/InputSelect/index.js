import React, { useState } from "react";
import "./InputDropDown.css";

import InputSelectValue from "./InputSelectValue";
import InputSelectMenu from "./InputSelectMenu";

const InputSelect = ({ value, error, list, setFunction }) => {
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
      <InputSelectValue value={value} error={error} />
      <InputSelectMenu isOpen={isOpen} list={list} setFunction={setFunction} />
    </div>
  );
};

export default InputSelect;
