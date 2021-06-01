import React from "react";
import InputSelect from "../../../../common/inputs/InputSelect";

import "./Quantity.css";

const Quantity = ({
  item,
  cartItems,
  setCartItems,
  cartCount,
  setCartCount,
  cartCostTotal,
  setCartCostTotal,
}) => {
  const setNewQuantity = (newQuantity) => {
    let quantityDifference, adjustedPrice, newPrice, newCartCount;

    const productIndex = cartItems.findIndex(
      (product) => product.sku === item.sku && product.size === item.size
    );

    const editedCart = [...cartItems];
    editedCart[productIndex] = {
      ...editedCart[productIndex],
      quantity: newQuantity,
    };

    if (newQuantity > item.quantity) {
      quantityDifference = newQuantity - item.quantity;
      adjustedPrice = parseFloat(item.price * quantityDifference);
      newPrice = Math.abs(cartCostTotal + adjustedPrice);
      newCartCount = cartCount + quantityDifference;
    } else if (newQuantity < item.quantity) {
      quantityDifference = item.quantity - newQuantity;
      adjustedPrice = parseFloat(item.price * quantityDifference);
      newPrice = Math.abs(cartCostTotal - adjustedPrice);
      newCartCount = cartCount - quantityDifference;
    }

    setCartCount(newCartCount);
    setCartCostTotal(newPrice);
    setCartItems(editedCart);
  };

  return (
    <div className="c-Quantity">
      <InputSelect
        value={item.quantity}
        setFunction={setNewQuantity}
        list={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
      />
    </div>
  );
};

export default Quantity;
