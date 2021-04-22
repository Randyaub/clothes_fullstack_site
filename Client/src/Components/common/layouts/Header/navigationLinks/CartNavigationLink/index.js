import React from "react";
import CartDropDown from "./CartDropDown";
import CartAmountIcon from "./CartAmountIcon";
import { Link } from "react-router-dom";

const CartNavigationLink = (props) => {
  return (
    <>
      <Link className="c-Header__link" to="/cart">
        <CartAmountIcon total={props.cartCount} />
        <span className="small-phone-hide">Cart</span>
      </Link>
      <CartDropDown
        setProductAdded={props.setProductAdded}
        productAdded={props.productAdded}
        cartCount={props.cartCount}
        cartItems={props.cartItems}
        cartCostTotal={props.cartCostTotal}
      />
    </>
  );
};

export default CartNavigationLink;
