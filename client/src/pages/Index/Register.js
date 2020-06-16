import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API"
function Login() {
  return (
    <main>
      <Form onSubmit={API.createSession}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Data will only be stored for a week
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="zip">
          <Form.Label>ZIP Code</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Session
        </Button>
      </Form>
    </main>
  );
}

export default Login;
