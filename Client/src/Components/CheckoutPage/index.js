import React from "react";
import CartDropDownList from "../common/CartDropDown/CartDropDownList";
import CartSummary from "../CartPage/CartSummary";
import "./CheckoutPage.css";
import CheckoutForm from "./CheckOutForm";

const CheckoutPage = (props) => {
  return (
    <>
      <h1>Checkout Page</h1>
      <div className="c-CheckoutPage">
        <CheckoutForm />
        <div className="c-CheckoutPage__summary">
          <div>
            <h1 className="c-CheckoutPage__title">Order Summary</h1>
            <div className="c-CheckoutPage__list">
              <CartDropDownList cartItems={props.cartItems} />
            </div>
          </div>
          <div className="c-CheckoutPage__details">
            <CartSummary
              cartCount={props.cartCount}
              cartCostTotal={props.cartCostTotal}
              userLoggedIn={props.userLoggedIn}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
