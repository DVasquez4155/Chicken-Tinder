import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import RestaurantGroup from "../components/RestaurantGroup";

function Test() {
    return (
        <main>
            <Container className='view'>
                <RestaurantGroup />
            </Container>
        </main>
    );
}

export default Test;
