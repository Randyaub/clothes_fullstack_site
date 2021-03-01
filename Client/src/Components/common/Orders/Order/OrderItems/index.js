import React from "react";
import OrderItemDetails from "./OrderItemDetails";
import "./OrderItems.css";

const OrderItems = (props) => {
  return (
    <div className="c-OrderItems">
      <div
        className={
          props.viewItems
            ? "c-OrderItems__list show-order"
            : "c-OrderItems__list hidden-order"
        }
      >
        {Array.isArray(props.items) &&
          props.items.map((item, index) => {
            return (
              <div className="c-OrderItems__item" key={index}>
                <img
                  className="c-OrderItems__image"
                  src={`https://react-express-clothes.herokuapp.com/public/${item.sku}-1.jpg`}
                  alt={item.name}
                />
                <OrderItemDetails item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderItems;
