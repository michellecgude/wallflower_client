// import { useHistory, Redirect, Route, Switch } from "react-router-dom";

// REACT IMPORTS
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

// CONTEXT IMPORT
import WallflowerContext from "./WallflowerContext";

// COMPONENTS
import Homepage from "./pages/Homepage";
import UserRegister from "./components/user_auth/register/UserRegister";
import UserLogin from "./components/user_auth/login/UserLogin";
import MoodPrompt from "./components/dashboard/moods/MoodPrompt";
import Dashboard from "./pages/Dashboard";
import MoodBoard from "./components/dashboard/moods/MoodBoard";
import AddMoods from "./components/dashboard/moods/AddMoods";
import MeditationBoard from "./components/dashboard/meditations/MeditationBoard";
import AddMeditations from "./components/dashboard/meditations/AddMeditations";
import UpliftingBoard from "./components/dashboard/upliftingcontent/UpliftingBoard";
import AddUpliftingContent from "./components/dashboard/upliftingcontent/AddUpliftingContent";

// CSS
import "./styles/App.scss";

export default function App() {
  // USE STATE VARIABLES
  const [verified, setVerified] = useState(false); // checks whether user is logged in or not depening upon token
  const [moods, setMoods] = useState([]);
  const [meditations, setMeditations] = useState([]);
  const [uplifting, setUplifting] = useState([]);

  // USE EFFECT
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
          meditations,
          setMeditations,
          uplifting,
          setUplifting,
        }}
      >
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/howareyou/" component={MoodPrompt} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/moods" component={MoodBoard} />
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
