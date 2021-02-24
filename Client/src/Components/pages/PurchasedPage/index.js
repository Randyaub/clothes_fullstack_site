import React from "react";
import { Redirect } from "react-router-dom";
import LinkButton from "../../common/buttons/LinkButton";
import "./PurchasedPage.css";

const PurchasedPage = (props) => {
  return !props.hasCompletedOrder ? (
    <Redirect to="/" />
  ) : (
    <div className="c-PurchasedPage">
      <div className="c-PurchasedPage__text">
        <h1>THANK YOU FOR YOUR PURCHASE</h1>
        <span>
          If you are logged in you may view your orders from the account page.
          Otherwise you can navigate to the guest purchases page to view the 10
          most recent guest purchases.
        </span>
      </div>
      <div className="c-PurchasedPage__btns">
        <div className="l-PurchasedPage__btns">
          <LinkButton
            className="default-btn small-btn"
            buttonText={"Back to Home"}
            url={"/"}
          />
        </div>
        <div className="l-PurchasedPage__btns">
          <LinkButton
            className="default-btn small-btn"
            buttonText={"Continue Shopping"}
            url={"/men"}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasedPage;
