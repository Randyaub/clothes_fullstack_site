import React from "react";

import DropDownList from "../../../../common/DropDownList";
import Label from "../../../../common/FormItem/Label";

import "./CreditCardExpiration.css";

const CreditCardExpiration = () => {
  const months = [
    "MONTH*",
    "01 - January",
    "02 - February",
    "03 - March",
    "04 - April",
    "05 - May",
    "06 - June",
    "07 - July",
    "08 - August",
    "09 - September",
    "10 - October",
    "11 - November",
    "12 - December",
  ];

  const years = [
    "YEAR*",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
  ];

  return (
    <>
      <Label name={"Expiration Date:"} />
      <div className="c-CreditCard__half">
        <DropDownList list={months} />
        <DropDownList list={years} />
      </div>
    </>
  );
};

export default CreditCardExpiration;
