import React, { useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import SideBar from "./navigation/SideBar";
import ListOfProducts from "./ListOfProducts";
import NotFoundPage from "../NotFoundPage";
import MobileMenu from "./navigation/MobileMenu";

import "./Shopping.css";

const Shopping = () => {
  let { gender } = useParams();
  let { path } = useRouteMatch();

  const [categories, setCategories] = useState([]);

  return (
    <>
      {gender !== "men" && gender !== "women" ? (
        <NotFoundPage />
      ) : (
        <>
          <MobileMenu categories={categories} />
          <main className="c-Shopping">
            <SideBar
              gender={gender}
              setCategories={setCategories}
              categories={categories}
            />
            <Switch>
              <Route
                exact
                path={`${path}/Shop-Category/:category/:subcategory`}
              >
                <ListOfProducts />
              </Route>
              <Route exact path={`${path}/Shop-Category/:category`}>
                <ListOfProducts />
              </Route>
            </Switch>
          </main>
        </>
      )}
    </>
  );
};

export default Shopping;
