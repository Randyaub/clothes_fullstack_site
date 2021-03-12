import React from "react";
import { useHistory, Redirect } from "react-router-dom";

import "./ShippingPage.css";
import CheckoutForm from "../CheckoutForm";
import BreadCrumbIndicator from "../BreadCrumbIndicator";
import CheckoutSummary from "../CheckoutSummary";

const ShippingPage = (props) => {
  let history = useHistory();

  const goToPayment = () => {
    props.setHasVisitedShipping(true);
    history.push("/billing-checkout");
  };

  return !props.cartCount > 0 ? (
    <Redirect to="/" />
  ) : (
    <>
      <BreadCrumbIndicator checkoutPosition={"shipping"} />
      <div className="l-Shipping">
        <div className="c-Shipping">
          <h2 className="c-CheckoutForm__headers">SHIPPING ADDRESS</h2>
          <CheckoutForm
            formInfo={props.formInfo}
            goToFunction={goToPayment}
            goTo={"Payment"}
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

export default ShippingPage;
