import React from "react";
import { Redirect } from "react-router-dom";
import LinkButton from "../../common/buttons/LinkButton";

import "./AfterPurchase.css";

const AfterPurchase = ({ hasCompletedOrder }) => {
  return !hasCompletedOrder ? (
    <Redirect to="/" />
  ) : (
    <div className="c-AfterPurchase">
      <div className="c-AfterPurchase__text">
        <h2>THANK YOU FOR YOUR PURCHASE</h2>
        <span>
          If you are logged in you may view your orders from the account page.
          Otherwise you can navigate to the guest purchases page to view the
          most recent guest purchases.
        </span>
      </div>
      <div className="c-AfterPurchase__btns">
        <div className="l-AfterPurchase__btns">
          <LinkButton
            className="default-btn small-btn"
            buttonText={"Back to Home"}
            url={"/"}
          />
        </div>
        <div className="l-AfterPurchase__btns">
          <LinkButton
            className="default-btn small-btn"
            buttonText={"Continue Shopping"}
            url={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AfterPurchase;
