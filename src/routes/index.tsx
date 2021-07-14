import FollowerProfile from "pages/FollowerProfile";
import Followers from "pages/Followers";
import Home from "pages/Home";
import Repositories from "pages/Repositories";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/followers" component={Followers} />
        <Route path="/follower-profile" component={FollowerProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
