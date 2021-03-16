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
        <span className="c-Header__left">
          This Is A <span className="active">DEMONSTRATION</span> Website.
        </span>
        <div className="c-Header__right">
          <span className="c-Header__column">
            <GuestOrdersNavigationLink />
          </span>
          <span className="c-Header__column">
            <AccountNavigationLink
              isLoggedIn={props.isLoggedIn}
              logOutUser={props.logOutUser}
              user={props.user}
            />
          </span>
          <span className="c-Header__column">
            <CartNavigationLink
              setProductAdded={props.setProductAdded}
              productAdded={props.productAdded}
              cartCount={props.cartCount}
              cartItems={props.cartItems}
              cartCostTotal={props.cartCostTotal}
              isLoggedIn={props.isLoggedIn}
              total={props.cartCount}
            />
          </span>
        </div>
      </div>
      <StoreLogo />
      <CategoryNavigation />
    </header>
  );
};

export default Header;
