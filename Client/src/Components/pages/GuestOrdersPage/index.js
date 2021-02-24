import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuestOrdersPage.css";

import Orders from "../../common/Orders";

const GuestOrdersPage = ({ loading, setLoading }) => {
  const [guestOrders, setGuestOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({ method: "GET", url: "user/account/guest" }).then((result) => {
      setGuestOrders(result.data.guest_orders);
      setLoading(false);
    });
  }, [setLoading]);

  return loading ? (
    ""
  ) : (
    <div>
      <h1>THE 10 MOST RECENT GUEST ORDERS</h1>
      <Orders order={guestOrders} />
    </div>
  );
};

export default GuestOrdersPage;
