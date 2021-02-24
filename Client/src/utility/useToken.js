import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (userToken === undefined) {
      localStorage.removeItem("token");
      setToken(null);
    } else {
      localStorage.setItem("token", userToken);
      setToken(userToken);
    }
  };

  return {
    setToken: saveToken,
    token,
  };
}
