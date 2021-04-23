import React from "react";

const OrderDetail = ({ heading, detail }) => {
  return (
    <div>
      <h4>{heading}</h4>
      <span>{detail}</span>
    </div>
  );
};

export default OrderDetail;
