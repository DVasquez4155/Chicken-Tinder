import React from "react";
import RestaurantGroup from "../RestaurantGroup";
import { Row, Container, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser, faBookmark } from '@fortawesome/free-solid-svg-icons'

require('./index.css')

function Nav() {
    return (
        <main className="d-md-none navigation">
                <Container>
                    <Row className='interactive-icon nav-icon'>
                        <Button className="default" variant="link">
                            <FontAwesomeIcon className='default' icon={faUser}/>
                        </Button>
                        <Button  className="default" variant="link">
                            <FontAwesomeIcon className='default' icon={faBookmark}/>
                        </Button>
                        <Button  className="default" variant="link">
                            <FontAwesomeIcon className='default' icon={faStar}/>
                        </Button>
                    </Row>
                </Container>
        </main>
    );
}

export default Nav;
