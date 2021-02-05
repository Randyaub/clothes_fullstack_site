import React from "react";
import "./OrderInformation.css";

const OrderInformation = (props) => {
  return (
    <div className="c-OrderInformation">
      <h3 className="c-OrderInformation__title">{props.title}</h3>
      {props.information.map((row, index) => {
        return (
          <span key={index} className="c-OrderInformation__row">
            {row}
          </span>
        );
      })}
    </div>
  );
};

export default OrderInformation;
