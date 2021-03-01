import React, { useState } from "react";

import ".././styles/register.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  // sets initial state for username and password to an empty string
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
          <Form.Text className="text-muted">
            Welcome to the club, social butterfly.
          </Form.Text>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password."
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <Form.Text className="text-muted">
            Keep your account secure!
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="button" onClick={logValues}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
