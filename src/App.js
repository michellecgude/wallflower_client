// REACT IMPORTS
import React from "react";
import { Route } from "react-router-dom";

// STYLE IMPORTS
import "./styles/App.scss";

// COMPONENT IMPORTS
import Landing from "./components/Landing.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
