import React, { useState } from "react";

import CheckoutInputRow from "./CheckoutInputRow";
import CheckoutPaymentInformation from "./CheckoutPaymentInformation";

const CheckoutForm = (props) => {
  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [nameOnCardError, setNameOnCardError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  const isValid = () => {
    let emailError = "";
    let cityError = "";
    let provinceError = "";
    let firstNameError = "";
    let lastNameError = "";
    let address1Error = "";
    let zipCodeError = "";
    let nameOnCardError = "";
    let cardNumberError = "";

    if (!props.formInfo.email && props.formInfo.email != null) {
      emailError = "Please enter an email address";
    }
    if (!props.formInfo.firstName) {
      firstNameError = "Please enter your name";
    }
    if (!props.formInfo.lastName) {
      lastNameError = "Please enter your last name";
    }
    if (
      props.formInfo.email &&
      (!props.formInfo.email.includes("@") ||
        !props.formInfo.email.includes("."))
    ) {
      emailError = "Please enter a valid email address";
    }
    if (!props.formInfo.city) {
      cityError = "Please enter your city";
    }
    if (!props.formInfo.province) {
      provinceError = "Please enter your province";
    }
    if (!props.formInfo.addressLine1) {
      address1Error = "Please enter your address";
    }
    if (!props.formInfo.zipCode) {
      zipCodeError = "Please enter your zipcode";
    }
    if (props.formInfo.zipCode.length !== 6) {
      zipCodeError = "Your zip code must be 6 digits";
    }
    if (!props.formInfo.nameOnCard && props.formInfo.nameOnCard != null) {
      nameOnCardError = "Please enter the name on your card";
    }
    if (!props.formInfo.cardNumber && props.formInfo.cardNumber != null) {
      cardNumberError = "Please enter the number on your card";
    }

    if (
      emailError ||
      cityError ||
      provinceError ||
      firstNameError ||
      lastNameError ||
      zipCodeError ||
      address1Error ||
      nameOnCardError ||
      cardNumberError
    ) {
      setEmailError(emailError);
      setCityError(cityError);
      setProvinceError(provinceError);
      setFirstNameError(firstNameError);
      setLastNameError(lastNameError);
      setZipCodeError(zipCodeError);
      setAddress1Error(address1Error);
      setNameOnCardError(nameOnCardError);
      setCardNumberError(cardNumberError);
      return false;
    }

    return true;
  };

  const handleNavigate = (event) => {
    event.preventDefault();
    if (isValid()) {
      props.goToFunction();
    }
  };

  return (
    <form onSubmit={handleNavigate}>
      <div className="c-CheckoutForm__user">
        {props.formInfo.email != null && (
          <CheckoutInputRow
            rows={[
              {
                name: "Email",
                value: props.formInfo.email,
                setFunction: props.formInfo.setEmail,
                error: emailError,
              },
            ]}
          />
        )}
        <CheckoutInputRow
          rows={[
            {
              name: "First Name",
              value: props.formInfo.firstName,
              setFunction: props.formInfo.setFirstName,
              error: firstNameError,
            },
            {
              name: "Last Name",
              value: props.formInfo.lastName,
              setFunction: props.formInfo.setLastName,
              error: lastNameError,
            },
          ]}
        />
        <CheckoutInputRow
          rows={[
            {
              name: "Address Line 1",
              value: props.formInfo.addressLine1,
              setFunction: props.formInfo.setAddressLine1,
              subInfo: "Street Name, Street Number",
              error: address1Error,
            },
            {
              name: "Address Line 2",
              value: props.formInfo.addressLine2,
              setFunction: props.formInfo.setAddressLine2,
              subInfo: "Building, Unit, Floor, etc",
            },
          ]}
        />
        <CheckoutInputRow
          rows={[
            {
              name: "City",
              value: props.formInfo.city,
              setFunction: props.formInfo.setCity,
              error: cityError,
            },
            {
              name: "Province",
              value: props.formInfo.province,
              setFunction: props.formInfo.setProvince,
              error: provinceError,
            },
          ]}
        />
        <CheckoutInputRow
          rows={[
            {
              name: "Zip Code",
              value: props.formInfo.zipCode,
              setFunction: props.formInfo.setZipCode,
              subInfo: "Enter your postal code",
              error: zipCodeError,
            },
          ]}
        />
      </div>

      {props.formInfo.cardNumber != null &&
        props.formInfo.nameOnCard != null && (
          <CheckoutPaymentInformation
            nameOnCard={props.formInfo.nameOnCard}
            setNameOnCard={props.formInfo.setNameOnCard}
            cardNumber={props.formInfo.cardNumber}
            setCardNumber={props.formInfo.setCardNumber}
            nameOnCardError={nameOnCardError}
            cardNumberError={cardNumberError}
          />
        )}

      <button type="submit" className="default-btn">
        Continue To {props.formInfo.goTo}
      </button>
    </form>
  );
};

export default CheckoutForm;
