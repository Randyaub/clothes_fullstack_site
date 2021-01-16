import React, { useState } from "react";
import Shipping from "./Shipping";

const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <>
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
        ziplCode={zipCode}
        setZipCode={setZipCode}
      />
      {/* <Payment email={email} setEmail={setEmail} />
      <Order email={email} setEmail={setEmail} /> */}
    </>
  );
};

export default CheckoutForm;
