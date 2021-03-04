// react imports
import React, { useState, useEffect } from "react";
import { useHistory, Redirect, Route, Switch } from "react-router-dom";

// user component imports
import Context from "./components/user_auth/Context";
import UserRegister from "./components/user_auth/UserRegister";
import UserLogin from "./components/user_auth/UserLogin";

// page component imports
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";

// dashboard component imports
import Dashboard from "./components/dashboard/Dashboard";
import MoodPrompt from "./components/MoodPrompt";
import MoodBoard from "./components/dashboard/MoodBoard";
import HabitBoard from "./components/dashboard/HabitBoard.jsx";
import MeditationBoard from "./components/dashboard/MeditationBoard";
import UpliftingBoard from "./components/dashboard/UpliftingBoard";

// CSS
import "./App.css";

export default function App() {
  // global contextual user state for authentication
  const [isAuthed, setAuth] = useState(false);

  // eventually add user roles to contextual state if possible ?

  // checks for user authentication, sets auth depending upon email & token validation
  const checkAuth = () => {
    if (localStorage.email && localStorage.token) setAuth(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Context.Provider
        globalAuthValues={{
          isAuthed,
          setAuth,
        }}
      >
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/howareyou" component={MoodPrompt} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/moods" component={MoodBoard} />
        <Route exact path="/dashboard/habits" component={HabitBoard} />
        <Route
          exact
          path="/dashboard/meditations"
          component={MeditationBoard}
        />
        <Route
          exact
          path="/dashboard/upliftingcontent"
          component={UpliftingBoard}
        />
      </Context.Provider>

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
