import React from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";

import Transactions from "../Transactions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDotCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faQuestion, faCheck, faTimes, faUndo, faShare } from '@fortawesome/free-solid-svg-icons'

require('./index.css')

class BusinessCard extends React.Component {
    printStars(amount) {
        const stars = [];
        for (var i = 0; i < amount; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} />)
        }
        return stars
    }
    printDollar(amount) {
        const dollars = [];
        for (var i = 0; i < amount; i++) {
            dollars.push(<FontAwesomeIcon icon={faDollarSign} />)
        }
        return dollars
    }
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this)
        return (
        <main>
            <Container className='main'>
                <Row>
                    <Col xs sm md lg>
                        <div className='profile'>
                            <div class='img' style={{backgroundImage:`url(${this.props.image_url})`}}/>
                            <Container className='information'>
                                <span>{this.props.name}</span>
                                <Row>
                                    <Col><span>{this.printStars(this.props.rating)}</span></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>
                                            {this.printDollar(this.props.price.length)}
                                            <span> • </span>
                                            {this.props.categories.map(catigory => (
                                                catigory.title
                                            ))}
                                        </span>
                                    </Col>
                                </Row>
                                {/* <Transactions {...props}/> */}
                            </Container>
                        </div>
                    </Col>
                </Row>
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
        </main>
        
    );}
}

export default BusinessCard;