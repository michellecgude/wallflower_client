import React, { useState, useEffect } from "react";

import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  const [form, setForm] = "";
  const [authenticated, setAuth] = localStorage.getItem("token")
    ? "true"
    : "false";
  const [username, setUsername] = "";

  useEffect(() => {
    if (authenticated) {
      fetch("https://wallflower-serverside.herokuapp.com/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setUsername(json.username);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  handleLogin = (event, data) => {
    event.preventDefault();
    fetch("https://wallflower-serverside.herokuapp.com/token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        authenticated = true;
        form = "";
        username = json.user.username;
      });
  };

  handleSignup = (event, data) => {
    event.preventDefault();
    fetch("http://localhost:8000/core/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        authenticated = true;
        form = "";
        username = json.username;
      });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
  };

  display_form = (form) => {
    this.setState({
      displayed_form: form,
    });
  };

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
