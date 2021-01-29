import React from "react";

import "./DropDownItem.css";

const DropDownItem = (props) => {
  return (
    <li
      onClick={() => {
        props.setFunction(props.item);
      }}
      className="c-DropDownItem"
    >
      {props.item}
    </li>
  );
};

export default DropDownItem;
