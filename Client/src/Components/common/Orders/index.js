import React from "react";
import Order from "./Order";

const Orders = (props) => {
  return (
    Array.isArray(props.order) &&
    props.order.map((order) => {
      return <Order key={order.order_number} order={order} />;
    })
  );
};

export default Orders;
