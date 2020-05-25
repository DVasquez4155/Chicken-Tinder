import React from 'react';

import { Container, Row, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faCheck, faTimes, faUndo, faBookmark } from '@fortawesome/free-solid-svg-icons'

require('./index.css')

const Controls = (props) => {
    return (
        <Container className='controls' fluid>
            <Row className='interactive-icon'>
                <Button onClick={()=>{props.decreaseCount()}} variant="outline-warning">
                    <FontAwesomeIcon icon={faUndo}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} className='times large' variant="outline-danger">
                    <FontAwesomeIcon size="2x" icon={faTimes}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} variant="outline-secondary">
                {/* <Button onClick={()=>{props.incrementCount()}} className='question'> */}
                    <FontAwesomeIcon icon={faQuestion}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} className='check large' variant="outline-success">
                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                </Button>
                <Button onClick={()=>{props.incrementCount()}} variant="outline-primary">
                    <FontAwesomeIcon icon={faBookmark}/>
                </Button>
            </Row>
        </Container>
    );
}

export default Controls;