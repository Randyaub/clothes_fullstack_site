import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./PaymentPage.css";
import CheckoutForm from "../CheckoutForm";
import BreadCrumbIndicator from "../BreadCrumbIndicator";
import CheckoutSummary from "../CheckoutSummary";
import InputCheckbox from "../../../common/inputs/InputCheckbox";

const PaymentPage = (props) => {
  let history = useHistory();

  const goToOrder = () => {
    history.push("/order-checkout");
  };

  //Use shipping information for billing toggle
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const handleChange = (event) => {
    setSameAsShipping(event.target.checked);

    if (event.target.checked) {
      props.formInfo.setFirstName(props.shippingInfo.firstName);
      props.formInfo.setLastName(props.shippingInfo.lastName);
      props.formInfo.setAddressLine1(props.shippingInfo.addressLine1);
      props.formInfo.setAddressLine2(props.shippingInfo.addressLine2);
      props.formInfo.setCity(props.shippingInfo.city);
      props.formInfo.setProvince(props.shippingInfo.province);
      props.formInfo.setZipCode(props.shippingInfo.zipCode);
    } else if (!event.target.checked) {
      props.formInfo.setFirstName("");
      props.formInfo.setLastName("");
      props.formInfo.setAddressLine1("");
      props.formInfo.setAddressLine2("");
      props.formInfo.setCity("");
      props.formInfo.setProvince("PROVINCE*");
      props.formInfo.setZipCode("");
    }
  };

  return (
    <>
      <BreadCrumbIndicator checkoutPosition={"payment"} />
      <div className="l-Payment">
        <div className="c-Payment">
          <h2 className="c-CheckoutForm__headers">BILLING ADDRESS</h2>
          <InputCheckbox
            labelText={"USE SHIPPING ADDRESS AS BILLING"}
            value={sameAsShipping}
            handleChange={handleChange}
          />
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
