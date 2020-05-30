import React from "react";
import RestaurantGroup from "../RestaurantGroup";
import { Row, Container, Col } from "react-bootstrap";

require('./index.css')

function Nav() {
    return (
        <main className="d-md-none navigation">
                <Container >
                    <Row>
                        <Col>
                            Profile
                        </Col>
                        <Col>
                            Favorites?
                        </Col>
                        <Col>
                            Matches
                        </Col>
                    </Row>
                </Container>
        </main>
    );
}

export default Nav;
