import React, { useState } from "react";

import { Container, Row, Button } from 'react-bootstrap';

import API from "../../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faCheck, faTimes, faUndo, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'

require('./index.css')

const Controls = (props) => {
    const [icon, setIcon] = useState(farBookmark)
    function changeIcon(business) {
        if (icon === farBookmark) {
            setIcon(faBookmark)
            console.log(business)
            API.bookmark(business);
        }
        else { 
            setIcon(farBookmark)
            API.removeBookmark(business.id)
        }
    }
    console.log(props)
    return (
        <Container className='controls' fluid>
            <Row className='interactive-icon'>
                <Button onClick={()=>{props.decreaseCount()}} variant="outline-warning">
                    <FontAwesomeIcon icon={faUndo}/>
                </Button>
                <Button onClick={()=>{props.incrementCount(); API.noBusiness()}} className='times large' variant="outline-danger">
                    <FontAwesomeIcon size="2x" icon={faTimes}/>
                </Button>
                <Button onClick={()=>{props.incrementCount(); API.maybeBusiness()}} variant="outline-secondary">
                {/* <Button onClick={()=>{props.incrementCount()}} className='question'> */}
                    <FontAwesomeIcon icon={faQuestion}/>
                </Button>
                <Button onClick={()=>{props.incrementCount(); API.yesBusiness()}} className='check large' variant="outline-success">
                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                </Button>
                <Button onClick={()=>{changeIcon(props.business);}} variant="outline-primary">
                    <FontAwesomeIcon id="bookmark" icon={icon}/>
                </Button>
            </Row>
        </Container>
    );
}

export default Controls;