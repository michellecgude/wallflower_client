// REACT IMPORTS
import React from "react";
import { Route } from "react-router-dom";

// STYLE IMPORTS
import "./styles/App.scss";

// COMPONENT IMPORTS
import Register from "./components/user_auth/Register.jsx";
import Login from "./components/user_auth/Login.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
