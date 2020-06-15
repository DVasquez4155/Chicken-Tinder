import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import API from "../../utils/API";
import BusinessCard from "../../components/BusinessCard";
import Controls from "../../components/Controls";

function Index({match, user}) {
  const [businesses, setBusinesses] = useState({});
  const [count, setCount] = useState(0);
  
  // console.log(user)
  function loadBusinesses() {
    API.getBusinesses(match.params.user)
      .then((res) => setBusinesses(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(loadBusinesses, [])
  function getCount() {
    return count;
  }

  var functions = {
    incrementCount: () => {
      let count = getCount() + 1;
      if (count >= businesses.length) {
        count = 0;
      }

      setCount(count);
    },
    decreaseCount: () => {
      let count = getCount() - 1;
      if (count < 0) {
        count = businesses.length - 1;
      }
      setCount(count);
    },
  };
  return (
    <main>
      <Row>
        <Col>
          <Container className="view">
            {JSON.stringify(businesses) !== "{}" ? (
              <BusinessCard {...businesses[count]} />
            ) : (
              <p></p>
            )}
            <Controls {...functions} user={user} business={businesses[count]} />
          </Container>
        </Col>
      </Row>
    </main>
  );
}

export default Index;
