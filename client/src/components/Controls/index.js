import React from 'react';

import { Container, Row, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faCheck, faTimes, faUndo, faShare } from '@fortawesome/free-solid-svg-icons'

require('./index.css')

const Controls = (props) => {
    return (
        <Container className='controls' fluid>
            <Row className='interactive-icon'>
                <Button onClick={()=>{props.decreaseCount()}} className='undo'>
                    <FontAwesomeIcon icon={faUndo}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} className='times large'>
                    <FontAwesomeIcon size="2x" icon={faTimes}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} className='question'>
                    <FontAwesomeIcon icon={faQuestion}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} className='check large'>
                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                </Button>
                <Button className='share'>
                    <FontAwesomeIcon icon={faShare}/>
                </Button>
            </Row>
        </Container>
    );
}

export default Controls;