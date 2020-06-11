import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";

import "./index.css";
// var businesses = API.getBusinesses();
// console.log(businesses);

function RestaurantGroup(props) {
  const [businesses, setBusinesses] = useState({});
  useEffect(() => {
    loabusinessesusinesses();
  }, []);
  function loabusinessesusinesses() {
    API.getBusinesses()
      .then((res) => setBusinesses(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <main className="scroll scrollbar-near-moon">
      <hr />
      <h1>Top Matches</h1>
      <hr />
      <ListGroup>
        {JSON.stringify(businesses) !== "{}" ? (
          <div>
            {businesses.map((business) => (
              <ListGroup.Item border="success" className="side">
                <p>
                  {business.name} | {business.rating} Stars
                </p>
                <div className="info">
                  <a
                    className="address"
                    href={`http://maps.google.com/maps?q=${business.location.display_address[0]} ${business.location.display_address[1]}`}
                  >
                    {business.location.display_address}
                  </a>
                  <br />
                  <a href={`tel:${business.display_phone}`}>
                    {business.display_phone}
                  </a>
                </div>
              </ListGroup.Item>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </ListGroup>
    </main>
  );
}

export default RestaurantGroup;
