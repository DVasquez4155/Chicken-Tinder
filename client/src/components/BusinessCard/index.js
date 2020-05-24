import React from 'react';
import { Row, Col, Container} from "react-bootstrap";

import Transactions from "../Transactions";
import Controls from "../Controls";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons'

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
        return (
        <main>
            <Container className='main'>
                <div className='profile'>
                    <div className='img' style={{backgroundImage:`url(${this.props.image_url})`}}/>
                    <div className='backgroundGradient'/>
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
                <Controls />
            </Container>
        </main>
        
    );}
}

export default BusinessCard;