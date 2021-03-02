// import React, { useState, useEffect } from "react";
// useContext to handle global state of user auth & conditional rendering?

import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function App() {

  return (
    <div className="App">
      {/* homepage */}

      
      <Homepage />

      {/* <Register />
      <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;
