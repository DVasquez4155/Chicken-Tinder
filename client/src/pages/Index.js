import React from "react";
import { Container } from "react-bootstrap";

import BusinessCard from "../components/BusinessCard";
import Controls from "../components/Controls";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        
        <Container className='view'>
          <BusinessCard {...this.props.businesses[this.props.count]} />
          <Controls {...this.props.functions} />
        </Container>
      </main>
    );
  }
}

export default Index;