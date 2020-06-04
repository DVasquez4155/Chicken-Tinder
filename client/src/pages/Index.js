import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import API from "../utils/API";
import BusinessCard from "../components/BusinessCard";
import Controls from "../components/Controls";

function Index() {
  const [businesses, setBusinesses] = useState({})
  const [count, setCount] = useState(0)
  useEffect(() => {
    loadBusinesses()
  }, [])
  function loadBusinesses() {
    API.getBusinesses()
      .then(res => 
        setBusinesses(res.data)
      )
      .catch(err => console.log(err));
  };
  var functions = {
    incrementCount: () => {
      let count = this.state.count + 1;
      if (count >= this.state.businesses.length) {
        count = 0;
      }
      setCount(count)
    },
    decreaseCount: () => {
      let count = this.state.count - 1;
      if (count < 0) {
        count = this.state.businesses.length - 1
      }
      setCount(count)
    }
  }
  return (
    <main>
      <Container className='view'>
        {JSON.stringify(businesses) !='{}' ? (
          <BusinessCard {...businesses[count]} />
        ) : (
          <p></p>
        )}
        <Controls {...functions} />
      </Container>
    </main>
  );
}

export default Index;