import React from "react";

import "./InputDropDownItem.css";

const InputDropDownItem = (props) => {
  return (
    <li
      onClick={() => {
        props.setFunction(props.item);
      }}
      className="c-InputDropDownItem"
    >
      {props.item}
    </li>
  );
};

export default InputDropDownItem;
