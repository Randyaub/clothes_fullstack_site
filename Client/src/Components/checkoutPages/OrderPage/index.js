import React from "react";
import { useHistory } from "react-router-dom";

import "./OrderPage.css";
import CheckoutForm from "../CheckoutForm";
import BreadCrumbIndicator from "../BreadCrumbIndicator";
import CheckoutSummary from "../CheckoutSummary";

const OrderPage = (props) => {
  let history = useHistory();

  return (
    <>
      <BreadCrumbIndicator checkoutPosition={"order"} />
      <div className="l-Order">
        <div className="c-Order"></div>
        <CheckoutSummary
          cartItems={props.cartItems}
          cartCount={props.cartCount}
          cartCostTotal={props.cartCostTotal}
        />
      </div>
    </>
  );
};

export default OrderPage;
