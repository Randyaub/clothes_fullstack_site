import { useState } from "react";

export default function useLocalStorageCart() {
  const getLocalStorageCart = () => {
    return localStorage.getItem("cart");
  };

  const [localStorageCart, setLocalStorageCart] = useState(
    getLocalStorageCart()
  );

  const saveLocalStorageCart = (cartItems, cartCount, cartCostTotal) => {
    const cart = JSON.stringify({
      cartItems: cartItems,
      cartCount: cartCount,
      cartCostTotal: cartCostTotal,
    });
    localStorage.setItem("cart", cart);
    setLocalStorageCart(cart);
  };

  return {
    setLocalStorageCart: saveLocalStorageCart,
    localStorageCart,
  };
}
