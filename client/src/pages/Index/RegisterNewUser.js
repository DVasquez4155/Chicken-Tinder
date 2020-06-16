import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API"
function RegisterNewUser(props) {
    console.log(props.match.params.group)
    return (
        <main>
            <Form onSubmit={event => {API.joinGroupSession(event, props.match.params.group)}}>
                <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                Join
                </Button>
            </Form>
        </main>
    );
}

export default RegisterNewUser;
