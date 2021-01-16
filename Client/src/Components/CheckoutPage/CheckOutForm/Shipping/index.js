import React from "react";
import { Link } from "react-router-dom";

import "./Shipping.css";
import ShippingInputRow from "./ShippingInputRow";

const Shipping = (props) => {
  return (
    <div className="c-Shipping">
      <h2 className="c-Shipping__headers">MY INFO</h2>
      <ShippingInputRow
        rows={[
          {
            name: "Email",
            value: props.email,
            setFunction: props.setEmail,
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
            },
            {
              name: "Last Name",
              value: props.lastName,
              setFunction: props.setLastName,
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
            },
            {
              name: "Province",
              value: props.province,
              setFunction: props.setProvince,
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
            },
          ]}
        />
      </div>
      <Link to="checkout/payment">
        <button className="default-btn">Continue To Payment</button>
      </Link>
    </div>
  );
};

export default Shipping;
