import React from "react";
import "./ItemQuantity.css";

import InputSelect from "../../../../common/inputs/InputSelect";

const ItemQuantity = (props) => {
  const setNewQuantity = (newQuantity) => {
    let quantityDifference;
    let adjustedPrice;
    let newPrice;
    let newCartCount;
    //Find Products index in cartItems
    const productIndex = props.cartItems.findIndex(
      (product) =>
        product.sku === props.item.sku && product.size === props.item.size
    );
    //Edits the carts quantity at productIndex
    const editedCart = [...props.cartItems];
    editedCart[productIndex] = {
      ...editedCart[productIndex],
      quantity: newQuantity,
    };
    //If selected higher quantity
    if (newQuantity > props.item.quantity) {
      //Calculations
      quantityDifference = newQuantity - props.item.quantity;
      adjustedPrice = parseFloat(props.item.price * quantityDifference);
      newPrice = Math.abs(props.cartCostTotal + adjustedPrice);
      newCartCount = props.cartCount + quantityDifference;
      //Set CartCount and Total
      props.setCartCount(newCartCount);
      props.setCartCostTotal(newPrice);
      //If selected lower quantity
    } else if (newQuantity < props.item.quantity) {
      //Calculations
      quantityDifference = props.item.quantity - newQuantity;
      adjustedPrice = parseFloat(props.item.price * quantityDifference);
      newPrice = Math.abs(props.cartCostTotal - adjustedPrice);
      newCartCount = props.cartCount - quantityDifference;
      //Set CartCount and Total
      props.setCartCount(newCartCount);
      props.setCartCostTotal(newPrice);
    }
    // Updates CartItems with new quantity
    props.setCartItems(editedCart);
  };

  return (
    <div className="c-ItemQuantity">
      <InputSelect
        value={props.item.quantity}
        setFunction={setNewQuantity}
        list={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
      />
    </div>
  );
};

export default ItemQuantity;
