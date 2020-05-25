import React from "react";
import { Container } from "react-bootstrap";

import BusinessCard from "../components/BusinessCard";
import Controls from "../components/Controls";

import API from "../utils/API";
class Index extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
      this.state = {
        businesses: API.getBusinesses(),
        count: 0
      }
  }
  render() {
    var functions = {
      incrementCount: () => {
        this.setState({
          count: this.state.count + 1
        });
      },
      decreaseCount: () => {
        this.setState({
          count: this.state.count - 1
        });
      }
    }
    return (
      <main>
        <Container className='view'>
          <BusinessCard {...this.state.businesses[this.state.count]} />
          <Controls {...functions} />
        </Container>
      </main>
    );
  }
}

export default Index;