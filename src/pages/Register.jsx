import React, { useState } from "react";

import ".././styles/register.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  // sets initial state for username and password to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // helps me to check whether the form is working as intended
  const logValues = () => {
    console.log(name);
    console.log(email);
    console.log(username);
    console.log(password);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name."
            name="name"
            value={name}
            onChange={handleName}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email."
            name="email"
            value={email}
            onChange={handleEmail}
          />
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
            Welcome to the club, social butterfly.
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="button" onClick={logValues}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
