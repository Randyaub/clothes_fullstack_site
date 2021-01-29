import React, { useState } from "react";
import SubmitButton from "../../common/buttons/SubmitButton";

import CheckoutPaymentForm from "./CheckoutPaymentForm";

import {
  emailValid,
  inputsNotEmpty,
  isMonthSelected,
  isYearSelected,
  zipCodeValid,
  cvvValid,
} from "../../../utilities";

import "./CheckoutForm.css";
import FormItem from "../../common/FormItem";

const CheckoutForm = (props) => {
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [nameOnCardError, setNameOnCardError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expirationMonthError, setExpirationMonthError] = useState("");
  const [expirationYearError, setExpirationYearError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const isValid = () => {
    let emailValidation;
    if (props.formInfo.email != null) {
      emailValidation = emailValid(props.formInfo.email, setEmailError);
    }
    let firstNameValidation = inputsNotEmpty(
      props.formInfo.firstName,
      setFirstNameError,
      "Please enter your first name"
    );
    let lastNameValidation = inputsNotEmpty(
      props.formInfo.lastName,
      setLastNameError,
      "Please enter your last name"
    );
    let cityValidation = inputsNotEmpty(
      props.formInfo.city,
      setCityError,
      "Please enter your city"
    );
    let provinceValidation = inputsNotEmpty(
      props.formInfo.province,
      setProvinceError,
      "Please enter your province"
    );
    let addressValidation = inputsNotEmpty(
      props.formInfo.addressLine1,
      setAddress1Error,
      "Please enter your street address"
    );

    let zipCodeValidation = zipCodeValid(
      props.formInfo.zipCode,
      setZipCodeError
    );

    let nameOnCardValidation;
    let numberOnCardValidation;
    let expirationMonthValidation;
    let expirationYearValidation;
    let cvvValidation;

    if (props.formInfo.nameOnCard != null) {
      nameOnCardValidation = inputsNotEmpty(
        props.formInfo.nameOnCard,
        setNameOnCardError,
        "Please enter the name on your card"
      );
    }

    if (props.formInfo.cardNumber != null) {
      numberOnCardValidation = inputsNotEmpty(
        props.formInfo.cardNumber,
        setCardNumberError,
        "Please enter your cards number"
      );
    }

    if (props.formInfo.cardExpirationMonth != null) {
      expirationMonthValidation = isMonthSelected(
        props.formInfo.cardExpirationMonth,
        setExpirationMonthError
      );
    }

    if (props.formInfo.cardExpirationYear != null) {
      expirationYearValidation = isYearSelected(
        props.formInfo.cardExpirationYear,
        setExpirationYearError
      );
    }

    if (props.formInfo.cardCVV != null) {
      cvvValidation = cvvValid(props.formInfo.cardCVV, setCvvError);
    }

    console.log(lastNameValidation);
    if (
      emailValidation === false ||
      lastNameValidation === false ||
      firstNameValidation === false ||
      cityValidation === false ||
      provinceValidation === false ||
      addressValidation === false ||
      zipCodeValidation === false ||
      nameOnCardValidation === false ||
      numberOnCardValidation === false ||
      expirationMonthValidation === false ||
      expirationYearValidation === false ||
      cvvValidation === false
    ) {
      return false;
    } else {
      return true;
    }
  };

  const resetErrors = () => {
    setEmailError("");
    setFirstNameError("");
    setLastNameError("");
    setCityError("");
    setProvinceError("");
    setAddress1Error("");
    setZipCodeError("");
    setNameOnCardError("");
    setCardNumberError("");
    setExpirationMonthError("");
    setExpirationYearError("");
    setCvvError("");
  };

  const handleNavigate = (event) => {
    event.preventDefault();
    resetErrors();
    if (isValid()) {
      console.log("attempt");
      props.goToFunction();
    }
  };

  return (
    <form onSubmit={handleNavigate}>
      <div className="c-CheckoutForm">
        {props.formInfo.email != null && (
          <FormItem
            inputClassName={"c-Input__input c-CheckoutForm__half"}
            labelName={"Email Address"}
            inputName={"email"}
            inputValue={props.formInfo.email}
            inputPlaceHolder={"Email"}
            inputSetFunction={props.formInfo.setEmail}
            error={emailError}
          />
        )}
        <div className="c-CheckoutForm__row">
          <div className="c-CheckoutForm__half">
            <FormItem
              inputClassName={"c-Input__input c-CheckoutForm__input"}
              labelName={"First Name"}
              inputName={"firstName"}
              inputValue={props.formInfo.firstName}
              inputPlaceHolder={"First Name"}
              inputSetFunction={props.formInfo.setFirstName}
              error={firstNameError}
            />
          </div>
          <div className="c-CheckoutForm__half">
            <FormItem
              labelName={"Last Name"}
              inputName={"lastName"}
              inputValue={props.formInfo.lastName}
              inputPlaceHolder={"First Name"}
              inputSetFunction={props.formInfo.setLastName}
              error={lastNameError}
            />
          </div>
        </div>
        <div className="c-CheckoutForm__row">
          <div className="c-CheckoutForm__half">
            <FormItem
              labelName={"Address Line 1"}
              inputName={"addressLine1"}
              inputValue={props.formInfo.addressLine1}
              inputPlaceHolder={"Address Line 1"}
              inputSetFunction={props.formInfo.setAddressLine1}
              error={address1Error}
            />
          </div>
          <div className="c-CheckoutForm__half">
            <FormItem
              labelName={"Address Line 2"}
              inputName={"addressLine2"}
              inputValue={props.formInfo.addressLine2}
              inputPlaceHolder={"Address Line 2"}
              inputSetFunction={props.formInfo.setAddressLine2}
              subInfo={"Building, Unit, Floor, etc"}
            />
          </div>
        </div>
        <div className="c-CheckoutForm__row">
          <div className="c-CheckoutForm__half">
            <FormItem
              labelName={"City"}
              inputName={"city"}
              inputValue={props.formInfo.city}
              inputPlaceHolder={"City"}
              inputSetFunction={props.formInfo.setCity}
              error={cityError}
            />
          </div>
          <div className="c-CheckoutForm__half">
            <FormItem
              labelName={"Province"}
              inputName={"province"}
              inputValue={props.formInfo.province}
              inputPlaceHolder={"Province"}
              inputSetFunction={props.formInfo.setProvince}
              error={provinceError}
            />
          </div>
        </div>
        <FormItem
          inputClassName={"c-Input__input c-CheckoutForm__half"}
          labelName={"Zip Code"}
          inputName={"zipCode"}
          inputValue={props.formInfo.zipCode}
          inputPlaceHolder={"Zip Code"}
          inputSetFunction={props.formInfo.setZipCode}
          error={zipCodeError}
          subInfo={"Enter your postal code"}
        />
      </div>

      {props.formInfo.cardNumber != null &&
        props.formInfo.nameOnCard != null && (
          <CheckoutPaymentForm
            cardPaymentInfo={props.formInfo}
            nameOnCardError={nameOnCardError}
            cardNumberError={cardNumberError}
            expirationMonthError={expirationMonthError}
            expirationYearError={expirationYearError}
            cvvError={cvvError}
          />
        )}
      <SubmitButton
        buttonText={`Continue to ${props.goTo}`}
        className="default-btn small-btn"
      />
    </form>
  );
};

export default CheckoutForm;
