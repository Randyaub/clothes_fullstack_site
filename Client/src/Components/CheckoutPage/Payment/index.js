import React from "react";

import "./Payment.css";

const Payment = (props) => {
  const backToShipping = () => {
    props.setOnShipping(true);
    props.setOnPayment(false);
    props.setOnOrder(false);
  };

  return (
    <>
      <div className="c-Payment">
        <button className="default-btn" onClick={backToShipping}>
          GO BACK
        </button>
        <form></form>
      </div>
    </>
  );
};

export default Payment;
