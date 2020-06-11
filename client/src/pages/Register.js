import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API"
function Login() {
  return (
    <main>
      <Form onSubmit={API.createSession}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Text className="text-muted">
            Any info entered will delete upon closing the app.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="zip">
          <Form.Label>ZIP Code</Form.Label>
          <Form.Control type="text" placeholder="ZIP Code" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Do it Again! I dare you.
        </Button>
      </Form>
    </main>
  );
}

export default Login;
