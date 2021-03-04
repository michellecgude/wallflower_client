// react imports
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// component imports
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";
import UserRegister from "./components/user_auth/UserRegister";
import UserLogin from "./components/user_auth/UserLogin";
import Dashboard from "./components/dashboard/Dashboard";
import MoodBoard from "./components/dashboard/MoodBoard";
import HabitBoard from "./components/dashboard/HabitBoard.jsx";
import MeditationBoard from "./components/dashboard/MeditationBoard";
import UpliftingBoard from "./components/dashboard/UpliftingBoard";

// CSS
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={UserRegister} />
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/moods" component={MoodBoard} />
      <Route exact path="/dashboard/habits" component={HabitBoard} />
      <Route exact path="/dashboard/meditations" component={MeditationBoard} />
      <Route
        exact
        path="/dashboard/upliftingcontent"
        component={UpliftingBoard}
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
