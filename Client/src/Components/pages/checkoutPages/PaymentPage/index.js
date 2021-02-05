import React from "react";
import { useHistory } from "react-router-dom";

import "./PaymentPage.css";
import CheckoutForm from "../CheckoutForm";
import BreadCrumbIndicator from "../BreadCrumbIndicator";
import CheckoutSummary from "../CheckoutSummary";

const PaymentPage = (props) => {
  let history = useHistory();

  const goToOrder = () => {
    history.push("/order-checkout");
  };

  return (
    <>
      <BreadCrumbIndicator checkoutPosition={"payment"} />
      <div className="l-Payment">
        <div className="c-Payment">
          <h2 className="c-CheckoutForm__headers">BILLING ADDRESS</h2>
          <CheckoutForm
            formInfo={props.formInfo}
            goToFunction={goToOrder}
            goTo={"Order"}
            checkoutPosition={"payment"}
          />
        </div>
        <CheckoutSummary
          cartItems={props.cartItems}
          cartCount={props.cartCount}
          cartCostTotal={props.cartCostTotal}
        />
      </div>
    </>
  );
};

export default PaymentPage;
