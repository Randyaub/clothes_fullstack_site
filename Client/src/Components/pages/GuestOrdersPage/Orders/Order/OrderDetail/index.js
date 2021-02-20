import React from "react";

const OrderDetail = (props) => {
  return (
    <div>
      <h4>{props.heading}</h4>
      <span>{props.detail}</span>
    </div>
  );
};

export default OrderDetail;
