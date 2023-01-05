import React from "react";
import { Switch, Route } from "react-router-dom";

import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import UserDetails from "./pages/UserDetails";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Teams />
      </Route>
      <Route exact path="/teamDetail/:id">
        <TeamDetails />
      </Route>
      <Route exact path="/userDetail/:id">
        <UserDetails />
      </Route>
    </Switch>
  );
};