import React from "react";

import "./ItemQuantity.css";

const ItemQuantity = (props) => {
  const editItemQuantity = (sku, size, quantity, previousQuantity, price) => {
    //find specific item
    const item = props.cartItems.findIndex(
      (item) => item.sku === sku && item.size === size
    );
    let editedCart = [...props.cartItems];
    editedCart[item] = { ...editedCart[item], quantity: quantity };
    //increase quantity
    if (previousQuantity < quantity) {
      props.setCartCount(props.cartCount + (quantity - previousQuantity));
      props.setCartCostTotal(
        Math.abs(
          props.cartCostTotal +
            parseFloat(price * (quantity - previousQuantity))
        )
      );
      //decrease quantity
    } else if (previousQuantity > quantity) {
      props.setCartCount(props.cartCount - (previousQuantity - quantity));
      props.setCartCostTotal(
        Math.abs(
          props.cartCostTotal -
            parseFloat(price * (previousQuantity - quantity))
        )
      );
    }
    props.setCartItems(editedCart);
    console.log(editedCart);
  };

  return (
    <select
      defaultValue={props.item.quantity}
      onChange={(e) =>
        editItemQuantity(
          props.item.sku,
          props.item.size,
          e.target.value,
          props.item.quantity,
          props.item.price
        )
      }
      className="c-ItemQuantity"
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      <option value={10}>10</option>
    </select>
  );
};

export default ItemQuantity;
