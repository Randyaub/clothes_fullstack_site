import React from "react";
import OrderItemDetails from "./OrderItemDetails";
import "./OrderItems.css";

const OrderItems = (props) => {
  console.log(props.items);
  return (
    <div className="c-OrderItems">
      {Array.isArray(props.items) &&
        props.items.map((item, index) => {
          return (
            <div className="c-OrderItems__item" key={index}>
              <img
                className="c-OrderItems__image"
                src={`http://localhost:4000/public/${item.sku}-1.jpg`}
                alt={item.name}
              />
              <OrderItemDetails item={item} />
            </div>
          );
        })}
    </div>
  );
};

export default OrderItems;
