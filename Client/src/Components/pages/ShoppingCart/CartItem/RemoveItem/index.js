import React from "react";
import Button from "../../../../common/buttons/Button";

import "./RemoveItem.css";

const RemoveItem = ({
  item,
  cartCount,
  setCartCount,
  cartCostTotal,
  setCartCostTotal,
  cartItems,
  setCartItems,
}) => {
  const removeItem = (sku, size, quantity, price) => {
    //returns array without removedItem
    setCartItems(
      cartItems.filter((item) => !(item.sku === sku && item.size === size))
    );
    setCartCount(cartCount - quantity);
    setCartCostTotal(cartCostTotal - parseFloat(price * quantity));
  };

  return (
    <Button
      buttonText={"REMOVE"}
      onClick={() => removeItem(item.sku, item.size, item.quantity, item.price)}
      className={"c-RemoveItem"}
    />
  );
};

export default RemoveItem;
