import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import API from "../../utils/API";
import BusinessCard from "../../components/BusinessCard";
import Controls from "../../components/Controls";

function Index(props) {
  // const [businesses, setBusinesses] = useState({});
  const [count, setCount] = useState(0);
  
  // console.log(user)
  // function loadBusinesses() {
  //   API.getBusinesses(props.match.params.user)
  //     .then((res) => setBusinesses(res.data))
  //     .catch((err) => console.log(err));
  // }
  // useEffect(loadBusinesses, [])
  function getCount() {
    return count;
  }
  var functions = {
    incrementCount: () => {
      let count = getCount() + 1;
      if (count >= props.group.businesses.length) {
        count = 0;
      }
      props.functions.loadUser()
      props.functions.loadGroup()
      setCount(count);
    },
    decreaseCount: () => {
      let count = getCount() - 1;
      if (count < 0) {
        count = props.group.businesses.length - 1;
      }
      setCount(count);
    },
  };
  return (
    <main>
      <Row>
        <Col>
          <Container className="view">
            {JSON.stringify(props.group) !== "{}" ? (
              <div>
                <BusinessCard {...props.group.businesses[count]} />
                <Controls {...functions} user={props.user} business={props.group.businesses[count]} />
              </div>
            ) : (
              <p></p>
            )}
          </Container>
        </Col>
      </Row>
    </main>
  );
}

export default Index;
