import React, { useState } from "react";
import CartDropDownList from "../common/CartDropDown/CartDropDownList";
import CartSummary from "../CartPage/CartSummary";
import "./CheckoutPage.css";
import Shipping from "./Shipping";
import Payment from "./Payment";

const CheckoutPage = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [onShipping, setOnShipping] = useState(true);
  const [onPayment, setOnPayment] = useState(false);
  const [onOrder, setOnOrder] = useState(false);

  return (
    <>
      <div className="c-CheckoutPage__sections">
        <div
          className={
            onShipping
              ? "c-CheckoutPage-active c-CheckoutPage__tag"
              : "c-CheckoutPage__tag"
          }
        >
          SHIPPING INFO
        </div>
        <div
          className={
            onPayment
              ? "c-CheckoutPage-active c-CheckoutPage__tag"
              : "c-CheckoutPage__tag"
          }
        >
          PAYMENT INFO
        </div>
        <div
          className={
            onOrder
              ? "c-CheckoutPage-active c-CheckoutPage__tag"
              : "c-CheckoutPage__tag"
          }
        >
          PLACE ORDER
        </div>
      </div>
      <div className="c-CheckoutPage">
        {onShipping && (
          <Shipping
            email={email}
            setEmail={setEmail}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            addressLine1={addressLine1}
            setAddressLine1={setAddressLine1}
            addressLine2={addressLine2}
            setAddressLine2={setAddressLine2}
            city={city}
            setCity={setCity}
            province={province}
            setProvince={setProvince}
            zipCode={zipCode}
            setZipCode={setZipCode}
            setOnShipping={setOnShipping}
            setOnPayment={setOnPayment}
            setOnOrder={setOnOrder}
          />
        )}
        {onPayment && (
          <Payment
            setOnShipping={setOnShipping}
            setOnPayment={setOnPayment}
            setOnOrder={setOnOrder}
          />
        )}
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
