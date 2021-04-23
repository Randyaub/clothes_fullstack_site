import React from "react";
import "./Cart.css";

import CartDropDownList from "./CartDropDownList";
import CartDropDownSummary from "./CartDropDownSummary";

const CartDropDown = ({
  productAdded,
  cartCostTotal,
  cartCount,
  cartItems,
}) => {
  return (
    <div className={productAdded ? `c-Cart show` : `c-Cart hidden`}>
      {cartCount !== 0 ? (
        <>
          <CartDropDownList cartItems={cartItems} />
          <CartDropDownSummary
            cartCount={cartCount}
            cartCostTotal={cartCostTotal}
          />
        </>
      ) : (
        "Your Cart Is Empty"
      )}
    </div>
  );
};

export default CartDropDown;
