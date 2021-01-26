import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../common/LoginForm";
import "./MemberOrGuest.css";

const MemberOrGuest = (props) => {
  return (
    <>
      <div className="c-MemberOrGuest">
        <h1> SIGN IN </h1>
        <div className="l-MemberOrGuest">
          <div className="c-MemberOrGuest__login">
            <h1>RETURNING CUSTOMER</h1>
            <div>Already have an account sign in here.</div>
            <LoginForm
              goToHomePage={props.goToHomePage}
              setUserLoggedIn={props.setUserLoggedIn}
            />
          </div>
          <div className="c-MemberOrGuest__guest">
            <h1>GUEST CHECKOUT</h1>
            <div>If you dont have an account, you can use guest checkout</div>
            <Link to="/shipping-checkout">
              <button className="default-btn">GUEST CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberOrGuest;
