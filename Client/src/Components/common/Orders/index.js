import React from "react";
import Order from "./Order";

const Orders = ({ order }) => {
  return (
    Array.isArray(order) &&
    order.map((order) => {
      return <Order key={order.order_number} order={order} />;
    })
  );
};

export default Orders;
