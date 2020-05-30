import React from 'react';
import { Container, Col, Row, ListGroup } from "react-bootstrap";

function RestaurantGroup(props) {
    return (
        <main>
            <ListGroup>
                <ListGroup.Item>
                    Business 1
                </ListGroup.Item>
                <ListGroup.Item>
                    Business 2
                </ListGroup.Item>
            </ListGroup>
        </main>
    );
}

export default RestaurantGroup;
