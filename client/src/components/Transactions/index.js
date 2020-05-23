import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from "react-bootstrap";
const transactionTypes = {
    pickup : (
        <Col><FontAwesomeIcon icon={faUtensils} /><br/>Pickup</Col>
    ),
    delivery : (
        <Col><FontAwesomeIcon icon={faMotorcycle} /><br/>Delivery</Col>
    ),
    restaurant_reservation : (
        <Col><FontAwesomeIcon icon={faUtensils} /><br/>Reserve</Col>
    )
}
const Transactions = (props) => {
    return (
    <Row className='transactions'>
        {props.transactions.map(transaction => (
            transactionTypes[transaction]
        ))}
    </Row>
    );
}

export default Transactions;