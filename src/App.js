// react imports
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// component imports
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/Dashboard";
import MoodTracker from "./components/MoodTracker";
import HabitTracker from "./components/HabitTracker.jsx";
import Meditations from "./components/Meditations";
import UpliftingContent from "./components/UpliftingContent";

// CSS
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={UserRegister} />
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/moods" component={MoodTracker} />
      <Route exact path="/dashboard/habits" component={HabitTracker} />
      <Route exact path="/dashboard/meditations" component={Meditations} />
      <Route
        exact
        path="/dashboard/upliftingcontent"
        component={UpliftingContent}
      />

      {/* <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/moods" component={MoodTracker} />
        <PrivateRoute exact path="/dashboard/habits" component={HabitTracker} />
        <PrivateRoute exact path="/dashboard/meditations" component={Meditations} />
        <PrivateRoute exact path="/dashboard/upliftingcontent" component={UpliftingContent} />
      </Switch> */}
    </div>
  );
}
