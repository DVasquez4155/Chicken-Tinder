import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import API from "../utils/API";
import BusinessCard from "../components/BusinessCard";
import Controls from "../components/Controls";

function Index(props) {
  const [businesses, setBusinesses] = useState({});
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    loadBusinesses();
    loadUser();
  }, []);
  function getCount() {
    return count;
  }

  function loadUser() {
    API.getUser(props.match.params.user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function loadBusinesses() {
    API.getBusinesses(props.match.params.user)
      .then((res) => setBusinesses(res.data))
      .catch((err) => console.log(err));
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
            <Controls {...functions} business={businesses[count]} />
          </Container>
        </Col>
      </Row>
    </main>
  );
}

export default Index;
