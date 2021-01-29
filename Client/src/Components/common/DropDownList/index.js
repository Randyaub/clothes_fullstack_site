import React, { useState } from "react";

import DropDownItem from "./DropDownItem";
import "./DropDownList.css";

const DropDownList = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="c-DropDownList"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {" "}
      <i className="fas fa-sort-down c-DropDownList__arrow"></i>
      <span className="c-DropDownList__current">{props.value}</span>
      <div>
        <ul
          className={`c-DropDownList__list ${
            isOpen && `c-DropDownList-active`
          }`}
        >
          {props.list.map((item, index) => {
            return (
              <DropDownItem
                key={index}
                item={item}
                setFunction={props.setFunction}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDownList;
