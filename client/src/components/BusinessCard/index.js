import React from 'react';
import $ from 'jquery';
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faInfo, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faUtensils, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { faPhone, faDirections, faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ListItem from '../ListItem';

require('./index.css')

class BusinessCard extends React.Component {
    getItems(props) {
        if (JSON.stringify(props) === "{}") {
            return [{}]
        }
        return [
            {
                icon: faMapMarkerAlt,
                value: props.distance,
                label: `${Math.round(props.distance * 0.000621371 * 100) / 100} miles`
            },
            {
                icon: faUtensils,
                value: props.transactions.indexOf("pickup"),
                label: "Pickup"
            },
            {
                icon:faMotorcycle,
                value: props.transactions.indexOf("delivery"),
                label:"Delivery"
            },
            {
                icon: faUtensils,
                value: props.transactions.indexOf("restaurant_reservation"),
                label:"Reservations"
            },
            // <hr />
            {
                icon: faPhone,
                value: props.phone,
                label:(<a href={`tel:${props.phone}`}>{props.display_phone}</a>)
            },
            {
                icon: faDirections,
                value: props.location.address,
                label: (<a href={`http://maps.google.com/maps?q=${props.location.display_address}`}>Directions</a>)
            },
            {
                icon: faLink,
                value: props.url,
                label: (<a href={props.url}>Yelp</a>)
            }
        ]
    }
    printStars(amount) {
        const stars = [];
        for (var i = 0; i < amount; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
        }
        return stars
    }
    printDollar(amount) {
        const dollars = [];
        for (var i = 0; i < amount; i++) {
            dollars.push(<FontAwesomeIcon key={i} icon={faDollarSign} />)
        }
        return dollars
    }
    render() {
        const items = this.getItems(this.props);
        items.forEach((item,i) => {
            if (item.value < 0) {
                items.splice(i,1)
            }
            return;
        });
        items.forEach((item,i) => {
            if (item.value === "") {
                items.splice(i,1)
            }
        })
        let dollars = ""
        if (this.props.price) {
            dollars = this.printDollar(this.props.price.length);
        }
        return (
                <div className='buisness-card'>
                    <div id='profile'>
                        <div className='visible'>
                            <div className='img' style={{backgroundImage:`url(${this.props.image_url})`}}/>
                            <div className='backgroundGradient'/>
                            <Container className='information'>
                            <Row>
                                <Col>
                                    <span>
                                        {this.props.name}
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>
                                        {this.printStars(this.props.rating)}
                                    </span>
                                </Col>
                                <Col>
                                    <span className='interactive-icon float-right'>
                                        <Button variant="light" id='info' onClick={() => {$('#profile').toggleClass('details');}}>
                                            <FontAwesomeIcon icon={faInfo} transform="shrink-5"/>
                                        </Button>
                                    </span>
                                </Col>
                                {/* <Col sm={2}/> */}
                            </Row>
                            <Row>
                                <Col>
                                    <span>
                                        {dollars}
                                        <span> • </span>
                                        {this.props.categories.join(", ")}
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                        </div>
                        <Container className='detail'>
                            <span className='interactive-icon hide'>
                                <Button variant="light" className='hide' onClick={() => {$('#profile').toggleClass('details')}}>
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </Button>
                            </span>
                            {items.map(item => (
                                <ListItem key={items.indexOf(item)} {...item} />
                            ))}
                        </Container>
                    </div>
                </div>
        );
    }
}

export default BusinessCard;