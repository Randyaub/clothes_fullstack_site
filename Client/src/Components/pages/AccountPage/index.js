import React, { useState, useEffect, useContext } from "react";
import useToken from "../../../utility/useToken";
import Orders from "../../common/Orders";
import axios from "axios";
import "./AccountPage.css";
import AccountPageMobileNav from "./AccountPageMobileNav";
import { UserContext } from "../../../utility/context/UserContext";

const AccountPage = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [userOrders, setUserOrders] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { token } = useToken();

  useEffect(() => {
    axios({
      method: "GET",
      url: `user/account/user/${user.user.id}`,
      headers: { Authorization: "Bearer " + token },
    }).then((result) => {
      setUserOrders(result.data.user_orders);
      setLoading(false);
    });
  }, [user.user.id]);

  return loading ? (
    ""
  ) : (
    <>
      <div className="c-AccountPage__user">Welcome {user.user.first_name}</div>
      <div className="c-AccountPage">
        <div className="c-AccountPage__sidebar">
          <div>
            <div className="c-AccountPage__underline"></div>
            <ul>
              <li className="c-AccountPage__item">
                <div className="c-AccountPage__list">
                  <span>Your Orders</span>{" "}
                  <i className="fas fa-arrow-right"></i>
                </div>
              </li>
              {/* <li>
              <div className="c-AccountPage__list">
                <span>Settings</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </li> */}
              <li className="c-AccountPage__item" onClick={() => user.logOut()}>
                Sign Out
              </li>
            </ul>
          </div>
        </div>
        <AccountPageMobileNav
          name={user.user.first_name}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
        <div className="c-AccountPage__orders">
          <div>
            <h3 className="c-AccountPage__heading">Most Recent Orders</h3>
            <h4 className="c-AccountPage__paragraph">
              Your 10 most recent orders
            </h4>
            <Orders order={userOrders} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
