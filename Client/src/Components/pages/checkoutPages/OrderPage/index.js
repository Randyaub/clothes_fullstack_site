import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./OrderPage.css";

import BreadCrumbIndicator from "../BreadCrumbIndicator";
import OrderInformation from "./OrderInformation";
import Button from "../../../common/buttons/Button";
import CheckoutSummary from "../CheckoutSummary";
import useLocalStorageCart from "../../../../utility/useLocalStorageCart";
import useToken from "../../../../utility/useToken";

const OrderPage = (props) => {
  let history = useHistory();
  const { shippingInfo } = props;
  const { billingInfo } = props;
  const { setLocalStorageCart } = useLocalStorageCart();
  const { token } = useToken();

  const goToOrderCompletedPage = () => {
    history.push("/checkout/order-submitted");
    props.setHasCompletedOrder(true);
  };

  const resetCartAndGoToNextPage = () => {
    //Empty local storage
    setLocalStorageCart();
    //Remove purchased items
    props.setCartItems([]);
    props.setCartCount(0);
    props.setCartCostTotal(0);
    goToOrderCompletedPage();
  };

  const loggedInAxiosRequest = {
    method: "POST",
    url: "order/confirm-order-user",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      shippingInformation: shippingInfo,
      checkoutItems: props.cartItems,
    },
  };

  const guestAxiosRequest = {
    method: "POST",
    url: "order/confirm-order-guest",
    data: {
      shippingInformation: shippingInfo,
      checkoutItems: props.cartItems,
    },
  };

  const handleClick = () => {
    if (props.isLoggedIn) {
      axios(loggedInAxiosRequest).then(() => {
        resetCartAndGoToNextPage();
      });
    } else {
      axios(guestAxiosRequest).then(() => {
        resetCartAndGoToNextPage();
      });
    }
  };
  return !props.hasVisitedPayment || !props.hasVisitedShipping ? (
    <Redirect to="shipping-checkout" />
  ) : (
    <>
      <BreadCrumbIndicator checkoutPosition={"order"} />
      <div className="c-Order">
        <div className="l-Order">
          <div className="c-Order__information">
            <div className="c-OrderPage__submit">
              <h2 className="c-CheckoutForm__headers">REVIEW YOUR ORDER</h2>
            </div>
            <div className="c-Order__review">
              <div className="c-Order__section">
                <h2 className="c-OrderPage__title">SHIPPING</h2>
                <OrderInformation
                  title={"SHIPPING ADDRESS"}
                  information={[
                    `${shippingInfo.firstName} ${shippingInfo.lastName}`,
                    `${shippingInfo.addressLine1} ${
                      shippingInfo.addressLine2 && shippingInfo.addressLine2
                    }`,
                    `${shippingInfo.city}, ${shippingInfo.province}, ${shippingInfo.zipCode}`,
                  ]}
                />
                <OrderInformation
                  title={"SHIPPING METHOD"}
                  information={[`${shippingInfo.shippingMethod} Shipping`]}
                />
              </div>
              <div className="c-Order__section">
                <h2 className="c-OrderPage__title">PAYMENT</h2>
                <OrderInformation
                  title={"BILLING ADDRESS"}
                  information={[
                    `${billingInfo.firstName} ${billingInfo.lastName}`,
                    `${billingInfo.addressLine1} ${
                      billingInfo.addressLine2 && billingInfo.addressLine2
                    }`,
                    `${billingInfo.city}, ${billingInfo.province}, ${billingInfo.zipCode}`,
                  ]}
                />
                <OrderInformation
                  title={"PAYMENT INFO"}
                  information={[
                    `Credit Card`,
                    `Card Name: ${billingInfo.nameOnCard}`,
                    `Card #: ${billingInfo.cardNumber}`,
                  ]}
                />
              </div>
              <div className="c-Order__section">
                <h2 className="c-OrderPage__title">CONTACT</h2>
                <OrderInformation
                  title={"CONTACT INFO"}
                  information={[
                    `${shippingInfo.firstName} ${shippingInfo.lastName}`,
                    `${shippingInfo.email}`,
                  ]}
                />
              </div>
            </div>
          </div>
          <CheckoutSummary
            cartItems={props.cartItems}
            cartCount={props.cartCount}
            cartCostTotal={props.cartCostTotal}
          />
        </div>
        <Button
          onClick={handleClick}
          className="large-btn red-btn"
          buttonText="PLACE YOUR ORDER"
        />
      </div>
    </>
  );
};

export default OrderPage;
