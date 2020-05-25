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
        let count = this.state.count + 1;
        if (count >= this.state.businesses.length) {
          count = 0;
        }
        this.setState({
          count: count
        });
      },
      decreaseCount: () => {
        let count = this.state.count - 1;
        if (count < 0) {
          count = this.state.businesses.length - 1
        }
        this.setState({
          count: count
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