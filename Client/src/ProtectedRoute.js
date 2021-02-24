import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAuth, Component, properties, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} {...properties} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/men/Shop-Category/hoodies-and-sweatshirts",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
