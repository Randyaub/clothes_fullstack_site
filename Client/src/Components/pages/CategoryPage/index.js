import React, { useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import "./Category.css";
import CategorySideBar from "./CategorySideBar";
import CategoryProduct from "./CategoryProducts";
import NotFoundPage from "../NotFoundPage";
import CategorySubMenu from "./CategorySubMenu";

const Category = () => {
  let { type } = useParams();
  let { path } = useRouteMatch();

  const [currentCategory, setCurrentCategory] = useState();
  const [categories, setCategories] = useState([]);

  return (
    <>
      {type !== "men" && type !== "women" ? (
        <NotFoundPage />
      ) : (
        <>
          <CategorySubMenu categories={categories} />
          <main className="c-Category">
            <CategorySideBar
              currentCategory={currentCategory}
              type={type}
              setCategories={setCategories}
              categories={categories}
            />
            <Switch>
              <Route
                exact
                path={`${path}/Shop-Category/:category/:subcategory`}
              >
                <CategoryProduct setCurrentCategory={setCurrentCategory} />
              </Route>
              <Route exact path={`${path}/Shop-Category/:category`}>
                <CategoryProduct setCurrentCategory={setCurrentCategory} />
              </Route>
            </Switch>
          </main>
        </>
      )}
    </>
  );
};

export default Category;
