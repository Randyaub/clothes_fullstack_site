import React, { useState, useEffect } from "react";
import useToken from "../../../utility/useToken";
import Orders from "../../common/Orders";
import axios from "axios";
import "./AccountPage.css";

const AccountPage = ({ user, logOutUser }) => {
  const [loading, setLoading] = useState(true);
  const [userOrders, setUserOrders] = useState([]);
  const { token } = useToken();

  useEffect(() => {
    axios({
      method: "GET",
      url: `user/account/user/${user.id}`,
      headers: { Authorization: "Bearer " + token },
    }).then((result) => {
      setUserOrders(result.data.user_orders);
      setLoading(false);
    });
  }, [user.id]);

  return loading ? (
    ""
  ) : (
    <div className="c-AccountPage">
      <div className="c-AccountPage__sidebar">
        <div className="c-AccountPage__user">Welcome {user.first_name}</div>
        <div className="c-AccountPage__container">
          <div className="c-AccountPage__underline"></div>
          <ul>
            <li>
              <div className="c-AccountPage__list">
                <span>Your Orders</span> <i className="fas fa-arrow-right"></i>
              </div>
            </li>
            {/* <li>
              <div className="c-AccountPage__list">
                <span>Settings</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </li> */}
            <li onClick={() => logOutUser()}>Sign Out</li>
          </ul>
        </div>
      </div>
      <div className="c-AccountPage__orders">
        <div>
          <h3 className="c-AccountPage__heading">Most Recent Orders</h3>
          <Orders order={userOrders} />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
