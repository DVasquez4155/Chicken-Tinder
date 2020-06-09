import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <main>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
          <Form.Text className="text-muted">
            Any info entered will delete upon closing the app.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Push ME!
        </Button>
      </Form>
    </main>
  );
}

export default Login;
