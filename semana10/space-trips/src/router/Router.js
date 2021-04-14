import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/candidate/:id"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>
        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>
        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
