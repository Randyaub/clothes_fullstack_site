import React, { useState } from "react";

import DropDownItem from "./DropDownItem";
import "./DropDownList.css";

const DropDownList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(props.list[0]);

  return (
    <div
      className="c-DropDownList"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className="c-DropDownList__current">{value}</span>
      <div>
        <ul
          className={`c-DropDownList__list ${
            isOpen && `c-DropDownList-active`
          }`}
        >
          {props.list.map((item) => {
            return <DropDownItem item={item} setValue={setValue} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDownList;
