import { useUser } from "hooks/useUser";
import ExternalProfile from "pages/ExternalProfile";
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
            <Route exact path="/followers/:login" component={ExternalProfile} />
            <Route exact path="/following/:login" component={ExternalProfile} />
            <Route exact path="/followers" component={Followers} />
            <Route exact path="/following" component={Following} />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
