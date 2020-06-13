import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API"
function Login() {
  return (
    <main>
      <Form onSubmit={API.joinSession}>
        <Form.Group controlId="id">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
          <Form.Text className="text-muted">
            Any info entered will delete upon closing the app.
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Push ME!
        </Button>
      </Form>
    </main>
  );
}

export default Login;
