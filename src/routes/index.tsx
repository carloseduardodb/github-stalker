import { useUser } from "hooks/useUser";
import FollowerProfile from "pages/FollowerProfile";
import Followers from "pages/Followers";
import Following from "pages/Following";
import Home from "pages/Home";
import Repositories from "pages/Repositories";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  const { user } = useUser();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {user ? (
          <>
            <Route path="/home" component={Home} />
            <Route path="/repositories" component={Repositories} />
            <Route path="/followers" component={Followers} />
            <Route path="/following" component={Following} />
            <Route path="/follower/:login" component={FollowerProfile} />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
