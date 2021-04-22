import React, { useContext } from "react";
import LinkButton from "../../../../../../buttons/LinkButton";
import { UserContext } from "../../../../../../../../utility/context/UserContext";
import "./CartDropDownSummary.css";

const CartDropDownSummary = ({ cartCount, cartCostTotal }) => {
  const user = useContext(UserContext);

  return (
    <div className="c-CartDropDownSummary">
      <div className="c-CartDropDownSummary__price">
        <h3>TOTAL ({cartCount})</h3>
        <h3>${cartCostTotal.toFixed(2)}</h3>
      </div>
      <LinkButton
        url={user.isAuth ? "/shipping-checkout" : "/login/checkout"}
        buttonText={"CHECKOUT"}
      />
      <LinkButton
        url={"/cart"}
        buttonText={"VIEW BAG"}
        className={"inverted-btn"}
      />
    </div>
  );
};

export default CartDropDownSummary;
