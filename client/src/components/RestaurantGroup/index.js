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
      {JSON.stringify(businesses) !=='{}' ? (
        <div>
        {businesses.map((business) => (
            <ListGroup.Item border="success" className="side">
              <h5>
                {" "}
                {business.name}
                {"  "}
                {business.price}
              </h5>

              <span>
                <Image src={business.image_url} roundedCircle />

                <a href={`tel:${business.display_phone}`}>
                  {business.display_phone}
                </a>
              </span>
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
