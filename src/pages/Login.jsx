import React, { useState } from "react";

import ".././styles/register.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logValues = () => {
    console.log(username);
    console.log(password);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="test">
      <Form>
        <h1>Login Here.</h1>
        {/*  this is where you'll pass the function/props from the app to signup  */}
        <Form.Group controlId="registerForm">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter your username."
            name="username"
            value={username}
            onChange={handleUsername}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password."
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <Form.Text className="text-muted">
            Welcome back, social butterfly.
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="button" onClick={logValues}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
