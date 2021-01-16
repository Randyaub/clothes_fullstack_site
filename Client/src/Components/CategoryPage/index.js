import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import "./Category.css";
import CategorySideBar from "./CategorySideBar";
import CategoryAds from "./CategoryAds";
import CategoryProduct from "./CategoryProducts";
import NotFoundPage from "../NotFoundPage";

const Category = () => {
  let { type } = useParams();
  let { path } = useRouteMatch();

  return (
    <>
      {type !== "men" && type !== "women" ? (
        <NotFoundPage />
      ) : (
        <main className="c-Category">
          <CategorySideBar type={type} />
          <Switch>
            <Route exact path={`${path}/Shop-Category/:category/:subcategory`}>
              <CategoryProduct />
            </Route>
            <Route path={`${path}/Shop-Category/:category`}>
              <CategoryProduct />
            </Route>
            <Route path={path}>
              <CategoryAds type={type} />
            </Route>
          </Switch>
        </main>
      )}
    </>
  );
};

export default Category;
