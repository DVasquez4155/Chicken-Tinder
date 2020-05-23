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
      <BusinessCard {...db.businesses[0]} />
    );
  }
}

export default Index;