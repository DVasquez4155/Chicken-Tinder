import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faCheck, faTimes, faUndo, faShare } from '@fortawesome/free-solid-svg-icons'

require('./index.css')

const Controls = () => {
    return (
        <Container className='controls'>
            <Row className='interactive-icon'>
                <Col>
                    <Button className='times'>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </Col>
                <Col>
                    <Button className='question'>
                        <FontAwesomeIcon icon={faQuestion}/>
                    </Button>
                </Col>
                <Col>
                    <Button className='check'>
                        <FontAwesomeIcon icon={faCheck}/>
                    </Button>
                </Col>
            </Row>
            <Row className='interactive-icon'>
                <Col>
                        <Button className='undo'>
                            <FontAwesomeIcon icon={faUndo}/>
                        </Button>
                    </Col>
                <Col>
                    <Button className='share'>
                        <FontAwesomeIcon icon={faShare}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Controls;