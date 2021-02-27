import React, { useState } from "react";

import ".././styles/register.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  // sets initial state for username and password to an empty string
  [username, setUsername] = useState("")[(password, setPassword)] = useState(
    ""
  );

  const handleChange = (event) => {
    return setUsername(event.target.value);
  };

  return (
    <div className="test">
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter your username." />
          <Form.Text className="text-muted">
            Welcome to the club, social butterfly.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password." />
          <Form.Text className="text-muted">
            Keep your account secure!
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
