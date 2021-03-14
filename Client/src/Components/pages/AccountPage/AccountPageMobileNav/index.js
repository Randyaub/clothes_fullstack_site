import React from "react";
import "./AccountPageMobileNav.css";

const AccountPageMobileNav = (props) => {
  return (
    <>
      <span
        className="c-AccountPageMobileNav"
        onClick={() => props.setIsNavOpen(!props.isNavOpen)}
      >
        <i class="fas fa-bars c-AccountPageMobileNav__bars"></i>
        <h3 className="c-AccountPageMobileNav__name">{props.name}</h3>
      </span>
      <div
        className={
          props.isNavOpen
            ? "c-AccountPageMobileNav__side c-AccountPageMobileNav-show"
            : "c-AccountPageMobileNav__side c-AccountPageMobileNav-hidden"
        }
      >
        <i
          onClick={() => props.setIsNavOpen(!props.isNavOpen)}
          className="fas fa-times c-AccountPageMobileNav__x"
        ></i>
        <ul>
          <li>
            <h2>{props.name}</h2>
            <div className="c-AccountPageMobileNav__underline"></div>
          </li>
          <li className="c-AccountPageMobileNav__item">
            <div className="c-AccountPage__list">
              <span>Your Orders</span> <i className="fas fa-arrow-right"></i>
            </div>
          </li>
          <li
            className="c-AccountPageMobileNav__item"
            onClick={() => props.logOutUser()}
          >
            Sign Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountPageMobileNav;
