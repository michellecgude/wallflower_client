// import { useHistory, Redirect, Route, Switch } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import WallflowerContext from "./components/user_auth/WallflowerContext";

// user component imports
import UserRegister from "./components/user_auth/register/UserRegister";
import UserLogin from "./components/user_auth/login/UserLogin";

// page component imports
import LandingPage from "./components/LandingPage";
import UserRolePrompt from "./components/user_auth/register/UserRolePrompt";

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
  // wallflower state
  const [verified, setVerified] = useState(false); // checks whether user is logged in or not depening upon token
  const [moods, setMoods] = useState([]);
  const [habits, setHabits] = useState([]);
  const [meditations, setMeditations] = useState([]);
  const [uplifting, setUplifting] = useState([]);

  useEffect(() => {
    if (localStorage.getItem.email && localStorage.getItem.access_token) {
      setVerified(true);
    }
  }, []);

  return (
    <div className="App">
      <WallflowerContext.Provider
        value={{
          verified,
          setVerified,
          moods,
          setMoods,
          habits,
          setHabits,
          meditations,
          setMeditations,
          uplifting,
          setUplifting,
        }}
      >
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/reason" component={UserRolePrompt} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/howareyou/" component={MoodPrompt} />
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
      </WallflowerContext.Provider>

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
