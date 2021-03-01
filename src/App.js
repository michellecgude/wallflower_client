// import React, { useState, useEffect } from "react";

import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Homepage />
      <Register />
      <Login />
      <Dashboard />
    </div>
  );
}

export default App;
