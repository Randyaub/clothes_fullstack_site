import React, { useState } from "react";
import Button from "../../../../common/buttons/Button";
import OrderDetail from "./OrderDetail";
import OrderItems from "./OrderItems";

const Order = (props) => {
  const [viewItems, setViewItems] = useState(false);

  return (
    <div className="c-GuestOrderPage">
      <div className="c-GuestOrderPage__details">
        <OrderDetail
          heading={"ORDER NUMBER"}
          detail={props.order.order_number}
        />
        <OrderDetail
          heading={"DATE ORDERED"}
          detail={props.order.placed.replace(/-/g, "/").substring(0, 10)}
        />
        <OrderDetail heading={"STATUS"} detail={props.order.status} />
        <OrderDetail heading={"METHOD"} detail={props.order.method} />
        <Button
          onClick={() => setViewItems(!viewItems)}
          buttonText={"VIEW ORDER ITEMS"}
          className="small-btn default-btn c-GuestOrderPage-btn"
        />
      </div>
      {viewItems && <OrderItems items={props.order.items} />}
    </div>
  );
};

export default Order;
