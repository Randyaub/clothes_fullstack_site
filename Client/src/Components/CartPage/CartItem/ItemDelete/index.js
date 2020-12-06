import React from "react";

import "./ItemDelete.css";

const ItemDelete = (props) => {
  const removeItem = (sku, size, quantity, price) => {
    //returns array without removedItem
    const filtered = props.cartItems.filter(
      (item) => !(item.sku === sku && item.size === size)
    );
    props.setCartItems(filtered);
    props.setCartCount(props.cartCount - quantity);
    props.setCartCostTotal(props.cartCostTotal - parseFloat(price * quantity));
  };

  return (
    <button
      className="c-ItemDelete"
      onClick={() =>
        removeItem(
          props.item.sku,
          props.item.size,
          props.item.quantity,
          props.item.price
        )
      }
    >
      <span>DELETE</span>
    </button>
  );
};

export default ItemDelete;
