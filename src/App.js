// just as a note! don't forget to add/consider material ui icons!
// documentation here : https://material-ui.com/components/icons/

// react imports
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// component imports
import LandingPage from "./components/LandingPage";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={UserRegister} />
      <Route exact path="/login" component={UserLogin} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
