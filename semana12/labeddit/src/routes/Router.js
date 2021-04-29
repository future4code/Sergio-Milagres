import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PostFeedPage from "../pages/PostFeedPage";
import PostDetailPage from "../pages/PostDetailPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <LoginPage />
      </Route>
      <Route exact path={"/cadastro"}>
        <SignUpPage />
      </Route>
      <Route exact path={["/feed", "/"]}>
        <PostFeedPage />
      </Route>
      <Route exact path={"/detail/:id"}>
        <PostDetailPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
