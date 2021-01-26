import React from "react";

import Button from "../../../common/buttons/Button";

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
    <Button
      buttonText={"DELETE"}
      onClick={() =>
        removeItem(
          props.item.sku,
          props.item.size,
          props.item.quantity,
          props.item.price
        )
      }
      className={"c-ItemDelete"}
    />
  );
};

export default ItemDelete;
