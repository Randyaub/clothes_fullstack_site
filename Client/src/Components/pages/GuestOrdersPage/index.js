import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuestOrdersPage.css";

import Orders from "../../common/Orders";

const GuestOrdersPage = () => {
  const [guestOrders, setGuestOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({ method: "GET", url: "user/account/guest" }).then((result) => {
      setGuestOrders(result.data.guest_orders);
      setLoading(false);
    });
  }, []);

  return loading ? (
    ""
  ) : (
    <div>
      <h1 className="c-GuestOrdersPage__title">RECENT GUEST ORDERS</h1>
      <Orders order={guestOrders} />
    </div>
  );
};

export default GuestOrdersPage;
