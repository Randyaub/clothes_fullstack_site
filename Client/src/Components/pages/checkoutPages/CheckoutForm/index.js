import React, { useState } from "react";
import SubmitButton from "../../../common/buttons/SubmitButton";

import CheckoutPaymentForm from "./CheckoutPaymentForm";

import {
  emailValid,
  inputsNotEmpty,
  isMonthSelected,
  inputEqualTo,
  isYearSelected,
  zipCodeValid,
  cvvValid,
  provinces,
  creditCardNumberValidation,
} from "../../../../utility/utilities";

import "./CheckoutForm.css";
import FormItem from "../../../common/form/FormItem";
import ShippingMethod from "./ShippingMethod";
import InputSelect from "../../../common/inputs/InputSelect";
import Label from "../../../common/form/FormItem/Label";

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
    let provinceValidation = inputEqualTo(
      props.formInfo.province,
      "PROVINCE*",
      setProvinceError,
      "Please select your province"
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
      numberOnCardValidation = creditCardNumberValidation(
        props.formInfo.cardNumber,
        setCardNumberError
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
      props.goToFunction();
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleNavigate}>
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
            maxLength={"40"}
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
              maxLength={"40"}
              regex={/^[A-Za-z]+$/}
            />
          </div>
          <div className="c-CheckoutForm__half">
            <FormItem
              labelName={"Last Name"}
              inputName={"lastName"}
              inputValue={props.formInfo.lastName}
              inputPlaceHolder={"Last Name"}
              inputSetFunction={props.formInfo.setLastName}
              error={lastNameError}
              maxLength={"40"}
              regex={/^[A-Za-z]+$/}
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
              maxLength={"40"}
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
              maxLength={"40"}
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
              maxLength={"40"}
              regex={/^[A-Za-z]+$/}
            />
          </div>
          <div className="c-CheckoutForm__half">
            <Label name={"Province"} />
            <InputSelect
              value={props.formInfo.province}
              setFunction={props.formInfo.setProvince}
              list={provinces}
              regex={/^[A-Za-z]+$/}
            />
            <div className="c-Input__error">{provinceError}</div>
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
          maxLength={"6"}
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

      {props.formInfo.shippingMethod != null && (
        <>
          <h2 className="c-CheckoutForm__headers">SHIPPING METHOD</h2>
          <ShippingMethod formInfo={props.formInfo} />
        </>
      )}
      <SubmitButton
        buttonText={`Continue to ${props.goTo}`}
        className="default-btn small-btn"
      />
    </form>
  );
};

export default CheckoutForm;
