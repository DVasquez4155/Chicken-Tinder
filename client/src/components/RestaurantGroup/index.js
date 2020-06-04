import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import "./index.css";
// var businesses = API.getBusinesses();
// console.log(businesses);

function RestaurantGroup(props) {
  const [businesses, setBusinesses] = useState({})
  useEffect(() => {
    loabusinessesusinesses()
  }, [])
  function loabusinessesusinesses() {
    API.getBusinesses()
      .then(res => 
        setBusinesses(res.data)
      )
      .catch(err => console.log(err));
  };
  return (
    <main>
      <ListGroup className>
      {JSON.stringify(businesses) !='{}' ? (
        <ListGroup.Item>
          <h5>
            {" "}
            {businesses[0].name}
            {"--"}
            {businesses[0].price}
          </h5>

          <span class="side">
            <Image src={businesses[0].image_url} roundedCircle />
            {businesses[0].display_phone}
          </span>
        </ListGroup.Item>
        ) : (
          <p></p>
        )}
      </ListGroup>
    </main>
  );
}

export default RestaurantGroup;
