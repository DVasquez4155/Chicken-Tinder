import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";

import BusinessCard from "../components/BusinessCard";

import db from "../Example.json"
class Index extends Component {
  state = {
    db
  }
  render() { 
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <BusinessCard {...db.businesses[0]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;