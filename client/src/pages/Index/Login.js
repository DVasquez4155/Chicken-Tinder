import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API"
function Login() {
  return (
    <main>
      <Form onSubmit={API.joinSession}>
        <Form.Group controlId="id">
          <Form.Label>Enter Group ID</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Join Session
        </Button>
      </Form>
    </main>
  );
}

export default Login;
