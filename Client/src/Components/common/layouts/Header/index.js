import React from "react";
import "./Header.css";
import CategoryNavigation from "./CategoryNavigation";
import StoreLogo from "./StoreLogo";
import AccountNavigationLink from "./navigationLinks/AccountNavigationLink";
import CartNavigationLink from "./navigationLinks/CartNavigationLink";
import GuestOrdersNavigationLink from "./navigationLinks/GuestOrdersNavigationLink";

const Header = (props) => {
  return (
    <header className="c-Header">
      <div className="c-Header__bar">
        <span className="c-Header__column">
          <GuestOrdersNavigationLink />
        </span>
        <span className="c-Header__column">
          <AccountNavigationLink
            userLoggedIn={props.userLoggedIn}
            logOutUser={props.logOutUser}
          />
        </span>
        <span className="c-Header__column">
          <CartNavigationLink
            setProductAdded={props.setProductAdded}
            productAdded={props.productAdded}
            cartCount={props.cartCount}
            cartItems={props.cartItems}
            cartCostTotal={props.cartCostTotal}
            userLoggedIn={props.userLoggedIn}
            total={props.cartCount}
          />
        </span>
      </div>
      <StoreLogo />
      <CategoryNavigation />
    </header>
  );
};

export default Header;
