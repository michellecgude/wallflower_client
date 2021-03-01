import React, { useState } from "react";

import ".././styles/register.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  const initialFormState = {
    name: "",
    email: "",
    username: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState(formState);
    // is this saving?
    console.log(formState);
  };

  return (
    <div className="test">
      <Form onSubmit={handleSubmit}>
        <h1>Register Here.</h1>
        {/*  this is where you'll pass the function/props from the app to signup  */}
        <Form.Group controlId="registerForm">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name."
            name="name"
            defaultValue={formState.name}
            onChange={handleChange}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email."
            name="email"
            defaultValue={formState.email}
            onChange={handleChange}
          />
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter your username."
            name="username"
            defaultValue={formState.username}
            onChange={handleChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password."
            name="password"
            defaultValue={formState.password}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Welcome to the club, social butterfly.
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
