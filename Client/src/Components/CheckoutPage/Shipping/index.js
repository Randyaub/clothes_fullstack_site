import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Shipping.css";
import ShippingInputRow from "./ShippingInputRow";

const Shipping = (props) => {
  let history = useHistory();

  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");

  const isValid = () => {
    let emailError = "";
    let cityError = "";
    let provinceError = "";
    let firstNameError = "";
    let lastNameError = "";
    let address1Error = "";
    let zipCodeError = "";

    if (!props.email) {
      emailError = "Please enter an email address";
    }
    if (!props.firstName) {
      firstNameError = "Please enter your name";
    }
    if (!props.lastName) {
      lastNameError = "Please enter your last name";
    }
    if (!props.email.includes("@") || !props.email.includes(".")) {
      emailError = "Please enter a valid email address";
    }
    if (!props.city) {
      cityError = "Please enter your city";
    }
    if (!props.province) {
      provinceError = "Please enter your province";
    }
    if (!props.addressLine1) {
      address1Error = "Please enter your address";
    }
    if (!props.zipCode) {
      zipCodeError = "Please enter your zipcode";
    }
    if (props.zipCode.length !== 6) {
      zipCodeError = "Your zip code must be 6 digits";
    }

    if (
      emailError ||
      cityError ||
      provinceError ||
      firstNameError ||
      lastNameError ||
      zipCodeError ||
      address1Error
    ) {
      setEmailError(emailError);
      setCityError(cityError);
      setProvinceError(provinceError);
      setFirstNameError(firstNameError);
      setLastNameError(lastNameError);
      setZipCodeError(zipCodeError);
      setAddress1Error(address1Error);
      return false;
    }
    return true;
  };

  const handleNavigateToPayment = (event) => {
    event.preventDefault();
    if (isValid()) {
      history.push("checkout/payment");
    }
  };

  return (
    <>
      <div className="c-Shipping">
        <form onSubmit={handleNavigateToPayment}>
          <h2 className="c-Shipping__headers">EMAIL</h2>

          <ShippingInputRow
            rows={[
              {
                name: "Email",
                value: props.email,
                setFunction: props.setEmail,
                error: emailError,
              },
            ]}
          />
          <div className="c-Shipping__user">
            <h2 className="c-Shipping__headers">SHIPPING ADDRESS</h2>
            <ShippingInputRow
              rows={[
                {
                  name: "First Name",
                  value: props.firstName,
                  setFunction: props.setFirstName,
                  error: firstNameError,
                },
                {
                  name: "Last Name",
                  value: props.lastName,
                  setFunction: props.setLastName,
                  error: lastNameError,
                },
              ]}
            />
            <ShippingInputRow
              rows={[
                {
                  name: "Address Line 1",
                  value: props.addressLine1,
                  setFunction: props.setAddressLine1,
                  subInfo: "Street Name, Street Number",
                  error: address1Error,
                },
                {
                  name: "Address Line 2",
                  value: props.addressLine2,
                  setFunction: props.setAddressLine2,
                  subInfo: "Building, Unit, Floor, etc",
                },
              ]}
            />
            <ShippingInputRow
              rows={[
                {
                  name: "City",
                  value: props.city,
                  setFunction: props.setCity,
                  error: cityError,
                },
                {
                  name: "Province",
                  value: props.province,
                  setFunction: props.setProvince,
                  error: provinceError,
                },
              ]}
            />
            <ShippingInputRow
              rows={[
                {
                  name: "Zip Code",
                  value: props.zipCode,
                  setFunction: props.setZipCode,
                  subInfo: "Enter your postal code",
                  error: zipCodeError,
                },
              ]}
            />
          </div>
          <button type="submit" className="default-btn">
            Continue To Payment
          </button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
