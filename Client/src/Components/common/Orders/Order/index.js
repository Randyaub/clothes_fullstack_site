import React, { useState } from "react";
import Button from "../../buttons/Button";
import OrderDetail from "./OrderDetail";
import OrderItems from "./OrderItems";
import "./Order.css";

const Order = (props) => {
  const [viewItems, setViewItems] = useState(false);

  return (
    <div className="c-Order__list">
      <div className="c-Order__details">
        <div>
          <OrderDetail heading={"ORDER #"} detail={props.order.order_number} />
        </div>
        <div className="c-Order-hide-1">
          <OrderDetail
            heading={"DATE ORDERED"}
            detail={props.order.placed.replace(/-/g, "/").substring(0, 10)}
          />
        </div>
        <div className="c-Order-hide-2">
          <OrderDetail heading={"STATUS"} detail={props.order.status} />
        </div>
        <div className="c-Order-hide-3">
          <OrderDetail heading={"METHOD"} detail={props.order.method} />
        </div>
        <Button
          onClick={() => setViewItems(!viewItems)}
          buttonText={"VIEW ORDER ITEMS"}
          className="small-btn default-btn c-Order-btn"
        />
      </div>
      <OrderItems items={props.order.items} viewItems={viewItems} />
    </div>
  );
};

export default Order;
