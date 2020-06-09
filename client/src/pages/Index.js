import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import API from "../utils/API";
import BusinessCard from "../components/BusinessCard";
import Controls from "../components/Controls";

function Index() {
  const [businesses, setBusinesses] = useState({})
  const [count, setCount] = useState(0)
  useEffect(() => {
    loadBusinesses()
  }, [])
  function getCount() {
    return count;
  }
  function loadBusinesses() {
    API.getBusinesses()
      .then(res => 
        setBusinesses(res.data)
      )
      .catch(err => console.log(err));
  };
  var functions = {
    incrementCount: () => {
      let count = getCount() + 1;
      if (count >= businesses.length) {
        count = 0;
      }
      
      setCount(count)
    },
    decreaseCount: () => {
      let count = getCount() - 1;
      if (count < 0) {
        count = businesses.length - 1
      }
      setCount(count)
    }
  }
  return (
    <main>
      <Row>
        <Col>
          <Container className='view'>
            {JSON.stringify(businesses) !='{}' ? (
              <BusinessCard {...businesses[count]} />
            ) : (
              <p></p>
            )}
            <Controls {...functions} business={businesses[count]} />
          </Container>
        </Col>
        <Col sm='3'>
          <div class='sideView'>
            test
          </div>
        </Col>
      </Row>
    </main>
  );
}

export default Index;