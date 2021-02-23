import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAuth, Component, properties, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth) {
          return <Component {...properties} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/men/Shop-Category/hoodies-and-sweatshirts",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
