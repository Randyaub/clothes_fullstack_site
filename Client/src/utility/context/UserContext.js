import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useToken from "../useToken";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const { token, setToken } = useToken();
  const [load, setLoad] = useState();
  let history = useHistory();

  const logIn = (email, password, setError) => {
    axios
      .post("user/login", {
        email: email.trim(),
        password: password.trim(),
      })
      .then((res) => {
        setToken(res.data.JWT);
        history.push("/");
      })
      .catch(() => {
        setError(
          "The email and password you entered did not match our records. Please double check and try again"
        );
      });
  };

  const logOut = () => {
    setToken();
    setIsAuth(false);
    setUser();
    history.push("/");
  };

  //Logs user in if token changes and on initial
  useEffect(() => {
    setLoad(true);
    if (token) {
      axios({
        method: "GET",
        url: "user/account",
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          setUser(res.data);
          setIsAuth(true);
          setLoad(false);
        })
        .catch(() => {
          setLoad(false);
        });
    } else {
      setLoad(false);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuth, setIsAuth, logIn, logOut }}
    >
      {!load && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
