import React from 'react';
import { Card, Row, Col } from "react-bootstrap";

import Transactions from "../Transactions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDotCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const BusinessCard = (props) => {
    function printStars(amount) {
        const stars = [];
        for (var i = 0; i < amount; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} />)
        }
        return stars
    }
    function printDollar(amount) {
        const dollars = [];
        for (var i = 0; i < amount; i++) {
            dollars.push(<FontAwesomeIcon icon={faDollarSign} />)
        }
        return dollars
    }
    return ( 
        <Card>
            <Card.Img variant="top" src={props.image_url} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Row>
                            <Col><Card.Text>{printStars(props.rating)}</Card.Text></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text>
                                    {printDollar(props.price.length)}
                                    <FontAwesomeIcon icon={faDotCircle} transform="shrink-6"/>
                                    {props.categories[0].title}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Subtitle>
                <Transactions {...props}/>
            </Card.Body>
        </Card>
    );
}

export default BusinessCard;